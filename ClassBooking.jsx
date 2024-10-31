import React, { useState } from "react";
import './ClassBooking.css';

const ClassBooking = () => {
  const [availableClasses, setAvailableClasses] = useState([
    { id: 1, name: "Yoga", availableSpots: 10 },
    { id: 2, name: "Zumba", availableSpots: 8 },
    { id: 3, name: "Weight Training", availableSpots: 12 },
  ]);

  const [bookedClasses, setBookedClasses] = useState([]);

  const bookClass = (classItem) => {
    if (classItem.availableSpots > 0) {
      classItem.availableSpots -= 1;
      setBookedClasses([...bookedClasses, classItem]);
    }
  };

  return (
    <div className="class-booking">
      <h2>Book a Class</h2>
      <div className="available-classes">
        {availableClasses.map((classItem) => (
          <div key={classItem.id} className="class-item">
            <p>{classItem.name} - {classItem.availableSpots} spots left</p>
            <button onClick={() => bookClass(classItem)}>Book Now</button>
          </div>
        ))}
      </div>

      <div className="booked-classes">
        <h3>Your Booked Classes</h3>
        {bookedClasses.map((classItem, index) => (
          <div key={index} className="booked-class-item">
            <p>{classItem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassBooking;
