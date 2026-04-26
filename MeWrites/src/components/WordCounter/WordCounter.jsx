import React from 'react'
import "./WordCounter.css";

const WordCounter = ({content}) => {
  const words = content.trim()?content.trim().split(/\s+/).length:0;
  const chars = content.length;
  return (
    <div className='word-counter'>
      <p className='count'>{words} : {chars}</p>
    </div>
  )
}

export default WordCounter
