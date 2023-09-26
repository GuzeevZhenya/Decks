// import { Dispatch } from 'react'
// import { getFetchDecksAC } from './decks-reducer'
// import { cardsAPI } from './decks-api'
// import { AppDispatch } from '../../app/store'

import { Dispatch } from "redux"
import { cardsAPI } from "./decks-api"
import { SetDecksAC, addDecksAC } from "./decks-reducer"

// export const getFetchDeschTC = () => {
//   return (dispatch: Dispatch): void => {
//     const card = cardsAPI.getCards()
//     card.then((res) => dispatch(getFetchDecksAC(res.data.items)))
//   }
// }

// export const sendDecksTC = (name: string) => {
//   return (dispatch: AppDispatch): void => {
//     cardsAPI.sendCard(name).then(() => dispatch(getFetchDeschTC()))
//   }
// }

// export const removeDeckTC = (id: string) => {
//   return (dispatch: Dispatch): void => {
//     cardsAPI.removeCard(id).then(() => dispatch(getFetchDeschTC()))
//   }
// }

// export const updateDeckTC = (id: string, title: string) => {
//   return (dispatch: Dispatch): void => {
//     cardsAPI.updateCard(id, title).then(() => dispatch(getFetchDeschTC()))
//   }
// }

export const getFetchDeckTC = () => {
    return (dispatch: Dispatch) => {
        const card = cardsAPI.getCards()
        card.then(res => dispatch(SetDecksAC(res.data.items)))
    }
}

export const postDeckTC = (name: string) => {
    return (dispatch: Dispatch) => {
        const card = cardsAPI.sendCard(name)
        card.then(res => dispatch(addDecksAC(res.data)))
    }
}