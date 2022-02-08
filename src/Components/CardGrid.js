import styled from 'styled-components'
import { useCardgame } from 'Contexts/CardgameContext'
import Card from 'Components/Card'

export default function CardGrid() {
  const { cards, choise1, choise2, canPlay, handleChoice } = useCardgame()

  return (
    <CardGridStyled>
      {cards.map(card => (
        <Card
          key={card.uniqueId}
          card={card}
          flipped={card === choise1 || card === choise2 || card.matched}
          canPlay={canPlay}
          handleChoice={handleChoice}
        />
      ))}
    </CardGridStyled>
  )
}

const CardGridStyled = styled.div`
  display: grid;
  margin: 0 auto;
  gap: 4px;
  grid-template-columns: repeat(var(--difficulty), minmax(auto, 35px));
`
