import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
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
            <iframe src="https://giphy.com/embed/J6VWOd9svfh5KESnP9" width="100" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/2020-naruto-uzumaki-J6VWOd9svfh5KESnP9"></a></p>
          </div>
          <div className="header-subtitle">
            <h2>write a message to Naruto from the Naruto shonen series, and ask him about anything.(ex: what is friendship?, what is life supposed to be?)</h2>
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
