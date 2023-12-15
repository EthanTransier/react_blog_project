import {useRef, useState} from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'
const ImageGenerator = () => {
    const [image_url, setImage_url] = useState("/")
    const [loading, setLoading] = useState(false);
    let inputRef = useRef(null);

    const ImageGenerator = async () => {
        if(inputRef.current.value === "") {
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
                'Bearer ',
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
    }



  return (
    <div className='ai-image-generator'>
      <div className='header' style={{ textAlign: 'center' }}>
        Create a Post With Our
        <br/>
        <span>AI image Generator</span>
      </div>
      <div className='img-loading'>
        <div className='image'>
          <img src={image_url === '/' ? default_image : image_url} alt='' />
        </div>
        <div className='loading'>
          <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
          <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
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
}

export default ImageGenerator