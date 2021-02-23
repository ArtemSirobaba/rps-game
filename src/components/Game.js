import React, { useState, useEffect } from 'react';
import GameResult from './GameResult';
import UserChoice from './UserChoice';
import Header from './Header';
import Footer from './Footer';
import useSound from 'use-sound';
import winner from '../sounds/win.mp3';
import loser from '../sounds/lose.mp3';
import draw from '../sounds/draw.mp3';

const Game = () => {
  const [openGame, setOpenGame] = useState(false);
  const [result, setResult] = useState({});
  const [score, setScore] = useState(Number(localStorage.getItem('score')) || 0
);
  const [sound, setSound] = useState(localStorage.getItem('sound') === 'true');

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  useEffect(() => {
    localStorage.setItem('sound', sound);
  }, [sound]);

  const [win] = useSound(winner);
  const [lose] = useSound(loser);
  const [tie] = useSound(draw);

  const handleScore = (winner) => {
    if (winner === 'Computer Win!') {
      setScore(score - 1);
      if (sound) lose();
    }
    if (winner === 'You win!') {
      setScore(score + 1);
      if (sound) win();
    }
    if (winner === 'Draw!' && sound) tie();
  };


  return (
    <>
      <Header score={score} sound={sound} playSound={() => setSound(!sound)}/>
      {!openGame ? (
        <div className="flex justify-center items-center h-4/6 xl:h-2/3">
          <UserChoice
            userChoice={(item) => {
              setResult(item);
              setOpenGame(true);
            }}
          />
        </div>
      ) : (
        <div className="mt-8">
          <GameResult
            result={result}
            score={handleScore}
            playAgain={() => setOpenGame(false)}
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Game;
