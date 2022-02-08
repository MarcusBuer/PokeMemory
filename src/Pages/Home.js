import styled from 'styled-components'
import { useCardgame } from 'Contexts/CardgameContext'
import DifficultyButton from 'Components/DifficultyButton'
import CardGrid from 'Components/CardGrid'

function Home() {
  const { difficulty, turns } = useCardgame()

  return (
    <HomeStyled difficulty={difficulty}>
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
`

export default Home
