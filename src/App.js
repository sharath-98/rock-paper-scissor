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

  return (
    <div className="App">
    </div>
  );
}

export default App;
