import ImageGenerator from '../Components/ImageGenerator'
import Logo from '../images/logo.png';

const Create = () => {
  return (
    <>
    <nav className='standard-nav'>
        <div className='links'>
          <a href='./home'>HOME</a>
          <a href='/create'>CREATE</a>
          <a href='/profile'>MY PROFILE</a>
        </div>
        <img src={Logo} alt='logo' className='logo' />
    </nav>
    <ImageGenerator/>
    </>
  )
}

export default Create