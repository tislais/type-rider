import Char from './Char';
import { useEffect, useState } from 'react';

const text = 'Hello, I am a string.'
const textWithSpaces = text.replace(/ /g, '\u00a0')
const textArray = textWithSpaces.split('')

const Typer = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex)

  useEffect(() => {
    const onKeyup = (e) => {
      if(activeIndex !== textArray.length - 1) {
        if (e.key === 'Backspace' && activeIndex !== 0) {
          setActiveIndex(prev => prev - 1) 
        }
        else if (e.key !== 'Shift' && e.key !== 'Backspace') {
          setActiveIndex(prev => prev + 1)
        }
      } else {
        setActiveIndex(0)
      }
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup);
  });

  return (
    <>
      <ul className={ul}>
        {textArray.map((char, index) => 
          <Char 
            key={index} 
            char={char} 
            index={index} 
            activeKey={activeIndex}
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
