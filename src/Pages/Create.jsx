import { useRef, useState } from 'react';
import '../css/styles.css';
import default_image from './Assets/default_image.svg';
import Logo from '../images/logo.png';

const Create = () => {
    const [image_url, setImage_url] = useState('/');
    const [loading, setLoading] = useState(false);
    let inputRef = useRef(null);

    const ImageGenerator = async () => {
      if (inputRef.current.value === '') {
        return 0;
      }
      setLoading(true);
      const response = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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',
            'User-Agent': 'Chrome',
          },

          body: JSON.stringify({
            prompt: `${inputRef.current.value}`,
            n: 1,
            size: '512x512',
          }),
        }
      );
      let data = await response.json();
      console.log(data);
      let data_array = data.data;
      setImage_url(data_array[0].url);
      setLoading(false);
    };

    return (
      <div className='ai-image-generator'>
        <nav className='standard-nav'>
          <div className='links'>
            <a href='./'>HOME</a>
            <a href='/create'>CREATE</a>
            <a href='/profile'>MY PROFILE</a>
            <a>
              <img src={Logo} alt='logo' className='logo' />
            </a>
          </div>
        </nav>
        <header className='top-intro'>
          <h1 className='lead'>
            AI <span style={{ color: '#e91e63',}}>Image</span> Generator
          </h1>
        </header>
        <div className='img-loading'>
          <div className='image'>
            <img src={image_url === '/' ? default_image : image_url} alt='' />
          </div>
          <div className='loading'>
            <div className={loading ? 'loading-bar-full' : 'loading-bar'}></div>
            <div className={loading ? 'loading-text' : 'display-none'}>
              Loading...
            </div>
          </div>
        </div>
        <div className='search-box'>
          <input
            type='text'
            ref={inputRef}
            className='search-input'
            placeholder='Describe What You Want To SEE'
          />
          <div
            className='generate-btn'
            onClick={() => {
              ImageGenerator();
            }}
          >
            Generate
          </div>
        </div>
      </div>
    );
};

export default Create;
