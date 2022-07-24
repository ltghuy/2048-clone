import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updateGrid, updateGameOver } from '../../redux/gridSlice'

export const Header = () => {
  const [volumn, setVolumn] = useState(false) 
  const audioRef = useRef()
  const dispatch = useDispatch()
  const emptyGrid = [
    [0, 0, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 0, 0],
    [4, 0, 0, 0]
  ]
  const resetGrid = () => {
    dispatch(updateGrid(emptyGrid))
    dispatch(updateGameOver(false))
  }

  const handleVolumn = () => {
    setVolumn(!volumn)
    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
  }

  return (
    <div className='flex justify-between items-center w-[90vw] md:w-[500px] h-[100px] mb-5'>
      <div className="h-full w-24 md:w-[150px] flex justify-center items-center bg-yellow-500 rounded-lg text-2xl md:text-5xl font-extrabold">
        2048
      </div>
      <div className='flex flex-col'>
        <div className='flex'>
          <div className='text-center w-28 bg-slate-400 p-2 rounded-md'>
            <p className='text-xs'>SCORE</p>
            <p className='font-semibold text-md md:text-xl'>00000</p>
          </div>
          <div className='text-center w-28 bg-slate-400 p-2 ml-4 rounded-md'>
            <p className='text-xs'>BEST</p>
            <p className='font-semibold text-md md:text-xl'>00000</p>
          </div>
        </div>
        <div className='flex items-center justify-center mt-4'>
          <div className='bg-return w-6 h-6 cursor-pointer' onClick={resetGrid}/>
          <div className='w-6 h-6 cursor-pointer ml-5' onClick={handleVolumn}>
            <img 
              className='w-full h-full object-contain'
              src={volumn ? '/volume-on.svg' : '/volume-off.svg'} 
              alt="volumn on icon" />
              <audio ref={audioRef} loop preload="auto">
                <source src="/audios/game.mp3" type="audio/mpeg" />
              </audio>
          </div>
        </div>
      </div>
    </div>
  )
}
