import s from './DecksList.module.css'

import { DeckItem } from './DeckItem/DeckItem'
// import { useFetchDescks } from './useFetch.Decks'
import { useEffect } from 'react'
import { cardsAPI, decksAPI } from '../decks-api'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { SetDecksAC } from '../decks-reducer'
import { selectDecks } from '../decks-selectors'
import { getFetchDeckTC } from '../decks-thunks'
export const DecksList = () => {

  const dispatch = useAppDispatch()

  const decks = useAppSelector(selectDecks)
  useEffect(() => {
    dispatch(getFetchDeckTC())
  }, [])
  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
