import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState(' ');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value); 
  }

  useEffect(() => {
    const words = text.split(' ');

    let wordCount = 0;
    words.forEach((word) => {
      if(word.trim() !== ''){
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);
  return (
    <div>
      <div>
      <textarea 
      value={text}
      className='area' 
      placeholder='Enter text here'
      onChange={handleChange}/>
      </div>
      <div>
      <p>word(s): {wordCount}</p>
      </div>
    </div>
  );
}

export default App;                                          
