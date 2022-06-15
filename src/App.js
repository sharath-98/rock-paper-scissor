import { div, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useState } from 'react';
import './App.css';

function App() {
  const [userMove, setUserMove] = useState('scissor');
  const [compMove, setCompMove] = useState('scissor');
  const [userPoints, setUserPoints] = useState(0);
  const [compPoints, setCompPoints] = useState(0);
  const [turn, setTurn] = useState(null);
  const [res, setRes] = useState('Lets see who wins');
  const [gameover, setGameover] = useState('Game Over !');
  const options = ['rock', 'paper', 'scissor']

   var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '45vw'
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
                <img className='image_icon' src={`../images/rock-icon.png`}/>
                <img className='image_icon' src={`../images/scissor-icon.png`}/>
                <img className='image_icon' src={`../images/paper-icon.png`}/>
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
    </div>
  );
}

export default App;
