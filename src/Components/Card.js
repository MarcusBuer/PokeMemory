import styled from 'styled-components'
import { useCardgame } from 'Contexts/CardgameContext'

export default function Card({ card, handleChoice, flipped, canPlay }) {
  const { difficulty } = useCardgame()
  return (
    <CardStyled
      difficulty={difficulty}
      className='card flip-container'
      disabled={flipped || !canPlay}
      onClick={() => handleChoice(card)}
    >
      <div className={`flipper ${flipped === true ? `flipped` : `notFlipped`}`}>
        <div className='front'>
          <img src={card.url} alt='card back' />
        </div>
        <div className='back'>
          <img
            src='https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20black.png'
            alt='card back'
          />
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.button`
  height: ${props => 300 / props.difficulty}px;
  width: ${props => 300 / props.difficulty}px;
  outline: 0;
  border: 0;
  perspective: 1000px;
  background: transparent;
  perspective: 100px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
  &:disabled {
    background: transparent;
  }
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
    .back {
      img {
        height: 100%;
      }
    }
    .front,
    .back {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
  }

  .flipped {
    background: white;
    transform: rotateY(180deg);
    border: 2px solid #333;
  }
  .notFlipped {
    background: white;
    transition: transform 0.25s ease-in-out 1s;
    transform: rotateY(0deg);
    border: 2px solid #333;
  }
`
