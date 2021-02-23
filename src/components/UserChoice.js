import React from 'react';
import UserChoiceCards from './UserChoiceCards';
import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import randomWinner from '../randomWinner';

const UserChoice = ({ userChoice }) => {
  return (
    <div className="game">
      <div onClick={() => userChoice(randomWinner('rock'))}>
        <UserChoiceCards
          image={Rock}
          position={' top-28 left-16 sm:top-48 sm:left-20 '}
          color={' border-red-500 '}
        />
      </div>
      <div onClick={() => userChoice(randomWinner('scissors'))}>
        <UserChoiceCards
          image={Scissors}
          position={' -top-10 left-36 sm:-top-16 sm:left-50 '}
          color={' border-yellow-500 '}
        />
      </div>
      <div onClick={() => userChoice(randomWinner('paper'))}>
        <UserChoiceCards
          image={Paper}
          position={' -top-10 -left-3 sm:-top-16 sm:-left-10 '}
          color={' border-blue-500 '}
        />
      </div>
    </div>
  );
};

export default UserChoice;
