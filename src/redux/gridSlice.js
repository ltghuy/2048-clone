import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}
export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    updateGrid: (state, action) => {
      state.grid = action.payload
    }
  },
})

export const { updateGrid } = gridSlice.actions
export default gridSlice.reducer