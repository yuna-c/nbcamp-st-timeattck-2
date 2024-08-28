import { configureStore } from '@reduxjs/toolkit'
import slice from '../slices/slice'

const store = configureStore({ reducer: { pokemon: slice } })

export default store
