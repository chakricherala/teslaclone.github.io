import React from 'react';
import Section from './section';
import Footer from './footer';

function Home() {
  return (
    <div className='Cont'>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        showArrowImage={true}
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        showArrowImage={true}
      />
      <Section
       title="Model X"
       description="Order Online for Touchless Delivery"
       backgroundImg="model-x.jpg"
       leftbtn="Custom Order"
       rightbtn="Existing Inventory" 
       showArrowImage={true}
      />
      <Section 
       title="Model 3"
       description="Order Online for Touchless Delivery"
       backgroundImg="model-3.jpg"
       leftbtn="Custom Order"
       rightbtn="Existing Inventory"
       showArrowImage={true}
      />
      <Section 
       title="Lowest Cost Solar Panels in America"
       description="Money back guatantee"
       backgroundImg="solar-panel.jpg"
       leftbtn="Order Now"
       rightbtn="Learn More"
       showArrowImage={true}
      />
      <Section 
       title="Solar for New Roofs"
       description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
       backgroundImg="solar-roof.jpg"
       leftbtn="Order Now"
       rightbtn="Learm More"
       showArrowImage={true}
      />
      <Section 
       title="Accessories"
       description=""
       backgroundImg="accessories.jpg"
       leftbtn="Shop Now"
       rightbtn=""
       showArrowImage={false}
      />
      <Footer />
    </div>
  );
}


export default Home

