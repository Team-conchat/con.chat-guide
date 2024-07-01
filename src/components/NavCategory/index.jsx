import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { NAV_CATEGORY } from '../../constants/routes';

import './style.scss';

function NavCategory({ sectionRefs }) {
  const [activeId, setActiveId] = useState(NAV_CATEGORY[0].id);
  const isScrolling = useRef(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;

          if (entry.isIntersecting && !isScrolling.current) {
            setActiveId(id);
          }
        });
      },
      { threshold: 0.9 },
    );

    const currentObserver = observer.current;

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        currentObserver.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          currentObserver.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        const sectionKeys = Object.keys(sectionRefs);

        const currentSection = sectionKeys.find((id) => {
          const section = sectionRefs[id].current;
          const rect = section.getBoundingClientRect();

          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          );
        });

        if (currentSection && currentSection !== activeId) {
          setActiveId(currentSection);
        }

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          setActiveId(sectionKeys[sectionKeys.length - 1]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeId, sectionRefs]);

  const handleClick = (id) => {
    setActiveId(id);

    const element = sectionRefs[id].current;

    if (element) {
      isScrolling.current = true;
      const offset = 200;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <nav className="nav-category">
      <ul>
        {NAV_CATEGORY.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
              className={`btn-category ${activeId === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavCategory.propTypes = {
  sectionRefs: PropTypes.objectOf(
    PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }),
  ).isRequired,
};

export default NavCategory;
