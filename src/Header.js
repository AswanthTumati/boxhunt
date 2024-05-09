import React from 'react'

const Header = ({startGame, pauseGame, resetGame, handleIntervalChange}) => {
  return (
    <div className='header'>
        <button onClick={startGame}>Start</button>
        <button onClick={pauseGame}>Pause</button>
        <button onClick={resetGame}>Reset</button>
        <input type='number' onChange={handleIntervalChange} placeholder='Interval seconds' />
    </div>
  )
}

export default Header