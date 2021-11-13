import Char from './Char';
import { useEffect, useState } from 'react';

const text = 'Hello, I am a string.'

const textWithSpaces = text.replace(/ /g, '\u00a0')
const textArray = textWithSpaces.split('')

const Typer = () => {

  const [activeKey, setActiveKey] = useState(0);
  console.log(activeKey)

  useEffect(() => {
    const onKeyup = (e) => {
      if(activeKey !== textArray.length - 1) {
        if (e.key !== 'Shift') setActiveKey(prev => prev + 1)
      } else {
        setActiveKey(0)
      }
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup);
  });

  return (
    <>
      <ul className={ul}>
        {textArray.map((char, index) => 
          <Char key={index} char={char} index={index} activeKey={activeKey} />
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
