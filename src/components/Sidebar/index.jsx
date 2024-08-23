import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

function Sidebar({
  title,
  items,
  activePath,
  className,
  onItemClick,
  onClose,
}) {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="sidebar-title">{title}</div>
      <ul className="sidebar-menu">
        {items.map((item) => (
          <li
            key={item.id}
            className={`item-menu ${activePath === item.path ? 'is-active' : ''}`}
          >
            <Link to={item.path} onClick={() => onItemClick(item.path)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="btn-close-sidebar-mobile"
        onClick={onClose}
        aria-label="사이드바 닫기"
      >
        &times;
      </button>
    </aside>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activePath: PropTypes.string.isRequired,
  className: PropTypes.string,
  onItemClick: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
