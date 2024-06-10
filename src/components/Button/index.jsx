import React from 'react';
import './style.css';

// props - це аналог атрибуту у тега
// з props деструктуризацією дістаємо властивості

function Button(props) {
  const {content, number} = props;
  return (
    <button className='btn'>
      {content} {number}
    </button>
  );
}

export default Button;
