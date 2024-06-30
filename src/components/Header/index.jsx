import { Link, NavLink } from 'react-router-dom';

import { NAV_LINKS } from '../../constant/routes';

import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <h1>
          <Link to="/" className="logo">
            🌽 con.chat
          </Link>
        </h1>
        <nav className="nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
