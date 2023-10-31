import React from 'react';
import Header from'../components/Header';
import Footer from'../components/Footer';
import DisplayDocCard from './DisplayDocCard';

function OurDoctors() {
  return (
    <div className="App">
    <Header/>
      <h1>Our Doctors</h1>
      <DisplayDocCard />
      <Footer/>
    </div>
  );
}

export default OurDoctors;