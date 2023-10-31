// TestimonialsCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
    {
      name: 'Teenie Diy',
      image: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', // Replace with the path to the image
      text: 'I’m a delicate and sensitive person, and Dr. Sujeeth I was totally impressed by the way I was treated first time when I met him in 2008 and the way he followed up. He is not only an Excellent Doctor , he is simple, superb Human being, Sober, approachable, a Great Social Worker, friendly approach with smiling face with his selfless service with his selfless services. Always amazing treatment. He is an extraordinary intelligent Doctor with human values. Nice advise, hardly find such non commercial Doctors in this era. Apart from dedication , he also has slight wit which impresses me more resulting in great relief from stress while chatting with him. May God bless him and best wishes for the future.',
    },
    {
      name: 'Mathew',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4_LaAk0KUCnPYvcEXybQEJ4NiSzMkNOdhQ&usqp=CAU', // Replace with the path to the image
      text: 'He is very good doctor, dedicated towards his proffetion and always cares his patients.A patient can freely interact with him,gives sufficient time to the patient to express their health issues. The way he handles the patient is very much impressive. He recommends surgery only when it is really required. Overall very rare kind of metal among present generation doctors.',
    },
    {
      name: 'Sudeep',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH4VlfwzNwcnhT9dTzEkCfA28e4yqAWr4WA&usqp=CAU', // Replace with the path to the image
      text: 'Very pleased with the doctor. He is caring, empathetic and most importantly you get to establish a connection with the Doctor; which I feel is seldom today. One of he best doctors I have met.',
    },
    // Add more testimonials as needed
  ];
const TestimonialsCarousel = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <div className="client-image">
          <img src={testimonial.image} alt={testimonial.name} />
          </div>
          <p>{testimonial.text}</p>
          <p>- {testimonial.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialsCarousel;
