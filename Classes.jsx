import React, { useState } from "react";
import "./Classes.css";

// Sample data for classes
const classData = [
  {
    id: 1,
    title: "Yoga",
    description: "A relaxing yoga class to increase flexibility and mindfulness.",
    image: "src/assets/yoga.jpg",
    category: "Relaxation",
    instructor: "John Doe",
    time: "Mon, Wed, Fri - 8:00 AM",
  },
  {
    id: 2,
    title: "HIIT",
    description: "A high-intensity interval training class for maximum calorie burn.",
    image: "src/assets/hiit.jpg",
    category: "Cardio",
    instructor: "Jane Smith",
    time: "Tue, Thu - 6:00 PM",
  },
  {
    id: 3,
    title: "Strength Training",
    description: "Build strength and muscle in this weight training class.",
    image: "src/assets/strength.jpg",
    category: "Strength",
    instructor: "Mike Johnson",
    time: "Mon, Wed, Fri - 10:00 AM",
  },
];

const Classes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedClass, setSelectedClass] = useState(null);

  // Filter classes by category
  const filteredClasses = classData.filter(
    (cls) => selectedCategory === "All" || cls.category === selectedCategory
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleClassClick = (cls) => {
    setSelectedClass(cls);
  };

  const closeModal = () => {
    setSelectedClass(null);
  };

  return (
    <section className="classes-section" id="classes">
      <h2 className="section-heading">Our Classes</h2>

      {/* Filter Options */}
      <div className="filter-buttons">
        {["All", "Relaxation", "Cardio", "Strength"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Class Cards */}
      <div className="classes-grid">
        {filteredClasses.map((cls) => (
          <div
            className="class-card"
            key={cls.id}
            onClick={() => handleClassClick(cls)}
          >
            <div className="class-image">
              <img src={cls.image} alt={cls.title} />
            </div>
            <div className="class-info">
              <h3>{cls.title}</h3>
              <p>{cls.description}</p>
            </div>
            <div className="class-hover">
              <p>Instructor: {cls.instructor}</p>
              <p>Time: {cls.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Class Details Modal */}
      {selectedClass && (
        <div className="class-modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedClass.title}</h3>
            <p>{selectedClass.description}</p>
            <p><strong>Instructor:</strong> {selectedClass.instructor}</p>
            <p><strong>Time:</strong> {selectedClass.time}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Classes;
