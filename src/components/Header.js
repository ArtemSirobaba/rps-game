import React from 'react';
import useSound from 'use-sound';
import click from '../sounds/click.mp3';

const soundOn = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
    />
  </svg>
);

const soundOff = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
      clipRule="evenodd"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
    />
  </svg>
);

const Header = ({ score, sound, playSound }) => {
  const [play] = useSound(click);

  return (
    <div className="flex justify-between items-center max-w-3xl mx-auto text-white border-4 border-white rounded-md border-opacity-50">
      <div className="flex flex-col justify-center items-start text-2xl sm:text-3xl m-4 font-semibold">
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-white m-4 w-24 h-24 sm:w-28 sm:h-28 rounded-md">
        <h3 className="text-blue-800 text-2xl">Score</h3>
        <h4 className="text-gray-800 text-2xl font-semibold">{score}</h4>
        <div
          className="text-black relative left-8 top-1 md:left-10 md:top-2 -m-3 cursor-pointer"
          onClick={() => {
            play();
            playSound();
          }}
        >
          {Boolean(sound) ? soundOn : soundOff}
        </div>
      </div>
    </div>
  );
};

export default Header;
