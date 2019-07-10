import React, { useState } from 'react'
import useInterval from 'react-useinterval'; 
import PropTypes from 'prop-types'


const TextElipses = ({ children: textToElipse, speed }) => {
  const [elipseText, setElipseText] = useState('');

  const handleTextUpdate = (textToElipse) => {
    const endIndex = elipseText.length !== textToElipse.length  ? elipseText.length + 1 : 0;
    setElipseText(textToElipse.substring(0, endIndex))
  }

  useInterval(handleTextUpdate, speed, textToElipse);

  return (
    <span>{elipseText}</span>
  );
};

TextElipses.defaultProps = { 
  children: '...',
  speed: 500
}

TextElipses.propTypes = { 
  children: PropTypes.string,
  speed: PropTypes.number,
}
export default TextElipses;