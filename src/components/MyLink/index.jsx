import React from 'react';
import PropTypes from 'prop-types';


const MyLink = ({href="#", content='text'}) => {
  return (
    <a href={href}>
      {content}
    </a>
  );
};


MyLink.propTypes = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};


export default MyLink;
