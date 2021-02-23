import React, { useState, useEffect } from 'react';
import GameResultCard from './GameResultCard';
import Dance from '../images/dance.gif';

const GameResult = ({ result, playAgain, score }) => {
  const [count, setCount] = useState();

  useEffect(() => {
    let count = 3;
    const timer = setInterval(() => {
      if (count === 0) {
        setCount('done');
        score(result.whoWin);
        clearInterval(timer);
      } else {
        setCount(count--);
      }
    }, 1000);
  }, []);

  return (
    <div className="max-w-3xl mx-auto flex justify-between">
      <div className="text-center m-2">
        <h1 className="text-white  sm:text-2xl font-medium mb-2">
          YOU PICKED <p>{result.userChoice.toUpperCase()}</p>
        </h1>
        <GameResultCard item={result.userChoice} />
      </div>

      {count === 'done' ? (
        <div className="flex items-end md:justify-center  xl:items-center -m-20 xl:m-4">
          <div className="text-white text-center text-xl">
            <h1 className="font-medium sm:text-2xl mb-2">{result.whoWin}</h1>
            <input
              className="p-1 px-4  sm:p-2 sm:px-6 rounded-md cursor-pointer font-medium  outline-none hover:bg-white text-black"
              type="submit"
              value="Play Again"
              onClick={() => {
                playAgain();
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-end md:justify-center  xl:items-center -m-32 xl:m-4">
          <img
            src={Dance}
            className="w-30 h-30 xl:w-full xl:h-full"
            alt="loading"
          />
        </div>
      )}

      {count === 'done' ? (
        <div className="text-center m-2">
          <h1 className="text-white sm:text-2xl font-medium mb-2">
            PC PICKED
            <p>{count !== 'done' ? '???' : result.compChoice.toUpperCase()}</p>
          </h1>
          <GameResultCard item={result.compChoice} />
        </div>
      ) : (
        <div className="text-center m-2">
          <h1 className="text-white sm:text-2xl font-medium mb-2">
            PC PICKED
            <p>???</p>
          </h1>
          <div className="flex justify-center items-center bg-black bg-opacity-25 w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 rounded-full">
            <h1 className="text-4xl text-white">{count}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameResult;
