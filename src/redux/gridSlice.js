import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  gameOver: false
}
export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    updateGrid: (state, action) => {
      state.grid = action.payload
    },
    updateGameOver: (state, action) => {
      state.gameOver = action.payload
    }
  }
})

export const { updateGrid, updateGameOver } = gridSlice.actions
export default gridSlice.reducer