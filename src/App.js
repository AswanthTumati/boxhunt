import { useEffect, useState } from 'react';
import './App.css';
import DynamicTable from './DynamicTable';
import Header from './Header';
import PlayArea from './PlayArea';

function App() {
  const [gameState, setGameState] = useState({
    isRunning: false,
    isPaused : false,
    reactionTimes: [],
    interval : 1000,
    pixelPosition : {x:0, y:0}
  });

  const[mouseClickNumber, setMouseClickNumber] = useState(0);
  const [ freezTime, setFreezTime ] =useState(true);

  useEffect(()=>{
    let intervalId;
    if(gameState.isRunning && !gameState.isPaused){
      intervalId = setInterval(()=>{
        if(freezTime===0){
          movePixelObject();
        }
        else {
          setFreezTime(prevTime => prevTime-1)
        }
      },gameState.interval);
    }
    return ()=>clearInterval(intervalId);
  },[gameState, freezTime]);

  const startGame = ()=>{
    setGameState(prevState =>({
      ...prevState,
      isRunning:true,
      isPaused:false
    }));
  };

  const pauseGame = ()=>{
    setGameState(prevState =>({
      ...prevState,
      isPaused:false
    }))
  };


  const resetGame = ()=>{
    setGameState({
      isRunning:false,
      isPaused:false,
      reactionTimes:[],
      interval:1000,
      pixelPosition : {x:0, y:0}
    });
    setMouseClickNumber(0);
    setFreezTime(0);
  };

  const handleIntervalChange = (e) =>{
    const interval = parseInt(e.target.value);
    setGameState(prevState =>({
      ...prevState,
      interval:interval*1000
    }));
  };

  const movePixelObject = () =>{
    if(!gameState.isPaused){

    
    const newPixelPosition = {
      x : Math.floor(Math.random()*10),
      y : Math.floor(Math.random()*10)
    }
    console.log('pixel position', newPixelPosition)
    setGameState(prevState =>({
      ...prevState,
      pixelPosition: newPixelPosition
    }))
  }
  };

  const handleClick = () =>{
    
    const clickTime = new Date().getTime();
    const lastMoveTime = clickTime -gameState.interval
    console.log(lastMoveTime)
    const reactionTime = clickTime- lastMoveTime

    const newReactionTimes = [...gameState.reactionTimes, reactionTime];
    setGameState(prevState=>({
      ...prevState,
      reactionTimes: newReactionTimes
    }));
    setMouseClickNumber(prevNumber => prevNumber+1);
    movePixelObject();
  
  }

  return (
    <div className="container">
      <h1>BOX HUNT</h1>
      <Header startGame={startGame} pauseGame={pauseGame} resetGame={resetGame} handleIntervalChange={handleIntervalChange} />
      <PlayArea onClick = {handleClick} pixelPosition={gameState.pixelPosition}/>
      <DynamicTable reactionTimes={gameState.reactionTimes} mouseClickNumber={mouseClickNumber}/>
    </div>
  );
}

export default App;
