// FeaturesBenefits.js
import React from 'react';
import styled from 'styled-components';

const FeaturesBenefits = () => {
  const features = [
    {
      title: 'Early Pest Detection',
      description: 'Utilizing advanced sensors and AI to identify pest threats early, allowing for proactive management.',
    },
    {
      title: 'Sustainability Focus',
      description: 'Commitment to eco-friendly practices that protect the environment and enhance farm productivity.',
    },
    {
      title: 'AI-Driven Analytics',
      description: 'Leveraging artificial intelligence to analyze data and provide actionable insights for farmers.',
    },
  ];

  return (
    <FeaturesSection>
      <SectionTitle>Features & Benefits</SectionTitle>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesList>
    </FeaturesSection>
  );
};

// Styled Components
const FeaturesSection = styled.section`
  padding: 48px 20px; /* Increased padding by 20% */
  background-color: rgba(247, 195, 95, 0.4); /* Set background color with opacity using RGBA */
  text-align: center; /* Center the text */
  min-height: 500px; /* Optional: Set a minimum height for the section */
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #04602b; /* Match your theme color */
  font-family: 'Dosis', sans-serif; /* Use the Dosis font */
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: row; /* Stack features vertically */
  align-items: center;
  padding: 20px; /* Padding inside the list */
`;

const FeatureItem = styled.div`
  max-width: 500px; /* Limit width for better readability */
  padding: 20px;
  border: 1px solid #ddd; /* Add a border for definition */
  background-color: white; /* Set background color to white */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 8px 8px 20px rgba(1, 0, 0, 0.4); /* L-shape shadow effect */
  margin: 20px; /* Space between features */
  transition: box-shadow 0.5s ease, transform 0.3s ease; /* Smooth transition for shadow and scaling */
  
  &:hover {
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
    transform: translateY(-2px); /* Slight lift effect on hover */
  }
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  color: #04602b; /* Title color */
  margin-bottom: 10px;
  font-family: 'Dosis', sans-serif; /* Use the Dosis font */
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #333; /* Dark text for description */
`;

export default FeaturesBenefits;
