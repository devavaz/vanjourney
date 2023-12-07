import React, { useState } from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";



 

const Accordion = () => {
   

  const accordionItems = [
    {
      title: 'How does your delivery and pickup service work for rented vans?',
      content: 'Our delivery and pickup services are designed for your convenience. Whether it\'s your home, the airport, or another specified address, you can have the rented van delivered to you. After your trip, we\'ll pick up the van from a location that suits you best.'
    },
    {
      title: 'What safety precautions do you have in place for your rented vans?',
      content: 'Ensuring your safety is our utmost priority. Our vans undergo regular maintenance checks, meeting stringent safety standards. Additionally, each rental includes insurance coverage, providing you with peace of mind throughout your journey.'
    },
    {
      title: 'Can I utilize your delivery and pickup services for the rented van?',
      content: 'Certainly! Take advantage of our convenient delivery and pickup services. Specify your desired location, be it your home, the airport, or another address, for the rented van to be delivered. After your trip, we\'ll arrange to pick up the van at a location convenient for you.'}
  ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className='accordion-container'>
       
       <div> 
        <h1>FAQ's</h1>
        {accordionItems.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {item.title}
              <span className="accordion-icon">{activeIndex === index ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
        </div>


       <div className='form-section'>
        <h1>Ask your question</h1>
         <form className='form-accordion'>
          <input type="text" />
          <input id="email" type="email" placeholder='type your email' />
         </form>
         <button className='form-btn'>Submit</button>
       </div>




      </div>
    );
  };
  
  export default Accordion;