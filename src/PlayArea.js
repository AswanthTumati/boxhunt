import React from 'react'

const PlayArea = ({onClick, pixelPosition}) => {
    const leftPosition = pixelPosition ? `${pixelPosition.x * 30}px` : '0';
  const topPosition = pixelPosition ? `${pixelPosition.y * 30}px` : '0';
    const playAreaStyle = {
        width : '300px',
        height : '300px',
        border : '1px solid black',
        position : 'relative'
    };
    const pixelStyle = {
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        position: 'absolute',
        left: leftPosition,
        top: topPosition
      };

  return (
    <div className='play-area' style={playAreaStyle} onClick={onClick}>
        <div className='pixel' style={pixelStyle}></div>
    </div>
  )
}

export default PlayArea