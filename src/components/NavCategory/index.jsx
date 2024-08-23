import React, { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { NAV_CATEGORY } from '../../constants/routes';

import './style.scss';

function NavCategory({ sectionRefs }) {
  const [activeId, setActiveId] = useState(NAV_CATEGORY[0].id);
  const [visibleSections, setVisibleSections] = useState({});
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef(null);

  const handleIntersection = useCallback((entries) => {
    if (isScrollingRef.current) return;

    entries.forEach((entry) => {
      setVisibleSections((prev) => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting,
      }));
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.1, 0.5, 1],
      rootMargin: '-10% 0px -10% 0px',
    });

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs, handleIntersection]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      const isAtBottom = Math.abs(documentHeight - scrollBottom) < 1;

      if (isAtBottom) {
        setActiveId('areaClose');

        return;
      }

      const isNearBottom = documentHeight - scrollBottom <= 20;

      if (isNearBottom) {
        const guideElement = sectionRefs.areaGuide.current;
        const guideRect = guideElement.getBoundingClientRect();

        if (guideRect.bottom > 0 && guideRect.top < windowHeight) {
          setActiveId('areaGuide');
        }

        return;
      }

      let closestSection = NAV_CATEGORY[0].id;
      let minDistance = Infinity;

      NAV_CATEGORY.forEach(({ id }) => {
        if (id === 'areaClose') return;

        const element = sectionRefs[id].current;

        if (element && visibleSections[id]) {
          const { top, bottom } = element.getBoundingClientRect();
          const distance = Math.abs(windowHeight / 2 - (top + bottom) / 2);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveId(closestSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs, visibleSections]);

  const handleClick = useCallback(
    (id) => {
      setActiveId(id);
      const element = sectionRefs[id].current;

      if (element) {
        isScrollingRef.current = true;

        let scrollToPosition;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (id === 'areaClose') {
          scrollToPosition = documentHeight - windowHeight;
        } else if (id === 'areaGuide') {
          scrollToPosition = documentHeight - windowHeight - 10;
        } else {
          const offset = windowHeight * 0.1;
          scrollToPosition =
            element.getBoundingClientRect().top + window.scrollY - offset;
        }

        scrollToPosition = Math.min(
          scrollToPosition,
          documentHeight - windowHeight,
        );

        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth',
        });

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    },
    [sectionRefs],
  );

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
