import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const variantsShiftLeft = {
  inital: {
    left: '0',
  },
  animate: {
    left: '-15px',
  },
};
const variantsShiftRight = {
  inital: {
    right: 0,
  },
  animate: {
    right: '-15px',
  },
};

const Game = ({ playerChoice, setPlayerChoice, setScore }) => {
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [counter, setCounter] = useState(3);

  const handlePlayAgain = () => {
    setComputerChoice('');
    setPlayerChoice('');
  };

  const handleComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const houseChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(houseChoice);
  };

  useEffect(() => {
    handleComputerChoice();
  }, []);

  const results = () => {
    if (playerChoice === computerChoice) {
      setResult('draw');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('win');
      setScore((prevScore) => (prevScore += 1));
    } else {
      setResult('lose');
      setScore((prevScore) =>
        prevScore === 0 ? (prevScore = 0) : (prevScore -= 1)
      );
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : results();

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const renderChoiceImage = (choice) => {
    switch (choice) {
      case 'paper':
        return (
          <button
            id="paper"
            className="w-32 h-32  sm:w-48 sm:h-48  border-transparent border-[13px] sm:border-[20px] border-gradient-t-light-blue-white  rounded-full flex items-center justify-center shadow-blue"
          >
            <Image
              src="/icon-paper.svg"
              alt="paper"
              width={50}
              height={50}
              className="sm:w-20 sm:h-20"
            />
          </button>
        );
      case 'scissors':
        return (
          <button
            id="scissors"
            className="w-32 h-32 sm:w-48 sm:h-48 sm:border-[20px] border-transparent border-[13px] border-gradient-t-light-orange-white shadow-orange  rounded-full flex items-center justify-center"
          >
            <Image
              src="/icon-scissors.svg"
              alt="scissors"
              width={50}
              height={50}
              className="sm:w-20 sm:h-20"
            />
          </button>
        );

      case 'rock':
        return (
          <button
            id="rock"
            className="w-32 h-32  sm:w-48 sm:h-48 sm:border-[20px] border-transparent border-[13px] border-gradient-t-light-red-white  rounded-full flex items-center justify-center shadow-red"
          >
            <Image
              src="/icon-rock.svg"
              alt="rock"
              width={50}
              height={50}
              className="sm:w-20 sm:h-20"
            />
          </button>
        );

      default:
        break;
    }
  };
  return (
    <div className="flex flex-col items-center lg:flex-row gap-12">
      <div className="flex gap-10 sm:gap-20 lg:gap-8">
        <motion.div
          animate={counter === 0 ? 'animate' : 'initial'}
          variants={variantsShiftLeft}
          className="flex flex-col items-center justify-between lg:relative"
        >
          <div
            className={`${
              result === 'win' && 'shadow-winner-sm lg:shadow-winner-lg'
            } rounded-full lg:order-2`}
          >
            {renderChoiceImage(playerChoice)}
          </div>

          <h2 className="text-sm sm:text-base text-white uppercase mt-4 tracking-widest text-center lg:order-1">
            You Picked
          </h2>
        </motion.div>
        <div className="hidden lg:block lg:self-center">
          <h1 className="mt-8 uppercase text-5xl leading-3 text-white text-center">
            {result === 'win'
              ? 'You win'
              : result === 'lose'
              ? 'You lose'
              : result === 'draw'
              ? 'Draw'
              : ''}
          </h1>
          {counter == 0 && (
            <button
              onClick={handlePlayAgain}
              className="mt-8 uppercase bg-white tracking-wider p-2 px-14 rounded-lg hover:text-red-600"
            >
              Play Again
            </button>
          )}
        </div>
        <motion.div
          animate={counter === 0 ? 'animate' : 'initial'}
          variants={variantsShiftRight}
          className="flex flex-col items-center justify-between lg:relative lg:gap-10 gap-4"
        >
          {counter === 0 ? (
            <div
              className={`${
                result === 'lose' && 'shadow-winner-sm lg:shadow-winner-lg'
              } rounded-full lg:order-2`}
            >
              {renderChoiceImage(computerChoice)}
            </div>
          ) : (
            <div className="w-32 h-32 sm:w-48 sm:h-48  rounded-full bg-black/20 animate-pulse lg:order-2" />
          )}
          <h2 className="text-sm sm:text-base text-white uppercase mt-4 tracking-widest text-center lg:order-1">
            The House picked
          </h2>
        </motion.div>
      </div>

      {/* for Mobile devices */}

      <div className="lg:hidden">
        <h1 className="mt-8 uppercase text-5xl text-white text-center leading-3">
          {result === 'win'
            ? 'You win'
            : result === 'lose'
            ? 'You lose'
            : result === 'draw'
            ? 'Draw'
            : ''}
        </h1>
        {counter == 0 && (
          <button
            onClick={handlePlayAgain}
            className="mt-8 uppercase bg-white p-2 px-14 rounded-lg tracking-wider hover:text-red-600"
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default Game;
