import React from 'react';
//import Card from 'react-bootstrap/Card';
import ServiceCard from './ServiceCard'; 
import BlogCard from './BlogCard';
import TestimonialsCarousel from './TestimonialsCarousel';
import Header from'../components/Header';
import Footer from'./Footer';
import './About.css';

function About() {
  const services = [
    {
      title: 'Comprehensive medical directory',
      description: 'Our Emergency Care service is designed to be your reliable support',
    },
    {
      title: 'Online appointment booking',
      description: 'easy booking throught our online platform',
    },
    {
      title: 'Online consultation',
      description: 'Online consultation is available for the aged patients',
    },
    {
      title: 'Plus,subscription-based health plans',
      description: 'Subsribe to get the full offers',
    },
    {
      title: 'Diagnostic tests through our associate labs',
      description: 'Our team of experienced lab techs and medical experts perform limited diagnostic testing5',
    },
    {
      title: 'Review',
      description: 'Over 1million people used this platform for their daily,monthy checkups ',
    },
  ];
  const blogs = [
    {
      id: 1,
      title: 'Take Healthy Foods!!!',
      description: 'May help live longer.Boosts immunity.Keeps skin,teeth,eyes healthy.Supports muscles',
      imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvd2wlMjBvZiUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D', // Replace with image URL
      date:'16 Sept 2022',
     author:'Dietetian',
    },
    {
      id: 2,
      title: 'Check Up at Home',
      description: 'Checking health at home is a good thing. You can check your temperature, blood pressure, heart rate and so on to keep yourself motivated and improve your physical condition.',
      imageUrl: 'https://media.istockphoto.com/id/1255427248/photo/man-in-video-conference-with-doctor.webp?b=1&s=170667a&w=0&k=20&c=OKTo_HbXXR6KyqnxKqyMtZeSCWGkqvkEe9FXBS8vgXY=', // Replace with image URL
      date:'16 Sept 2022',
     author:'Admin',
    },
    {
      id: 3,
      title: 'Tobacco Kills',
      description: 'Tobacco kills more than 8 million people each year. Among them more than 1.2 million deaths are the result of non-smokers being exposed to second-hand smoke.',
      imageUrl: 'https://images.unsplash.com/photo-1527099908998-5b73a5fe2a0d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9iYWNjbyUyMGtpbGxzfGVufDB8fDB8fHww', // Replace with image URL
      date:'16 Sept 2022',
     author:'Admin',
    },
  ];

  return (
    <div>
      <Header/>
    <div className='about-1'>
      
      <h1>Our Mission</h1><br></br>
      <p>Our mission is to make quality healthcare afforadable and accessible for over a billion+ Indians.</p>
      <div className='ab-2'>
        <br></br>
        <h2>Quality Healthcare Made Simple</h2><br></br>
      </div>
      <div className='ab-3'>
        <h1><br></br><br></br>Health is a habit</h1><br></br>
        <p><br></br>It is a journey that takes you to new destination everyday  </p>
           <p>with endless prossibilities of life on the back of happiness, </p>
            <p>energy,and hope.We want to make this journeyeasy for

        </p>
        <p>everyone and help them live healthier and longer lives.</p>
      </div>
      <br>
      </br>
      
  
      <div className='ab-4'>
        <h1>Our offerings</h1><br></br>
      
        <p>Providing high-quality, trusted, and accessible healthcare is our reason for being</p>
        <div className='ab-2'>
        <h2>Our approach to healthcare </h2>
        <br></br>
        </div>
      </div>
     <div className='about-page'>
     
      <div className="service-cards-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
     </div>
     <div className="homepage">
      {/* Other content */}
      <div className='ab-2'>
        <br></br>
        <h2> find the right doctor,build a healthy nation!</h2>
        </div>
        <br></br>
      <div className="testimonials-section">

        <h2>Client Testimonials</h2>
        <br></br>
        <TestimonialsCarousel />
      </div>
    </div>
     <section className="blog-section">
     <div className='about-1'>
      
      <h1>Our Blogs</h1><br></br>
     
      <div className='ab-2'>
        <br></br>
        <h2>Most Updated Content For Your Healh</h2><br></br>
      </div>
      
        <div className="blog-cards-container">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.imageUrl}
              date={blog.date}
              author={blog.author}
            />
          ))}
       
        </div>
      </div>
      </section>
      
    </div>
    

    
    <Footer/>
    </div>
  );
}

export default About;