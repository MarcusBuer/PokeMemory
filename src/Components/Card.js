export default function Card({ card, handleChoice, flipped, canPlay }) {
  return (
    <button
      className='card flip-container'
      disabled={flipped || !canPlay}
      onClick={() => handleChoice(card)}
    >
      <div className={`flipper ${flipped === true ? `flipped` : ``}`}>
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
    </button>
  )
}