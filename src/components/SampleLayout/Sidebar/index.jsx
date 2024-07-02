import PropTypes from 'prop-types';

import './style.scss';

function Sidebar({ title, items }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">{title}</div>
      <ul className="sidebar-menu">
        {items.map((item) => (
          <li key={item.id} className={`item-menu ${item.className}`} />
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
      className: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Sidebar;
