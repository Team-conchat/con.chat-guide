import PropTypes from 'prop-types';

import './style.scss';

function Section({ children }) {
  return (
    <section className="section-sample">
      <div className="section-content">{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
