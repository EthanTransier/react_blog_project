export default function Home(){
    return (
      <>
        <nav className='standard-nav'>
          <div className='links'>
            <a href='./'>HOME</a>
            <a href='/create'>CREATE</a>
            <a href='/profile'>MY PROFILE</a>
            <a><img src='./images/logo.png' alt='logo' className='logo' /></a>
          </div>
        </nav>

        <section id='home'>
          {/* Rest of your HTML code for the 'home' section */}
          {/* ... */}
        </section>

        {/* Rest of your HTML code */}
        {/* ... */}

        <footer>
          <div className='myrow'>
            <div className='mycol'>
              <a href='#'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#'>
                <i className='fab fa-pinterest'></i>
              </a>
              <a href='#'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fab fa-snapchat'></i>
              </a>
              <a href='#'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
          <div className='myrow'>
            <div className='mycol'>
              <p>
                Copy <i className='far fa-copyright'></i> 2018 | made by me{' '}
                <i className='far fa-smile'></i>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
}