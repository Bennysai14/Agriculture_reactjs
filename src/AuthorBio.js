import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthorImage1 from './assets/sajalDas.jpg'; // Adjust the image path
import AuthorImage2 from './assets/vishesh.jpg'; 
import AuthorImage3 from './assets/Rathindra.jpg'; 

const AuthorBioSlider = () => {
  const authors = [
    {
      image: AuthorImage1,
      title: 'C.E.O., President, and Head Baker',
      name: 'Prof. Sajal Das',
      pronoun: '(He/Him)',
      description: 'Professor of Computer Science at Missouri S&T, having expertise in AI, data science, CPS, IoT, UAV, smart agriculture, wireless and sensor networks, privacy, and edge/cloud computing.',
      linkedin: 'www.linkedin.com/in/sajal-k-das-6588b394/',
    },
    {
      image: AuthorImage2,
      title: 'Chief Operations Officer',
      name: 'Vishesh Gupta',
      pronoun: '(He/Him)',
      description: 'Expert in operational strategies, focusing on improving efficiencies across production lines and integrating smart farming systems.',
      linkedin: 'www.linkedin.com/in/vishesh-gupta/',
    },
    {
      image: AuthorImage3,
      title: 'AI and Data Science Lead',
      name: 'Rathindra Bose',
      pronoun: '(He/Him)',
      description: 'Specialist in artificial intelligence and machine learning, leading research efforts to revolutionize predictive farming analytics.',
      linkedin: 'www.linkedin.com/in/rathindra-bose/',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % authors.length); // Loop through authors
    }, 3000); // Slide change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [authors.length]);

  return (
    <AuthorBioSection>
      <SecondaryTitle>Meet Our Team <br /> of Experts</SecondaryTitle>
      <AuthorContent>
        <AuthorImageContainer>
          <img src={authors[currentIndex].image} alt={authors[currentIndex].name} />
        </AuthorImageContainer>
        <AuthorDetails>
          <h3>{authors[currentIndex].title}</h3>
          <h1>
            {authors[currentIndex].name} <span>{authors[currentIndex].pronoun}</span>
          </h1>
          <p>{authors[currentIndex].description}</p>
          <PersonalDetails>
            <p><strong>LinkedIn:</strong> {authors[currentIndex].linkedin}</p>
          </PersonalDetails>
        </AuthorDetails>
      </AuthorContent>
    </AuthorBioSection>
  );
};

// Styled Components
const AuthorBioSection = styled.section`
  display: flex;
  justify-content: space-between; /* Space between the title and content */
  align-items: center;
  padding: 50px 20px;
  background-color: #f8f8f8;
`;

const AuthorContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px; /* Adjust as needed */
  padding: 48px; /* Increased padding for height */
  border-radius: 10px;
  box-shadow: none; /* Remove shadow */
  transition: opacity 1s ease-in-out, transform 1s ease-in-out; 
  opacity: 1;
  transform: translateX(0);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    max-width: 100%; /* Full width on smaller screens */
  }
`;

const AuthorImageContainer = styled.div`
  flex-shrink: 0;
  width: 300px; /* Increased width for more impact */
  height: 300px; /* Increased height */
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorDetails = styled.div`
  margin-left: 30px;
  color: #333;
  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #666;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 32px;
    margin: 0;
    font-weight: bold;
    color: #333;
    span {
      font-size: 22px;
      color: #888;
      font-weight: normal;
    }
  }
  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const PersonalDetails = styled.div`
  margin-top: 20px;
  p {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

// Styled component for the fixed secondary title
const SecondaryTitle = styled.h1`
  width: 30%; // Set width to keep the title fixed
  font-family: 'Dosis', sans-serif;  // Match the font styling
  font-size: 36px;
  color: #333;
  margin: 0; // Remove margin for alignment
  text-align: center; // Center text
  position: relative; // Prevent transitions
  opacity: 1; // Ensure it's fully visible
`;

export default AuthorBioSlider;
