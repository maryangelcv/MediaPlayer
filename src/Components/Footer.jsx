//rafce
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{ width: '400px' }}>
          <h5><i class="fa-solid fa-music me-2"></i>
            Media Player</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='d-flex flex-column'>
            <h5>Links</h5>
             <Link to={'/'} style={{textDecoration: 'none',color:'white'}} >Landing Page</Link>
             <Link to={'/home'} style={{textDecoration: 'none',color:'white'}} >Home Page</Link>
             <Link to={'/history'} style={{textDecoration: 'none',color:'white'}} >Watch History Page</Link>
        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
        <a style={{textDecoration: 'none',color:'white'}} href="https://react.dev/" target='_blank'>React</a>
        <a style={{textDecoration: 'none',color:'white'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
        <a style={{textDecoration: 'none',color:'white'}} href="https://www.npmjs.com/package/react-router-dom" target='_blank'>React Router</a>
        </div>
        {/* contact */}
        <div className='d-flex flex-column'>
          <h5>Contacts</h5>
          <div className='d-flex'>
             <input type="text" placeholder='Enter Your Email Here..' className='form-control me-2' />
             <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3'>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/Twitter"><i class="fa-brands fa-twitter"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://x.com/i/flow/login"><i class="fa-brands fa-x-twitter"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://www.apple.com/"><i class="fa-solid fa-apple-whole"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/Media_(communication)"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; May 2024 Batch, Media Player. Built with React.</p>
    </div>
  )
}

export default Footer