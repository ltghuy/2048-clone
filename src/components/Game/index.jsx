import React, { useState, useEffect } from 'react'
import { Cell } from '../Cell'
import { useSelector, useDispatch } from 'react-redux'
import { updateGrid, updateGameOver } from '../../redux/gridSlice'
import cloneDeep from 'lodash.clonedeep'
import Swipe from "react-easy-swipe"

export const Game = () => {
  const UP_ARROW = 38
  const LEFT_ARROW = 37
  const RIGHT_ARROW = 39
  const DOWN_ARROW = 40

  const data = useSelector((state) => state.grid.grid)
  const gameOver = useSelector((state) => state.grid.gameOver)
  const dispatch = useDispatch()
  // Initial Grid
  const initialize = () => {
    let newGrid = cloneDeep(data)
    addNumber(newGrid)
    addNumber(newGrid)
    dispatch(updateGrid(newGrid))
  }
  // Add number
  const addNumber = (newGrid) => {
    let added = false
    let gridFull = false
    let attempts = 0
    while (!added) {
      if (gridFull) {
        break
      }

      let rand1 = Math.floor(Math.random() * 4)
      let rand2 = Math.floor(Math.random() * 4)
      attempts ++

      if (newGrid[rand1][rand2] === 0) {
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4
        added = true
      }
      if (attempts > 50) {
        gridFull = true
        let gameOver = checkIfGameOver()
        if (gameOver) {
          dispatch(updateGameOver(true))
        }
        dispatch(updateGameOver(true))
      }
    }
  }
  // Swipe Left
  const swipeLeft = (dummy) => {
    let oldGrid = data 
    let newArray = cloneDeep(data)

    for (let i = 0; i < 4; i++) {
      let b = newArray[i]
      let slow = 0
      let fast = 1
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1
          slow++
          continue
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast++
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast]
          b[fast] = 0
          fast++
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast++
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast]
            b[fast] = 0
            fast = slow + 1
            slow++
          } else {
            slow++
            fast = slow + 1
          }
        }
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray)
    }
    if (dummy) {
      return newArray
    } else {
      dispatch(updateGrid(newArray))
    }
  };
  // Swipe Right
  const swipeRight = (dummy) => {
    let oldData = data
    let newArray = cloneDeep(data)

    for (let i = 3; i >= 0; i--) {
      let b = newArray[i]
      let slow = b.length - 1
      let fast = slow - 1
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1
          slow--
          continue
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast--
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast]
          b[fast] = 0
          fast--
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast--
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast]
            b[fast] = 0
            fast = slow - 1
            slow--
          } else {
            slow--
            fast = slow - 1
          }
        }
      }
    }
    if (JSON.stringify(newArray) !== JSON.stringify(oldData)) {
      addNumber(newArray)
    }
    if (dummy) {
      return newArray
    } else {
      dispatch(updateGrid(newArray))
    }
  }
  // Swipe Down
  const swipeDown = (dummy) => {
    let b = cloneDeep(data)
    let oldData = JSON.parse(JSON.stringify(data))
    for (let i = 3; i >= 0; i--) {
      let slow = b.length - 1
      let fast = slow - 1
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1
          slow--
          continue
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast--
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i]
          b[fast][i] = 0
          fast--
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast--
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i]
            b[fast][i] = 0
            fast = slow - 1
            slow--
          } else {
            slow--
            fast = slow - 1
          }
        }
      }
    }
    if (JSON.stringify(b) !== JSON.stringify(oldData)) {
      addNumber(b)
    }
    if (dummy) {
      return b
    } else {
      dispatch(updateGrid(b))
    }
  }
  // Swipe Up
  const swipeUp = (dummy) => {
    let b = cloneDeep(data)
    let oldData = JSON.parse(JSON.stringify(data))
    for (let i = 0; i < 4; i++) {
      let slow = 0
      let fast = 1
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1
          slow++
          continue
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast++
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i]
          b[fast][i] = 0
          fast++
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast++
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i]
            b[fast][i] = 0
            fast = slow + 1
            slow++
          } else {
            slow++
            fast = slow + 1
          }
        }
      }
    }
    if (JSON.stringify(oldData) !== JSON.stringify(b)) {
      addNumber(b)
    }
    if (dummy) {
      return b
    } else {
      dispatch(updateGrid(b))
    }
  }
  // Check Game Over
  const checkIfGameOver = () => {
    let checker = swipeLeft(true)

    if (JSON.stringify(data) !== JSON.stringify(checker)) {
      return false
    }

    let checker2 = swipeDown(true)
    if (JSON.stringify(data) !== JSON.stringify(checker2)) {
      return false
    }

    let checker3 = swipeRight(true)

    if (JSON.stringify(data) !== JSON.stringify(checker3)) {
      return false
    }

    let checker4 = swipeUp(true)

    if (JSON.stringify(data) !== JSON.stringify(checker4)) {
      return false
    }

    return true
  }
  const handleKeyDown = (event) => {
    if (gameOver) {
      return
    }
    switch (event.keyCode) {
      case UP_ARROW:
        swipeUp()
        break
      case DOWN_ARROW:
        swipeDown()
        break
      case LEFT_ARROW:
        swipeLeft()
        break
      case RIGHT_ARROW:
        swipeRight()
        break
      default:
        break
    }

    let gameOverr = checkIfGameOver()
    if (gameOverr) {
      dispatch(updateGameOver(true))
    }
  }

  useEffect(() => {
    initialize();
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div className='w-[90vw] md:w-[500px] h-[90vw] md:h-[500px] bg-slate-200 rounded-lg relative'>
      <Swipe
        onSwipeDown={() => swipeDown()}
        onSwipeLeft={() => swipeLeft()}
        onSwipeRight={() => swipeRight()}
        onSwipeUp={() => swipeUp()}
        className='flex flex-col justify-between p-3 gap-3'
      >
        {
          data.map((row, index) => {
            return (
              <div className='grid grid-cols-4 gap-3' key={index}>
                {
                  row.map((digit, index) => (
                    <Cell num={digit} key={index}/>
                  ))
                }
              </div>
            )
          })
        }
      </Swipe>
      {
        gameOver && <div className='absolute w-full h-full bg-game-over inset-0 rounded-lg' />
      }
    </div>
  )
}
