import styled from 'styled-components'
import { useCardgame } from 'Contexts/CardgameContext'

const DifficultyButton = ({children, difficulty}) => {
  const { newDifficulty } = useCardgame()

  return <ButtonStyled onClick={() => newDifficulty(difficulty)}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
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
`

export default DifficultyButton
