import React, { useState } from "react";
import Rules from "../images/image-rules.svg";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="absolute left-2/4 bottom-10">
        <input
          className="relative -left-2/4 p-2 px-3 bg-transparent border-2 text-white border-white cursor-pointer outline-none rounded-md hover:bg-white hover:text-black ease-in-out duration-700"
          type="submit"
          value="RULES"
          onClick={() => setShowModal(!showModal)}
        />
      </div>
      {showModal ? (
        <>
          <div className="fixed justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center mx-1.5 justify-between p-1  border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">Game Rules</h3>
                  <input
                    className="p-2  px-3 font-bold bg-transparent border-2 text-black text-xl border-white cursor-pointer outline-none rounded-md hover:text-yellow-500"
                    value="X"
                    type="submit"
                    onClick={() => setShowModal(!showModal)}
                  />
                </div>
                <div className="relative p-6 flex-auto">
                  <img src={Rules} alt="rules" />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Footer;
