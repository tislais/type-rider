import Char from './Char';
import { useEffect, useState } from 'react';

const text = 'Hello, my name is Gabriel Simek.'

const textWithSpaces = text.replace(/ /g, '\u00a0')
//Retain 
const textArray = text.split('')
const mappedArray = textArray.map(char => {
  return {char,
          tries: 0
  }
})
const Typer = () => {
  //Keep track of entire text to keep track of correct T/F
  const [sentence, setSentence] = useState(mappedArray)
  const [activeKey, setActiveKey] = useState(0);

  useEffect(() => {
    //Keydown can detect backspace, down so you can hold
    const onKeyDown = (e) => {
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
    }
    //Keypress seems to be more accurate, don't need to worry about shift
    const onKeyPress = (e) => {
      console.log(e)
      //Type correct char, set correct prop to true
      if(e.key === sentence[activeKey].char) {
        console.log('correct');
        setSentence(prevSate => {
         return prevSate.map((item, i) => {
              return (i === activeKey) ? {...item, correct: true, tries: item.tries + 1} : item 
          })
        })
      }
      //Incorrect key set correct prop to false
      else {
        console.log('incorrect');
        setSentence(prevSate => {
          return prevSate.map((item, i) => {
               return i === activeKey ? {...item, correct: false, tries: item.tries + 1} : item 
           })
         })
      }
      if(activeKey !== textArray.length - 1) {
         setActiveKey(prev => prev + 1)
      } else {
        setActiveKey(0)
        setSentence(mappedArray)
        
      }
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keypress', onKeyPress)
    return () => {
      window.removeEventListener('keypress', onKeyPress);
      window.removeEventListener('keydown', onKeyDown);
    }
  });


  return (
    <>
      <ul className={ul}>
        {sentence.map(({char, correct, tries}, index) => 
          <Char key={index} char={char} index={index} activeKey={activeKey} correct={correct} tries={tries}/>
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
