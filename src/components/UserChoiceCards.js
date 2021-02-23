import React from "react";

const UserChoiceCards = ({ position, color, image }) => {
  return (
    <div
      className={
        "absolute" +
        position +
        "cursor-pointer transform hover:scale-110 duration-200 ease-in-out"
      }
    >
      <div
        className={
          "flex justify-center items-center border-7 sm:border-8" +
          color +
          "bg-white w-28 h-28 sm:w-40 sm:h-40 rounded-full"
        }
      >
        <img className="w-12 h-12 sm:w-16 sm:h-16" src={image} alt="" />
      </div>
    </div>
  );
};

export default UserChoiceCards;
