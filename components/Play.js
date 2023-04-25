import React from 'react';
import Image from 'next/image';

const Play = ({ setPlayerChoice }) => {
  const handlePlayerChoice = (e) => {
    e.preventDefault();
    setPlayerChoice(e.currentTarget.id);
  };

  return (
    <div className="relative lg:mt-12">
      <img
        src="/bg-triangle.svg"
        alt="triangle"
        className="w-44 h-48 sm:w-64 sm:h-64"
      />

      <button
        id="paper"
        onClick={handlePlayerChoice}
        className="absolute top-0 translate-y-[-50%] translate-x-[-50%] w-28 h-28 sm:w-36 sm:h-36 border-transparent border-[13px] sm:border-[18px] border-gradient-t-light-blue-white  rounded-full flex items-center justify-center shadow-blue animate-slide-paper hover:scale-[1.1] transition-transform duration-300 "
      >
        <Image
          src="/icon-paper.svg"
          alt="paper"
          width={40}
          height={40}
          className="sm:w-14 sm:h-14"
          priority
        />
      </button>
      <button
        id="scissors"
        onClick={handlePlayerChoice}
        className="absolute right-0 top-0 translate-y-[-50%] translate-x-[50%] w-28 h-28 sm:w-36 sm:h-36 sm:border-[18px]  border-transparent border-[13px] border-gradient-t-light-orange-white shadow-orange  rounded-full flex items-center justify-center animate-slide-scissors hover:scale-[1.1] transition-transform duration-300 "
      >
        <Image
          src="/icon-scissors.svg"
          alt="scissors"
          width={40}
          height={40}
          className="sm:w-14 sm:h-14"
          priority
        />
      </button>
      <button
        id="rock"
        onClick={handlePlayerChoice}
        className="absolute bottom-0 left-[50%]  translate-x-[-50%] w-28 h-28 sm:w-36 sm:h-36 sm:border-[18px] border-transparent border-[13px] border-gradient-t-light-red-white  rounded-full flex items-center justify-center shadow-red animate-slide-rock hover:scale-[1.1] transition-transform duration-300 "
      >
        <Image
          src="/icon-rock.svg"
          alt="rock"
          width={40}
          height={40}
          className="sm:w-14 sm:h-14"
          priority
        />
      </button>
    </div>
  );
};

export default Play;
