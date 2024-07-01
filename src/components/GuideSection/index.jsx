import PropTypes from 'prop-types';

import './style.scss';

function GuideSection({ title, children }) {
  return (
    <section>
      <h3 className="title-section">{title}</h3>
      <div className="section-content">{children}</div>
    </section>
  );
}

GuideSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GuideSection;
