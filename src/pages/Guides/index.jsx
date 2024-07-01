import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';

import PATH_OF_METHODS from '../../constants/guides';

import './style.scss';

function Guides() {
  const location = useLocation();
  const [activePath, setActivePath] = useState('/chat');

  useEffect(() => {
    if (location.pathname !== '/guides') {
      setActivePath(location.pathname);
    }
  }, [location]);

  return (
    <div className="page-guides">
      <div className="inner">
        <Sidebar
          title="Methods"
          items={PATH_OF_METHODS}
          activePath={activePath}
        />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Guides;
