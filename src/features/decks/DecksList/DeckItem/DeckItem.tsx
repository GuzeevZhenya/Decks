import { useDispatch, useSelector } from 'react-redux'
import { Deck } from '../../decks-api'
import s from './DeckItem.module.css'
import { removeDeckTC, updateDeckTC } from '../../decks-thunks'
import { useAppDispatch } from '../../../../app/store'

type DeckProps = {
  deck: Deck // todo: fix
}

const TEST_ACC_NAME = 'as'

export const DeckItem = ({ deck }: DeckProps) => {
  const isTestingDeck = deck.author.name === TEST_ACC_NAME

  const dispatch = useAppDispatch()
  const name = useSelector((state) => state.decks.deckName)

  const deleteDeck = (e) => {
    console.log(deck)
    dispatch(removeDeckTC(deck.id))
  }

  const updateDeck = (e) => {
    dispatch(updateDeckTC(deck.id, name))
  }
  return (
    <li key={deck.id} className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button onClick={updateDeck}>update</button>
          <button onClick={deleteDeck}>delete</button>
        </div>
      )}
    </li>
  )
}
