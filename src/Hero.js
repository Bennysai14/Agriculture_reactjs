import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import your local background image
import backgroundImage from './assets/background.jpg'; // Adjust the path as necessary

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: 'FarmVates AgriTech company',
      subtitle: 'FarmVates is an AgriTech company committed to revolutionizing pest management through innovative, AI-driven technologies.',
    },
    {
      title: 'FarmVates AgriTech company',
      subtitle: 'Our mission is to empower farmers to make data-informed decisions, optimize chemical use, enhance crop quality, and contribute to sustainable agriculture. By harnessing advanced sensor networks, machine learning, and real-time data analytics.',
    },
    {
      title: 'FarmVates AgriTech company',
      subtitle: 'We provide farmers with the tools to tackle pest pressure proactively, improving yield and decreasing the environmental footprint of farming. We envision a future where sustainable farming practices enhance food security, reduce the impact of climate change, and support global communities through better, healthier crops.',
    },
  ];

  // Function to handle slide transition
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop back to the first slide
  };

  // Automatic slideshow transition every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <HeroSection>
      {/* Only keep one arrow button (e.g., left arrow) if needed */}
      {/* <ArrowButton left onClick={handlePrevious}>
        &#9664; {/* Left Arrow */}
      {/* </ArrowButton> */}
      <HeroText>
        <HeroTitle>{slides[currentIndex].title}</HeroTitle>
        <HeroSubtitle>{slides[currentIndex].subtitle}</HeroSubtitle>
      </HeroText>
      {/* Uncomment to keep the right arrow button */}
      {/* <ArrowButton onClick={handleNext}>
        &#9654; {/* Right Arrow */}
      {/* </ArrowButton> */}
    </HeroSection>
  );
};

// Styled Components
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center; /* Center text */
  background-image: url(${backgroundImage}); /* Use the imported image */
  background-size: cover; /* Cover the whole section */
  background-position: center; /* Center the background */
  height: 100vh; /* Full viewport height */
  width: 100%; /* Full width */
  color: white; /* Text color for better contrast */
  position: relative; /* Position for absolute child elements */
  box-sizing: border-box; /* Ensure padding is included in width */
`;

const HeroText = styled.div`
  max-width: 89%;
  z-index: 2; /* Ensure text is above background */
  text-align: left; /* Center the text */
  margin-left: 1px; /* Center the text block */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Text shadow for better readability */
`;

const HeroTitle = styled.h1`
  font-size: 58px;
  line-height: 1.2;
  margin: 20px 0;
  color: white;
  font-family: 'Dosis', sans-serif; /* Change to Dosis */
  font-weight: 900; /* Set font weight to 600 for Semibold */
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin: 20px 0;
  line-height: 1.5; /* Improve readability */
 font-family: 'Dosis', sans-serif; /* Change to Dosis */
`;

const ArrowButton = styled.button`
  background: transparent; /* Transparent background */
  border: none; /* No border */
  color: white; /* White color for the arrow */
  font-size: 50px; /* Adjust size as needed */
  cursor: pointer;
  z-index: 2; /* Ensure arrows are above the text */
  padding: 0 20px; /* Add some padding for clickable area */
  transition: color 0.3s ease;

  &:hover {
    color: #ffb400; /* Change color on hover */
  }

  ${(props) => (props.left ? 'left: 20px;' : 'right: 20px;')}; /* Position the arrows */
  position: absolute; /* Position the arrows absolutely within the section */
  top: 10%; /* Center vertically */
  transform: translateY(-70%); /* Adjust for exact centering */
`;

export default Hero;
