import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import narutoGif from '../assets/naruto-gif.gif';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>talk to Naruto about anything</h1>
            <Image className='naruto' src={narutoGif} alt="Naruto GIF"/>
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
      <div className="promt-container">
        <a className="generate-button" onClick={null}>
          <div className="generate">
            <p>Generate</p>
          </div>
        </a>      
      </div>
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
