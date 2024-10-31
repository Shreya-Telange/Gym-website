import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from "./component/Header";
// import HeroSection from "./component/Home";
import About from "./component/About";
import Classes from "./component/Classes";
import Trainers from "./component/Trainers";
import Pricing from "./component/Pricing";
import Testimonials from "./component/Testimonials";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
// import UserAccount from "./component/UserAccount"
// import Attendance from "./component/Attendance";
import WorkoutTracker from "./component/WorkoutTracker";
import ClassBooking from "./component/ClassBooking";
import PaymentPage from "./component/PaymentPage";
import './index.css';
import Home from "./component/Home";

const App = () => {
  const [user, setUser] = useState(null);
  // const [showSignInForm, setShowSignInForm] = useState(false);

  // Function to handle user sign-in
  const handleSignIn = (userData) => {
    setUser(userData);
      };

  // Function to handle sign-out
  const handleSignOut = () => {
    setUser(null); // Clear user data
  };

   

  return (
   

    <>
      <Header 
        user={user} 
        handleSignOut={handleSignOut} 
        handleSignIn={handleSignIn} 
      />

    <Home />
    <About />
    <Classes />
    {/* <Attendance /> */}
    <Trainers />
    <Pricing />
    <Testimonials />
    <ContactForm />
     <Footer />
  </>
);
};
  


export default App;
