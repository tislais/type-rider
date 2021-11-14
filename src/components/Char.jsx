import React from 'react';

const Char = ({char, index, activeKey}) => {

  const isActiveClass = (index, activeKey) => {
    if (activeKey === index) {
      return active
    } else {
      return 'inactive';
    }
  }

  return (
    <div className={div + isActiveClass(index, activeKey)}>{char}</div>
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
