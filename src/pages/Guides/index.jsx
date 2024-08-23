import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';

import PATH_OF_METHODS from '../../constants/guides';

import './style.scss';

function Guides() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('/chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMethodTitle, setActiveMethodTitle] = useState('');

  useEffect(() => {
    if (location.pathname !== '/guides') {
      setActivePath(location.pathname);
      const activeMethod = PATH_OF_METHODS.find(
        (method) => method.path === location.pathname,
      );
      setActiveMethodTitle(activeMethod ? activeMethod.title : '');
    }
  }, [location]);

  useEffect(() => {
    // Prevent scrolling on the main content when sidebar is open
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <div className="page-guides">
      <div className="sub-header-mobile">
        <button
          type="button"
          onClick={toggleSidebar}
          className="btn-toggle-sidebar"
        >
          ☰
        </button>
        <h2 className="method-title">{activeMethodTitle}</h2>
      </div>
      <div className="inner">
        <Sidebar
          title="Methods"
          items={PATH_OF_METHODS}
          activePath={activePath}
          onItemClick={handleMenuItemClick}
          onClose={toggleSidebar}
          className={isSidebarOpen ? 'open' : ''}
        />
        <div className="content">
          <Outlet />
        </div>
      </div>
      {isSidebarOpen && (
        <button
          type="button"
          className="sidebar-dim"
          onClick={toggleSidebar}
          aria-label="사이드바 닫기"
          tabIndex={0}
        />
      )}
    </div>
  );
}

export default Guides;
