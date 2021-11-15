import React from 'react';
const text = 'Hello, I am a string.'

const Char = ({char, index, activeKey, correct}) => {
  const isActiveClass = (index, activeKey) => {
    if (activeKey === index) {
      return active
    } else {
      // Return falsy value on isActive for || to work in className =
      return null
    }
  }
  const isCorrect = (input) => {
    if(input) return 'bg-green-200'
    else if(input === false) return incorrect
    else return null
  }

  return (
    <div id={char.charCodeAt(0) + '-' + index} className={
      //Set style to either active or correct / incorrect (always one or the other)
      div + (isActiveClass(index, activeKey) || isCorrect(correct))
      //If space render a space
    } >{char === ' ' ? '\u00a0' : char} </div>
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
  bg-green-200
`

const incorrect = `
  bg-red-200
`

export default Char;
