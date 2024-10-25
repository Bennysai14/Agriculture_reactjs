// FeaturesList.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const FeaturesList = () => {
  const features = [
    { 
      title: 'Early Pest Detection', 
      description: 'Detect pests early to minimize crop damage.', 
      image: pestDetectionImage 
    },
    { 
      title: 'Sustainability Focus', 
      description: 'Promote eco-friendly practices in agriculture.', 
      image: sustainabilityImage 
    },
    { 
      title: 'AI-Driven Analytics', 
      description: 'Use AI to provide actionable insights for farmers.', 
      image: aiAnalyticsImage 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through features every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [features.length]);

  return (
    <FeaturesSection>
      <FeatureItem>
        <FeatureImage src={features[currentIndex].image} alt={features[currentIndex].title} />
        <FeatureTitle>{features[currentIndex].title}</FeatureTitle>
        <FeatureDescription>{features[currentIndex].description}</FeatureDescription>
      </FeatureItem>
    </FeaturesSection>
  );
};

// Styled Components
const FeaturesSection = styled.section`
  padding: 40px;
  background-color: rgba(247, 195, 95, 0.65); /* Background with opacity */
  text-align: center;
  border-radius: 8px;
`;

const FeatureItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.15); /* L-shaped shadow */
  transition: box-shadow 0.3s ease;
  max-width: 400px;
  margin: 0 auto; /* Center the feature item */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  color: #04602b;
  font-family: 'Dosis', sans-serif;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

export default FeaturesList;
