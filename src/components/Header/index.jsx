import React from 'react'
import { useDispatch } from 'react-redux'
import { updateGrid } from '../../redux/gridSlice'

export const Header = () => {
  const dispatch = useDispatch()
  const emptyGrid = [
    [0, 0, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 0, 0],
    [4, 0, 0, 0]
  ]
  const resetGrid = () => {
    dispatch(updateGrid(emptyGrid))
  }

  return (
    <div className='flex justify-between items-center w-[500px] h-[100px] mb-5'>
      <div className="h-full w-[150px] flex justify-center items-center bg-yellow-500 rounded-lg text-5xl font-extrabold">
        2048
      </div>
      <div className='flex flex-col'>
        <div className='flex'>
          <div className='text-center w-28 bg-slate-400 p-2 rounded-md'>
            <p className='text-xs'>SCORE</p>
            <p className='font-semibold text-xl'>00000</p>
          </div>
          <div className='text-center w-28 bg-slate-400 p-2 ml-4 rounded-md'>
            <p className='text-xs'>BEST</p>
            <p className='font-semibold text-xl'>00000</p>
          </div>
        </div>
        <div className='bg-return w-6 h-6 mt-4 mx-auto cursor-pointer' onClick={resetGrid}/>
      </div>
    </div>
  )
}
