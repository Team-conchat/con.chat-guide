import { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import copyIcon from '../../assets/icons/icon-copy.png';

function CodeBlock({ code }) {
  const [isActiveCopyMessage, setIsActiveCopyMessage] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);

    setIsActiveCopyMessage(true);

    setTimeout(() => {
      setIsActiveCopyMessage(false);
    }, 1000);
  };

  return (
    <div className="code-example">
      <pre>
        <code>{code}</code>
      </pre>
      <div className="code-copy">
        <button type="button" className="btn-copy" onClick={copyToClipboard}>
          <img src={copyIcon} alt="코드 복사" />
        </button>
        <span
          className={`copy-icon-message ${isActiveCopyMessage ? 'is-active' : ''}`}
          role="alert"
        >
          Copied!
        </span>
      </div>
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeBlock;
