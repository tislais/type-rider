import Char from './Char';
import { useEffect, useState } from 'react';

const text = 'Hello, my name is Gabriel Simek.'

const textWithSpaces = text.replace(/ /g, '\u00a0')
//Retain 
const textArray = text.split('')
const mappedArray = textArray.map(char => {
  return {char}
})
const Typer = () => {
  //Keep track of entire text to keep track of correct T/F
  const [sentence, setSentence] = useState(mappedArray)
  const [activeKey, setActiveKey] = useState(0);

  useEffect(() => {
    const onKeyup = (e) => {
      console.log(e)
      //If Backspace remove completed prop, exit function
      if(e.key === 'Backspace' && activeKey > 0){
        setActiveKey(prevState => prevState -1)
        setSentence(prevState => {
          return prevState.map((item, i) => {
            if(i >= activeKey) delete item.correct
            return item
          })
        })
        return
      }
      //Type correct char, set correct prop to true
      if(e.key === sentence[activeKey].char) {
        console.log('correct');
        setSentence(prevSate => {
         return prevSate.map((item, i) => {
              return (i === activeKey) ? {...item, correct: true} : item 
          })
        })
      }
      //Incorrect key set correct prop to false
      else {
        console.log('incorrect');
        setSentence(prevSate => {
          return prevSate.map((item, i) => {
               return i === activeKey ? {...item, correct: false} : item 
           })
         })
      }
      if(activeKey !== textArray.length - 1) {
        if (e.key !== 'Shift') setActiveKey(prev => prev + 1)
      } else {
        setActiveKey(0)
        setSentence(mappedArray)
      }
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup);
  });


  return (
    <>
      <ul className={ul}>
        {sentence.map(({char, correct}, index) => 
          <Char key={index} char={char} index={index} activeKey={activeKey} correct={correct}/>
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
