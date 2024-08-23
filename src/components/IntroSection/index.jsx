import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const IntroSection = forwardRef(({ id, title, children }, ref) => (
  <section id={id} ref={ref} className="section-intro-category">
    <h3 className="title-category">{title}</h3>
    {children}
  </section>
));

IntroSection.displayName = 'IntroSection';

IntroSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default IntroSection;
