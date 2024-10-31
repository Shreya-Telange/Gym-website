import React, { useState, useEffect } from "react";
import SignInModal from "./SignInModal";
import { getInitials } from "../utils/getInitials"; // Import the utility
import './Header.css';

const Header = ({ user, handleSignOut, handleSignIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setSticky] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Function to get initials from user's email
  const initials = user ? getInitials(user.email) : "";

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Sticky Header on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll and Active Link Indicator
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const isActive = window.scrollY >= top && window.scrollY <= bottom;
        if (isActive) setActiveSection(section.getAttribute("id"));
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section or top when link is clicked
  const handleNavLinkClick = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveSection(section);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar">
        <div className="logo">
          <h2>Forever Fit</h2>
                  </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {["home", "about", "classes", "trainers", "pricing", "contact"].map((section) => (
              <li key={section} className={activeSection === section ? "active" : ""}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleNavLinkClick(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {user ? (
          <div className="user-info">
            <div className="user-avatar">{initials}</div>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button onClick={openModal}>Sign In</button>
        )}
      </nav>
      {showModal && <SignInModal onSignIn={handleSignIn} onClose={closeModal} />}
    </header>
  );
};

export default Header;
