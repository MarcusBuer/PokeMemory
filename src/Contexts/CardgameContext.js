import { useState, createContext, useContext } from 'react'

export const CardgameContext = createContext({})

export function CardgameProvider({ children }) {

  const [cards, setCards] = useState([])

  return (
    <CardgameContext.Provider
      value={{ cards, setCards }}
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