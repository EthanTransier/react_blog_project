import Logo from  '../images/logo.png'

const CreateBlog = () => {
  return (
    <>
        <nav className='standard-nav'>
            <div className='links'>
            <a href='./home'>HOME</a>
            <a href='/create'>AI Image Generator</a>
            <a href='/createblog'>Create Blog</a>
            <a href='/profile'>MY PROFILE</a>
            </div>
            <img src={Logo} alt='logo' className='logo' />
        </nav>
    </>
  )
}

export default CreateBlog