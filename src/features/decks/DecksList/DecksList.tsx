import s from './DecksList.module.css'

import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDescks } from './useFetch.Decks'
export const DecksList = () => {
  const { decks } = useFetchDescks()
  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
