import React, { useState } from "react";
import "./Trainers.css";

const trainersData = [
  {
    id: 1,
    name: "John Doe",
    image: "src/assets/trainer1.png",
    specialty: "Strength Training",
    experience: "10 years",
    certifications: "Certified Personal Trainer (CPT), CPR Certified",
    bio: "John is a strength training expert who has been transforming lives for over a decade. His sessions focus on building core strength and improving overall fitness.",
    social: {
      instagram: "https://instagram.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "src/assets/trainer2.png",
    specialty: "Yoga Instructor",
    experience: "8 years",
    certifications: "Certified Yoga Instructor, Yoga Therapy Specialist",
    bio: "Jane is passionate about helping clients find balance and mindfulness through yoga. Her classes are designed for all levels, focusing on relaxation and mental clarity.",
    social: {
      instagram: "https://instagram.com/janesmith",
      facebook: "https://facebook.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: "src/assets/env5.jpeg",
    specialty: "HIIT Specialist",
    experience: "6 years",
    certifications: "ACE Certified Personal Trainer, HIIT Specialist",
    bio: "Mike specializes in high-intensity interval training (HIIT) to help clients lose fat, build endurance, and stay motivated. His classes are fast-paced and high-energy.",
    social: {
      instagram: "https://instagram.com/mikejohnson",
      facebook: "https://facebook.com/mikejohnson",
      linkedin: "https://linkedin.com/in/mikejohnson",
    },
  },
];

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Function to handle modal opening for trainer details
  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedTrainer(null);
  };

  return (
    <section className="trainers-section" id="trainers">
      <h2>Meet Our Trainers</h2>

      {/* Trainers Grid */}
      <div className="trainers-grid">
        {trainersData.map((trainer) => (
          <div className="trainer-card" key={trainer.id} onClick={() => handleTrainerClick(trainer)}>
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
              <p>{trainer.experience} experience</p>
            </div>
            <div className="trainer-hover">
              <p>{trainer.certifications}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trainer Details Modal */}
      {selectedTrainer && (
        <div className="trainer-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h3>{selectedTrainer.name}</h3>
            <p><strong>Specialty:</strong> {selectedTrainer.specialty}</p>
            <p><strong>Experience:</strong> {selectedTrainer.experience}</p>
            <p><strong>Certifications:</strong> {selectedTrainer.certifications}</p>
            <p>{selectedTrainer.bio}</p>
            <div className="social-links">
              <a href={selectedTrainer.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={selectedTrainer.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a href={selectedTrainer.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trainers;
