import Logo from '../images/logo.png';

const Profile = () => {
  return (
    <>
      <nav className='standard-nav'>
        <div className='links'>
          <a href='./'>HOME</a>
          <a href='/create'>CREATE</a>
          <a href='/profile'>MY PROFILE</a>
        </div>
        <img src={Logo} alt='logo' className='logo' />
      </nav>
      <header className='top-intro'>
        <h1 className='lead'>Profile</h1>
      </header>
    </>
  );
};

export default Profile;
