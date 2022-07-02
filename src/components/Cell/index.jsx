import React from 'react'

export const Cell = (props) => {
  return (
    <div className='flex justify-center items-center aspect-square bg-slate-300 bg-cover select-none rounded-md'>
      {
        props.num !== 0 && 
        <img src={`/images/${props.num}.gif`} alt="" className='object-cover rounded-md' />
      }
    </div>
  )
}
