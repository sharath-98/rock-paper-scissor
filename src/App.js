import { div, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userMove, setUserMove] = useState('scissor');
  const [compMove, setCompMove] = useState('scissor');
  const [userPoints, setUserPoints] = useState(0);
  const [compPoints, setCompPoints] = useState(0);
  const [turn, setTurn] = useState(null);
  const [res, setRes] = useState('Lets see who wins');
  const [gameover, setGameover] = useState(false);
  const options = ['rock', 'paper', 'scissor'];

  useEffect(()=>{
    const combine = userMove + compMove;
    if(userPoints <= 4 && compPoints<=4){
      if(combine === 'rockscissor' || combine ==='paperrock' || combine === 'scissorpaper')
      {
        const updatedUserPoints = userPoints+1;
        setUserPoints(updatedUserPoints);
        setTurn('User won this round');
        if(updatedUserPoints === 5 )
          {
            setGameover(true)
            setRes('User won the Game')
          }
      }
      if(combine === 'scissorrock' || combine ==='rockpaper' || combine === 'paperscissor'){
        const updatedCompPoints = compPoints+1;
        setCompPoints(updatedCompPoints);
        setTurn('Computer won this round');
        if(updatedCompPoints === 5 )
          {
            setGameover(true)
            setRes('Computer won the Game')
          }
      }

      if(combine === 'paperpaper' || combine ==='rockrock' || combine === 'scissorscissor'){
        setTurn('This round is a draw');
      }
    }

  }, [userMove, compMove])

   var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '45vw'
  }

  const restart = () =>{
    window.location.reload();
  }

  const handleClick = (opt) =>{
    setUserMove(opt);
    const rand = options[Math.floor(Math.random() * options.length)];
    setCompMove(rand);
  } 

  return (
    <div className="App">
      <div className='main_header'>
        <div className='header'>
          <h1>Rock-Paper-Scissor</h1>
        </div>
      <div className='header_points'>
        <div className='points'>
            <h2>User : {userPoints}</h2>
        </div>
        <div className='points'>
          <h2>{compPoints} : Computer</h2>
        </div>
      </div>
      </div>
        <div className='main'>
          <div className='left'>
            <div className='left_image'>
              <img className='userHand' src={`../images/${userMove}.png`} alt='user'/>
            </div>

            <div className='icons'>
                {
                  options.map((option, index) =>
                  <img onClick={()=>handleClick(option)} key={index} className='image_icon' src={`../images/${option}-icon.png`}/>
                
                  )}
            </div>

          </div>
          <div className='right'>
            <div className='right_image'>
              <img className='compHand' src={`../images/${compMove}.png`} alt='user'/>
            </div>

            <div className='icons'>
                <img className='image_icon' src={`../images/rock-icon.png`}/>
                <img className='image_icon' src={`../images/scissor-icon.png`}/>
                <img className='image_icon' src={`../images/paper-icon.png`}/>
            </div>
          </div>
        </div>
        <div className='result'>
          <h1>{turn}</h1>
          <h1>Final Result: {res}</h1>
        </div>
        <div className='restart'>
          {gameover && 
            <button className='button' onClick={()=>restart()}>Restart Game</button>
          }
        </div>
    </div>
  );
}

export default App;
