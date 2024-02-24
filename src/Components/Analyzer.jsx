import React, { useState } from 'react';

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  const analyzeText = () => {
    const sanitizedText = text.trim();
    setCharCount(sanitizedText.length);
  
    const words = sanitizedText.split(/\s+/); 
    setWordCount(words.filter(word => word !== '').length); 
   
    const sentences = sanitizedText.split(/[.!?]+/); 
    setSentenceCount(sentences.filter(sentence => sentence !== '').length);
  };

  return (
    <div className='log'>
      <h2 id="titless">Text Analyzer</h2>
      <p className='wordss'><b>Note:</b>&nbsp;&nbsp;This  tool will count only alphanumeric characters and spaces as letters.</p>
      <textarea
        value={text} className='Txtarea'
        onChange={e => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <br />
      <br />
      <button className="spe3" onClick={analyzeText}>Analyze Text</button>
      <div>
        <p className='word2'>Character Count: {charCount}</p>
        <p className='word2'>Word Count: {wordCount}</p>
        <p className='word2'>Sentence Count: {sentenceCount}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <TextAnalyzer />
    </div>
  );
};

export default App;
