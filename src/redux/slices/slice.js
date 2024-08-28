import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedPokemon: []
}

const slice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    selectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload
    },
    addPokemon: (state, action) => {
      state.selectedPokemon = push(action.payload)
    },
    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter((pokemon) => pokemon.id !== action.payload)
    }
  }
})

export const { selectedPokemon, addPokemon, removePokemon } = slice.actions
export default slice.reducer
