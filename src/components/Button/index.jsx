import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Button(props) {
  const { content, number } = props;
  return (
    <button className="btn">
      {content} {number}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
}

Button.defaultProps = {
  content: 'content',
  number: 5,
}

export default Button;
