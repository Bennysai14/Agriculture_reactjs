// Testimonials.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import the image as needed
import PlaceholderImage from './assets/placeholder.jpg'; // Replace with actual image path or import

const testimonials = [
  {
    name: 'Anthony Martin',
    title: 'Analyst, Iowa Soybean Association',
    image: PlaceholderImage, // Replace with actual image path
    testimonial: 'The insights and innovations have been invaluable to our work in sustainable agriculture.',
  },
  {
    name: 'Sample Name',
    title: 'Sample Title, Sample Organization',
    image: PlaceholderImage,
    testimonial: 'Sample testimonial goes here.',
  },
  {
    name: 'Another Name',
    title: 'Another Title, Another Organization',
    image: PlaceholderImage,
    testimonial: 'Another testimonial content goes here.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, title, image, testimonial } = testimonials[currentIndex];

  return (
    <TestimonialsSection>
      <TestimonialCard>
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>
        <TestimonialContent>
          <h3>{testimonial}</h3>
          <p>- {name}, {title}</p>
        </TestimonialContent>
      </TestimonialCard>
    </TestimonialsSection>
  );
};

// Styled Components
const TestimonialsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 40px;
  width: 100%;
`;

const TestimonialCard = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  transition: transform 0.5s ease;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: #777;
  }
`;

export default Testimonials;
