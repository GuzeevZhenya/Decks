import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const cardsAPI = {
  getCards() {
    return instance.get<FetchDecsResponse>('decks')
  },
  sendCard(name: string) {
    return instance.post<Deck>('decks', { name })
  },
  removeCard(id: string) {
    return instance.delete(`decks/${id}`)
  },
  updateCard(id: string, name: string) {
    return instance.patch(`decks/${id}`, { name })
  },
}

export interface FetchDecsResponse {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}

export interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export interface Deck {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}

export interface Author {
  id: string
  name: string
}

export const decksAPI = {}
