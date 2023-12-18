import Image from '../images/00.png'
import Image01 from '../images/01.png'
import Image02 from '../images/02.png'
import Image03 from '../images/03.png'
import Image04 from '../images/04.png'
import Logo01 from '../images/logo1.png'

const Home = () => {

  return (
    <>
      <section id='home'>
        <div className='myrow'>
          <div className='mycol'>
            <header className='top-intro'>
              <h1 className='lead'>AFE THE BLOG SITE TO ACCLERATE YOU</h1>
              <p>
                See and read about the art of{' '}
                <span className='accent'>Technology</span>
              </p>
            </header>
          </div>
        </div>
        <section className='hero'>
          <div className='myrow'>
            <div className='mycol'>
              <header>
                <p>AFE</p>
                <h1>Made to inspire</h1>
                <a href='/login' className='mybtn'>
                  Login
                </a>
                <a href='/signup' className='mybtn'>
                  Signup
                </a>
              </header>
            </div>
          </div>
        </section>
      </section>

      <div className='myrow-uneven'>
        <div className='mycol-left'>
          <div className='myrow'>
            <div className='mycol'>
              <header className='blog-header'>
                <h2>Experience A New Reality</h2>
                <p>
                  Best Content Platform
                  <span className='date'>&nbsp;December 14, 2023</span>
                </p>
              </header>
              <img src={Image} style={{ width: '100%' }} />
              <p>
                <strong>In this post</strong> you'll find all the coolest,
                hippest and most skilled tattoo shops across the World.Sed
                mattis nunc id lorem euismod placerat...
              </p>
              <div className='post-btm-bar'>
                <button className='likes'>
                  <i className='fas fa-thumbs-up'></i> Like
                </button>
                <button className='replies'>
                  Replies <span className='count'>26</span>
                </button>
              </div>
            </div>
          </div>

          <div className='myrow'>
            <div className='mycol'>
              <header className='blog-header'>
                <h2>Tattoos and Work</h2>
                <p>
                  Stigmas attached to tattoos
                  <span className='date'>&nbsp;March 30, 2018</span>
                </p>
              </header>
              <img src={Image01} style={{ width: '100%' }} />
              <p>
                <strong>In this post</strong> you'll find all the coolest,
                hippest and most skilled tattoo shops across the World.Sed
                mattis nunc id lorem euismod placerat...
              </p>
              <div className='post-btm-bar'>
                <button className='likes'>
                  <i className='fas fa-thumbs-up'></i> Like
                </button>
                <button className='replies'>
                  Replies <span className='count'>42</span>
                </button>
              </div>
            </div>
          </div>

          <div className='myrow'>
            <div className='mycol'>
              <header className='blog-header'>
                <h2>Below the cuff</h2>
                <p>
                  Are below the cuff tattoos good
                  <span className='date'>&nbsp;March 28, 2018</span>
                </p>
              </header>
              <img src={Image02} style={{ width: '100%' }} />
              <p>
                <strong>In this post</strong> you'll find all the coolest,
                hippest and most skilled tattoo shops across the World. Sed
                mattis nunc id lorem euismod placerat...
              </p>
              <div className='post-btm-bar'>
                <button className='likes'>
                  <i className='fas fa-thumbs-up'></i> Like
                </button>
                <button className='replies'>
                  Replies <span className='count'>120</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className='mycol-right'>
          <section className='profile'>
            <div className='myrow author'>
              <div className='mycol author'>
                <img src={Image03} style={{ width: '100%' }} />
                <div className='abt'>
                  <h3 className='profile-title'>AFE</h3>
                  <p>
                    The blog destination for everywhere. Coime and share your creativity
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='popular-posts'>
            <header className='sidebar-header'>
              <h2>Popular Posts</h2>
            </header>
            <div className='myrow'>
              <div className='mycol p-posts'>
                <div className='p-img'>
                  <img src={Image04} />
                </div>
                <div className='p-text'>
                  <h5>Adventures</h5>
                  <p>Sed mattis nunct...</p>
                </div>
              </div>
            </div>

            <div className='myrow'>
              <div className='mycol p-posts'>
                <div className='p-img'>
                  <img src='https://images.unsplash.com/photo-1453814235491-3cfac3999928?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f05da4077424625439e156f87d204797&auto=format&fit=crop&w=2250&q=80' />
                </div>
                <div className='p-text'>
                  <h5>Art Walks</h5>
                  <p>Sed mattis nunc...</p>
                </div>
              </div>
            </div>
            <div className='myrow'>
              <div className='mycol p-posts'>
                <div className='p-img'>
                  <img src={Logo01} />
                </div>
                <div className='p-text'>
                  <h5>Conventions</h5>
                  <p>Sed mattis nunc...</p>
                </div>
              </div>
            </div>
            <div className='myrow'>
              <div className='mycol p-posts'>
                <div className='p-img'>
                  <img src='https://images.unsplash.com/photo-1469073082817-a29a4270b679?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=abb145dace8683d154f8e0eced31eda7&auto=format&fit=crop&w=2250&q=80' />
                </div>
                <div className='p-text'>
                  <h5>New School</h5>
                  <p>Sed mattis nunc...</p>
                </div>
              </div>
            </div>
            <div className='myrow'>
              <div className='mycol p-posts'>
                <div className='p-img'>
                  <img src='https://images.unsplash.com/photo-1479767574301-a01c78234a0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f32e2e491210be1d4ad5132b9a0c0bb4&auto=format&fit=crop&w=2250&q=80' />
                </div>
                <div className='p-text'>
                  <h5>Traditional</h5>
                  <p>Sed mattis nunc...</p>
                </div>
              </div>
            </div>
          </section>

          <section className='tag-cloud'>
            <header className='sidebar-header'>
              <h2>Tags</h2>
            </header>
            <div className='myrow'>
              <div className='mycol'>
                <span className='tag'>Art</span>
                <span className='tag'>Food</span>
                <span className='tag'>Entertainment</span>
                <span className='tag'>Machines</span>
                <span className='tag'>Ink</span>
                <span className='tag'>Clothing</span>
                <span className='tag'>Weekends</span>
                <span className='tag'>Vacation Spots</span>
                <span className='tag'>Cars</span>
                <span className='tag'>Tattoos</span>
                <span className='tag'>Shops</span>
                <span className='tag'>Love</span>
                <span className='tag'>Ocean</span>
                <span className='tag'>Design</span>
                <span className='tag'>Development</span>
                <span className='tag'>UX/UI</span>
                <span className='tag'>Podcasts</span>
                <span className='tag'>Colors</span>
                <span className='tag'>Typography</span>
                <span className='tag'>Shoes</span>
              </div>
            </div>
          </section>

          <section className='follow'>
            <header className='sidebar-header'>
              <h2>Follow me</h2>
            </header>
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
          </section>

          <section className='subscribe'>
            <header className='sidebar-header'>
              <h2>Subscribe</h2>
            </header>
            <div className='myrow'>
              <div className='mycol'>
                <p>
                  Enter your e-mail below and get notified on the latest blog
                  posts.
                </p>
                <form>
                  <input type='email' name='email' value='E-mail' />
                  <input type='submit' />
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer>
        {/* <div className='myrow'>
            <div className='mycol'>
              <a href='#'>
                <i className='fab fa-facebook-f'>{FaFacebook}</i>
              </a>
              <a href='#'>
                <i className='fab fa-twitter'>{FaTwitter}</i>
              </a>
              <a href='#'>
                <i className='fab fa-linkedin-in'>{FaLinkedin}</i>
              </a>
              <a href='#'>
                <i className='fab fa-github'>{FaGithub}</i>
              </a>
            </div>
          </div> */}
        <div className='myrow'>
          <div className='mycol'>
            <p>Copyright © 2023 | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home