import React, { useEffect, useState } from 'react';

const Char = ({char, keyPressed, index, activeIndex}) => {

  const [attempted, setAttempted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    if (activeIndex === index) setAttempted(true)
    if (keyPressed === char) setIsCorrect(true)
  }, [activeIndex, index, char, keyPressed])

  const getClasses = (index, activeIndex, attempted) => {
    if (activeIndex === index) {
      return active
    }
    if (attempted) {
      if (activeIndex < index) {
        return 'bg-yellow-100 text-green-600'
      } 
      else if (isCorrect) {
        return correct
      } 
      else if (keyPressed !== char) {
        return incorrect
      }
    }
  }

  

  return (
    <div className={div + getClasses(index, activeIndex, attempted)}>{char === ' ' ? '\u00a0' : char}</div>
  )
}

const div = `
  p-2
  mb-8
  text-4xl
  text-gray-400
  border
`

const active = `
  bg-gray-500
`

const correct = `
  bg-green-100
  bg-opacity-50
`

const incorrect = `
  bg-red-100
  bg-opacity-50
`

export default Char;
