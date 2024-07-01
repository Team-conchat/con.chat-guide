import PropTypes from 'prop-types';

import './style.scss';

function GuideContent({ title, description, children }) {
  return (
    <article className="guide-content">
      <h2 className="title-guide">{title}</h2>
      <div className="section-content">
        <p>{description}</p>
      </div>
      {children}
    </article>
  );
}

GuideContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GuideContent;
