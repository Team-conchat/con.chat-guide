import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

function Sidebar({ title, items, activePath }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">{title}</div>
      <ul className="sidebar-menu">
        {items.map((item) => (
          <li
            key={item.id}
            className={`item-menu ${activePath === item.path ? 'is-active' : ''}`}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
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
};

export default Sidebar;
