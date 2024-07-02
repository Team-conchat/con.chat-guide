import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="container-sample">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
