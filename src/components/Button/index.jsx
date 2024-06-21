import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Button({ content='content', number=5}) {
  return (
    <button className="btn">
      {content} {number}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default Button;
