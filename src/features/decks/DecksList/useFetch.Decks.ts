import { useEffect } from 'react'
import { getFetchDeschTC } from '../decks-thunks'
import { useAppDispatch, useAppSelector } from '../../../app/store'

export const useFetchDescks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state) => state.decks.decks)

  useEffect(() => {
    dispatch(getFetchDeschTC())
  }, [])

  return {
    decks,
  }
}
