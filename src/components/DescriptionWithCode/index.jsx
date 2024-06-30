import PropTypes from 'prop-types';

import CodeBlock from '../CodeBlock';

import './style.scss';

function DescriptionWithCode({ text, code }) {
  return (
    <div className="box-description-code">
      <p className="text">{text}</p>
      <CodeBlock code={code} />
    </div>
  );
}

DescriptionWithCode.propTypes = {
  text: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default DescriptionWithCode;
