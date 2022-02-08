import Card from 'Components/Card'
import { useCardgame } from 'Contexts/CardgameContext'
import React from 'react'
import styled from 'styled-components'

function Home() {
  const {
    cards,
    difficulty,
    newDifficulty,
    choise1,
    choise2,
    canPlay,
    handleChoice,
    turns
  } = useCardgame()

  return (
    <HomeStyled difficulty={difficulty}>
      <h1>PokeMemory</h1>
      <p>Choose the difficulty to start a game</p>
      <div>
        <button className='difficulty-button' onClick={() => newDifficulty(4)}>
          Easy
        </button>
        <button className='difficulty-button' onClick={() => newDifficulty(6)}>
          Medium
        </button>
        <button className='difficulty-button' onClick={() => newDifficulty(8)}>
          Hard
        </button>
      </div>
      <div className='CardGame'>
        {cards.map(card => (
          <Card
            key={card.uniqueId}
            card={card}
            flipped={card === choise1 || card === choise2 || card.matched}
            canPlay={canPlay}
            handleChoice={handleChoice}
          />
        ))}
      </div>
      <div>
        <p>Turns: {turns}</p>
      </div>
    </HomeStyled>
  )
}

export default Home

const HomeStyled = styled.div`
  --difficulty: ${props => props.difficulty};

  display: flex;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 1rem;
  }
  p {
    margin-top: 1rem;
  }

  .difficulty-button {
    margin: 1rem 0.5rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    border: 1px solid #f5f5f5;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      border: 1px solid #ddd;
      background-color: #ddd;
    }
  }
  .CardGame {
    display: grid;
    margin: 0 auto;
    gap: 4px;
    grid-template-columns: repeat(var(--difficulty), minmax(auto, 35px));
    .flip-container {
      perspective: 1000px;
      .flipper {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.25s ease-in-out 0s;
        .flipper.active {
          transition-delay: 1s;
        }
        transform-style: preserve-3d;
        .front {
          transform: rotateY(180deg);
        }
        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
      }

      .flipped {
        transform: rotateY(180deg);
        border: 2px dashed #ddd;
      }
      .notFlipped {
        transition: transform 0.25s ease-in-out 1s;
        transform: rotateY(0deg);
        border: 2px dashed #ddd;
      }
    }
    .card {
      height: ${props => 300 / props.difficulty}px;
      width: ${props => 300 / props.difficulty}px;
      outline: 0;
      border: 0;
      perspective: 1000px;
      background: transparent;
      cursor: pointer;
      .back {
        img {
          height: 100%;
        }
      }
      img {
        width: 100%;
        height: auto;
      }
      &:disabled {
        background: transparent;
      }
    }
  }
`
