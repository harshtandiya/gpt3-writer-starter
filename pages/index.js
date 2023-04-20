import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import narutoGif from '../assets/naruto-gif2.gif';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

  const onUserChangedText = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>Naruto With GPT</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>talk to Naruto about anything</h1>
            <Image className='naruto' src={narutoGif} alt="Naruto GIF"/>
            {/* <iframe src="https://giphy.com/embed/kDRYLFBNt48zm" width="160" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
          </div>
          <div className="header-subtitle">
            <p>write a message to Naruto from the Naruto shonen series, and ask him about anything.(ex: what is friendship?, what is life supposed to be?)</p>
          </div>
        </div>
      </div>
      <div>
        <div className='prompt-container'>
          <textarea placeholder="start typing here" className="prompt-box" value={userInput} onChange={onUserChangedText}/>
        </div> 
      </div>
      {/* <div className="promt-container">
        <a className="generate-button" onClick={callGenerateEndpoint}>
          <div className="generate">
            <p>Generate</p>
          </div>
        </a>      
      </div> */}
      <div className="prompt-container">
        <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
            {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
        </div>
      </div>

      {apiOutput && (
        <div className="output">
          <div className="output-header-container">
            <div className="output-header">
              <h3>Output</h3>
            </div>
          </div>
          <div className="output-content">
            <p>{apiOutput}</p>
          </div>
        </div>
      )}
      

      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
