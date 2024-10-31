import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Client",
      image: "/src/assets/user1.png", // Replace with the path to the image
      feedback:
        "Amazing gym! The facilities are great, and the trainers are very professional. Highly recommend!",
    },
    {
      name: "Diane Smith",
      role: "Client",
      image: "/src/assets/user2.png",
      feedback:
        "The best fitness experience I’ve ever had! The environment is motivating, and the classes are top-notch.",
    },
    {
      name: "Emily Davis",
      role: "Client",
      image: "/src/assets/user3.png",
      feedback:
        "I love the variety of classes and the excellent customer service. Highly recommended!",
    },
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonial-header">
        <h2>Welcome to Sportfit</h2>
        <h1>Testimonials</h1>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p>{testimonial.feedback}</p>
              <div className="testimonial-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-button">
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default Testimonials;

















// import React, { useState, useEffect } from "react";
// import "./Testimonials.css";

// const testimonialsData = [
//   {
//     name: "John Doe",
//     feedback: "Amazing gym! The facilities are great, and the trainers are very professional. Highly recommend!",
//     image: "src/assets/user1.png",
//   },
//   {
//     name: "Jane Smith",
//     feedback: "The best fitness experience I’ve ever had! The environment is motivating, and the classes are top-notch.",
//     image: "src/assets/user2.png",
//   },
//   {
//     name: "Samuel Lee",
//     feedback: "Great gym with a friendly atmosphere. The personal trainers helped me achieve my fitness goals.",
//     image: "src/assets/user3.png",
//   },
//   {
//     name: "Emily Davis",
//     feedback: "I love the variety of classes and the excellent customer service. Highly recommended!",
//     image: "/assets/testimonial4.jpg",
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!isHovered) {
//       const slideInterval = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 5000);

//       return () => clearInterval(slideInterval);
//     }
//   }, [isHovered]);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="testimonials-section" id="testimonials">
//       <h2>What Our Members Say</h2>
//       <div
//         className="testimonials-carousel"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button className="prev-button" onClick={goToPrev}>&#10094;</button>

//         <div className="testimonial-card">
//           <img
//             src={testimonialsData[currentIndex].image}
//             alt={`${testimonialsData[currentIndex].name} testimonial`}
//           />
//           <p className="testimonial-feedback">
//             "{testimonialsData[currentIndex].feedback}"
//           </p>
//           <h4 className="testimonial-name">{testimonialsData[currentIndex].name}</h4>
//         </div>

//         <button className="next-button" onClick={goToNext}>&#10095;</button>

        {/* <div className="dots-container">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div> */}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
