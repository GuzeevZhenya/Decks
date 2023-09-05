import { Dispatch } from 'react'
import { getFetchDecksAC } from './decks-reducer'
import { cardsAPI } from './decks-api'
import { AppDispatch } from '../../app/store'

export const getFetchDeschTC = () => {
  return (dispatch: Dispatch): void => {
    const card = cardsAPI.getCards()
    card.then((res) => dispatch(getFetchDecksAC(res.data.items)))
  }
}

export const sendDecksTC = (name: string) => {
  return (dispatch: AppDispatch): void => {
    cardsAPI.sendCard(name).then(() => dispatch(getFetchDeschTC()))
  }
}

export const removeDeckTC = (id: string) => {
  return (dispatch: Dispatch): void => {
    cardsAPI.removeCard(id).then(() => dispatch(getFetchDeschTC()))
  }
}

export const updateDeckTC = (id: string, title: string) => {
  return (dispatch: Dispatch): void => {
    cardsAPI.updateCard(id, title).then(() => dispatch(getFetchDeschTC()))
  }
}
