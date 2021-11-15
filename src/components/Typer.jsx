import Char from './Char';
import { useEffect, useState } from 'react';

const text = 'Hello, I am a string.'
// const textWithSpaces = text.replace(/ /g, '\u00a0')
const textArray = text.split('')

const Typer = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [keyPressed, setKeyPressed] = useState('');

  console.log(activeIndex, keyPressed)

  useEffect(() => {
    const onKeypress = ({ key }) => {
      setKeyPressed(key)
      if(activeIndex <= textArray.length - 1) {
        setActiveIndex(prev => prev + 1)
      }
    }

    const onKeydown = ({ key }) => {
      if (key === 'Backspace' && activeIndex !== 0) {
        setActiveIndex(prev => prev - 1) 
      }
    }
    window.addEventListener('keypress', onKeypress)
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keypress', onKeypress);
      window.removeEventListener('keydown', onKeydown);
    }
  });

  return (
    <>
      <ul className={ul}>
        {textArray.map((char, index) => 
          <Char 
            key={index} 
            char={char} 
            keyPressed={keyPressed}
            index={index} 
            activeIndex={activeIndex}
          />
        )}
      </ul>
    </>
  )
}

const ul = `
  flex
  flex-wrap
  max-w-screen-lg
`

export default Typer
