import React from "react";
import Rock from "../images/icon-rock.svg";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";

const GameResultCard = ({ item }) => {
    
  const getIcon = (item) => {
    if (item === "scissors") return Scissors;
    if (item === "paper") return Paper;
    return Rock;
  };

  const getTheme = (item) => {
    if (item === "scissors") return "border-yellow-500";
    if (item === "paper") return "border-blue-500";
    return "border-red-500";
  };

  return (
    <div
      className={
        "flex justify-center items-center border-7 sm:border-8  md:border-10 " +
        getTheme(item) +
        " bg-white w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56  rounded-full"
      }
    >
      <img
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24"
        src={getIcon(item)}
        alt="choice"
      />
    </div>
  );
};

export default GameResultCard;
