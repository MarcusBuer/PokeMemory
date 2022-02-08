import { useEffect, useState, createContext, useContext } from 'react'

export const CardgameContext = createContext({})

export function CardgameProvider({ children }) {
  const [difficulty, setDifficulty] = useState(4)
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choise1, setChoise1] = useState(null)
  const [choise2, setChoise2] = useState(null)
  const [canPlay, setCanPlay] = useState(true)
  const [matched, setMatched] = useState(0)

  function handleChoice(card) {
    choise1 ? setChoise2(card) : setChoise1(card)
  }

  function resetTurn() {
    setChoise1(null)
    setChoise2(null)
    setTurns(turns + 1)
  }

  useEffect(() => {
    if (choise1 && choise2) {
      setCanPlay(false)
      if (choise1.id === choise2.id) {
        setCards(
          cards.map(card => {
            if (card.id === choise1.id) {
              return { ...card, matched: true }
            }
            return card
          })
        )
        setMatched(matched + 2)
      } else {
        setTimeout(() => resetTurn(), 800)
      }
      setTimeout(() => setCanPlay(true), 1300)
    }
  }, [choise1, choise2])

  useEffect(() => {
    if (matched >= difficulty ** 2) {
      alert('You won!')
    }
  }, [matched])

  function newDifficulty(newDifficulty) {
    resetTurn()
    setMatched(0)
    setDifficulty(newDifficulty)
    const numCards = newDifficulty ** 2
    const pairs = numCards / 2
    const cards = genenateRandomizedArray(pairs, 151)

    const cardsWithData = cards.map(pokemon => {
      const id = pokemon
      return {
        id: id,
        flipped: false,
        matched: false,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${String(
          id
        )}.png`
      }
    })

    const newCards = [...cardsWithData, ...cardsWithData]

    let shuffled = newCards
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => ({
        id: value.id,
        uniqueId: `${value.id}-${Math.random()}`,
        url: value.url,
        flipped: value.flipped,
        matched: value.matched
      }))
    setCards(shuffled)
    setTurns(0)
  }

  function genenateRandomizedArray(quantity, max) {
    const arr = []
    while (arr.length < quantity) {
      var candidateInt = Math.floor(Math.random() * max) + 1
      if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
    return arr
  }

  return (
    <CardgameContext.Provider
      value={{
        cards,
        difficulty,
        newDifficulty,
        choise1,
        choise2,
        canPlay,
        handleChoice,
        turns
      }}
    >
      {children}
    </CardgameContext.Provider>
  )
}

export function useCardgame() {
  const context = useContext(CardgameContext)

  if (context === undefined) {
    throw new Error('Context was used outside of its Provider')
  }
  
  return context
}
