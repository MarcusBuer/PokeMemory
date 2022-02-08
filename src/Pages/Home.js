import styled from 'styled-components'
import { useCardgame } from 'Contexts/CardgameContext'
import DifficultyButton from 'Components/DifficultyButton'
import CardGrid from 'Components/CardGrid'

function Home() {
  const { difficulty, turns } = useCardgame()

  return (
    <HomeStyled difficulty={difficulty}>
      <Background />
      <h1>PokeMemory</h1>
      <p>Choose the difficulty to start a game</p>
      <div>
        <DifficultyButton difficulty={2}>Easy</DifficultyButton>
        <DifficultyButton difficulty={4}>Medium</DifficultyButton>
        <DifficultyButton difficulty={6}>Hard</DifficultyButton>
      </div>
      <CardGrid />
      <p>Turns: {turns}</p>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  --difficulty: ${props => props.difficulty};

  display: flex;
  max-height: 100vh;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: clamp(.7rem, 2vw, 1rem);
  z-index: 100;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin: 1rem 0;
  }
`

const Background = styled.div`
  z-index: -100;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0; /* vertical center */
  left: 0;
  right: 0;
  background: url(background.png);
  background-repeat: repeat;
  background-position-y: 70%;
  background-size: cover;
  animation: animatedBackground 10000s linear infinite;
  @keyframes animatedBackground {
    from {
      background-position: 0 70%;
    }
    to {
      background-position: -140000px 70%;
    }
  }
`

export default Home
