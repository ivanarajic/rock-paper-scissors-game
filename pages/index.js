import { useState, useEffect } from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Game from '../components/Game';
import Image from 'next/image';
import Play from '../components/Play';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [playerChoice, setPlayerChoice] = useState('');
  const [score, setScore] = useState(0);

  const handleResetClick = () => {
    setScore(0);
    localStorage.setItem('score', JSON.stringify(score));
  };

  useEffect(() => {
    const scoreItem = JSON.parse(localStorage.getItem('score'));
    if (scoreItem) {
      setScore(scoreItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  return (
    <div>
      <Head>
        <title>Rock, Paper, Scissors</title>
        <meta name="description" content="Rock, paper, scissors - Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 flex flex-col justify-between items-center min-h-[700px] sm:min-h-[850px] lg:min-h-[700px]">
        <Header score={score} />

        {playerChoice === '' ? (
          <Play setPlayerChoice={setPlayerChoice} />
        ) : (
          <Game
            playerChoice={playerChoice}
            setPlayerChoice={setPlayerChoice}
            setScore={setScore}
          />
        )}

        <div className="space-x-3 lg:self-end flex ">
          <div onClick={() => setShowModal(true)}>
            <Button name={'Rules'} />
          </div>
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            title={'Rules'}
          >
            <Image
              src="/image-rules.svg"
              width={300}
              height={300}
              alt="rules"
            />
          </Modal>

          <div onClick={handleResetClick}>
            <Button name={'Reset'} />
          </div>
        </div>
      </div>
    </div>
  );
}
