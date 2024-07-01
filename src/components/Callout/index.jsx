import PropTypes from 'prop-types';

import './style.scss';

function Callout({ icon, backgroundColor, children }) {
  return (
    <div className="callout" style={{ backgroundColor }}>
      <span className="callout-icon">{icon}</span>
      <div className="callout-content">{children}</div>
    </div>
  );
}

Callout.propTypes = {
  icon: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Callout.defaultProps = {
  backgroundColor: '#e2e2e2', // 기본 배경색
};

export default Callout;
