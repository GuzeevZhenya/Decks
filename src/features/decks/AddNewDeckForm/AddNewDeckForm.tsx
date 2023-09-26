// import { useEffect, useState } from 'react'
// import s from './AddNewPostForm.module.css'
// import { useForm } from 'react-hook-form'
// import { getFetchDeschTC, sendDecksTC } from '../decks-thunks'
// import { useAppDispatch, useAppSelector } from '../../../app/store'
// import { sendTextDescksAC } from '../decks-reducer'

// type FormValues = {
//   name: string
// }

// export const AddNewDeckForm = () => {
//   const [text, setText] = useState('')

//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: {
//       name: '',
//     },
//   })
//   const dispatch = useAppDispatch()

//   const onSubmit = (data: FormValues) => {
//     dispatch(sendDecksTC(data.name))
//     reset()
//   }

//   useEffect(() => {
//     dispatch(sendTextDescksAC(text))
//   }, [text])

//   return (
//     <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
//       <label className={s.label}>
//         Deck name
//         <input
//           {...register('name', {
//             required: 'Name is required',
//             minLength: {
//               value: 3,
//               message: 'Name must be longer than or equal to 3 characters',
//             },
//           })}
//           onChange={(e) => setText(e.target.value)}
//           autoComplete="off"
//         />
//         <p className={s.errorMessage}>{errors.name && errors.name.message}</p>
//       </label>
//       <button type="submit">Add new deck</button>
//     </form>
//   )
// }


import { useAppDispatch } from '../../../app/store'
import { addDecksAC } from '../decks-reducer'
import { postDeckTC } from '../decks-thunks'
import s from './AddNewPostForm.module.css'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
}

export const AddNewDeckForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
    },
  })

  const dispatch = useAppDispatch();

  const onSubmit = (data: FormValues) => {
    dispatch(postDeckTC(data.name))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Deck name
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name must be longer than or equal to 3 characters',
            },
          })}
          autoComplete="off"
        />
        <p className={s.errorMessage}>{errors.name && errors.name.message}</p>
      </label>
      <button type="submit">Add new deck</button>
    </form>
  )
}