import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function IntroSection({ id, title, children }, ref) {
  return (
    <section id={id} ref={ref} className="section-intro-category">
      <h3 className="title-category">{title}</h3>
      {children}
    </section>
  );
}

const ForwardedIntroSection = forwardRef(IntroSection);

IntroSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ForwardedIntroSection;
