// rafce functional component
import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/musicc.jpg'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.jpg'
import { Button, Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing part */}
      <div className='row align-item-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className='col'></div>
        {/* Landing image */}
        <div className='col-lg-6'>
          <img src={landingImg} className='img-fluid ms-5' alt="" />
        </div>
      </div>
      {/* feature */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={img1}/>
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={img3}/>
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={img2}/>
              <Card.Body>
                <Card.Title>Upload Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* last */}
      <div className='my-5 row align-items-center border rounded p-5'>
           <div className="col-lg-5">
              <h3 className='text-warning mb-3'>Simple, Fast and Powerful</h3>
              <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything:</span> dolor sit amet consectetur, adipisicing elit is a  maxima calculus.qui dolorum placeat maxime eveniet.</p>

              <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categorise Everything:</span> dolor sit amet is a consectetur, adipisicing elit. maxima calculus qui dolorum placeat maxime eveniet.</p>

              <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Upload Everything:</span> dolor calculus is a sit amet consectetur, adipisicing elit. Beatae qui dolorum placeat maxime eveniet.</p>
           </div>
           <div className="col"></div>
           <div className="col-lg-6">
           <iframe width="100%" height="360" src="https://www.youtube.com/embed/MbuFGqueveU" title="Akkam pakkam short cover | Arshid kamal"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
           </div>
      </div>
    </div>
  )
}

export default Landing