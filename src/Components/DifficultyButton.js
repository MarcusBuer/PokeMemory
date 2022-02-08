import styled from 'styled-components'
import { useCardgame } from 'Contexts/CardgameContext'

const DifficultyButton = ({children, difficulty}) => {
  const { newDifficulty } = useCardgame()

  return <ButtonStyled onClick={() => newDifficulty(difficulty)}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  margin: .5rem 0.5rem;
  padding: .5rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  border: 1px solid #f5f5f5;
  font-weight: bold;
  cursor: pointer;
  border: 4px dashed transparent;

  &:hover {
    border: 1px solid #ddd;
    background-color: #ddd7;
    border: 4px dashed #333;
  }
`

export default DifficultyButton
