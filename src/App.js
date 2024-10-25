// App.js



// Then use <GlobalStyle /> in your App component

import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturesBenefits from './FeaturesBenefits';
import AuthorBio from './AuthorBio';
import Testimonials from './Testimonials';
import FAQs from './FAQs';



const App = () => {
  return (
    <div style={{ padding: 0, backgroundColor: '#f9f9f9', minHeight: '100vh' , margin: 0  }}>
            <Header />
      <Hero />
      <FeaturesBenefits />
      <AuthorBio /> 
      <Testimonials />
            <FAQs />  
        </div>
     
  );
};

export default App;
