// import { Deck } from './decks-api'
// const initialState = {
//   decks: [] as Deck[],
//   searchParams: {
//     name: '',
//   },
//   deckName: '',
// }

// type DecksState = typeof initialState

// export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
//   switch (action.type) {
//     case 'GET-DECKS':
//       return { ...state, decks: action.decks }

//     case 'SET-DECKS': {
//       return { ...state, decks: [action.decks, ...state.decks] }
//     }

//     case 'REMOVE-DECKS':
//       return { ...state, decks: state.decks.filter((deck) => deck.id !== action.id) }

//     case 'UPDATE-DECKS':
//       return { ...state, decks: state.decks.map((el) => (el.id === action.id ? { ...el, name: action.name } : el)) }

//     case 'SEND-NAME':
//       console.log(state)
//       return { ...state, deckName: action.name }

//     // case "SEND-DECK-NAME":

//     default:
//       return state
//   }
// }

// type DecksActions =
//   | ReturnType<typeof getFetchDecksAC>
//   | ReturnType<typeof sendDescksAC>
//   | ReturnType<typeof removeDescksAC>
//   | ReturnType<typeof updateDescksAC>
//   | ReturnType<typeof sendTextDescksAC>

// export const getFetchDecksAC = (decks: Deck[]) => {
//   return {
//     type: 'GET-DECKS',
//     decks,
//   } as const
// }

// export const sendDescksAC = (decks: Deck) => {
//   return { type: 'SET-DECKS', decks } as const
// }

// export const removeDescksAC = (id: string) => {
//   return { type: 'REMOVE-DECKS', id } as const
// }

// export const updateDescksAC = (id: string, name: string) => {
//   return { type: 'UPDATE-DECKS', id, name } as const
// }

// export const sendTextDescksAC = (name: string) => {
//   return { type: 'SEND-NAME', name } as const
// }

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

import { Deck } from "./decks-api"
type DecksState = typeof initialState

type DecksActions = ReturnType<typeof SetDecksAC> | ReturnType<typeof addDecksAC>


export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {

  switch (action.type) {
    case "SET-STATE": {
      return { ...state, decks: action.decks }
    }
    case "ADD-STATE": {
      return { ...state, decks: [action.decks, ...state.decks] };

    }

    default: return state
  }

}


export const SetDecksAC = (decks: Deck[]) => {
  return {
    type: "SET-STATE" as const,
    decks
  }
}

export const addDecksAC = (decks: Deck) => {
  return {
    type: "ADD-STATE" as const,
    decks
  }
}
//     case 'SET-DECKS': {
//       return { ...state, decks: [action.decks, ...state.decks] }
//     }