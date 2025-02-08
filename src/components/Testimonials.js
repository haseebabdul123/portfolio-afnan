import React from "react";
import './style/global.css'
const testimonials = [
  { 
    name: "John Doe", 
    country: "USA", 
    description: "The attention to detail and creativity were beyond my expectations. Highly professional and efficient!"
  },
  { 
    name: "Jane Smith", 
    country: "UK", 
    description: "Great communication and top-notch service. Delivered exactly what I needed with a unique touch."
  },
  { 
    name: "Ali Khan", 
    country: "Pakistan", 
    description: "Very skilled and knowledgeable. Completed my project on time with fantastic results. Will hire again!"
  },
  { 
    name: "Emma Brown", 
    country: "Canada", 
    description: "The work was outstanding, and I appreciated the smooth collaboration. Exceeded my expectations!"
  },
  { 
    name: "Carlos Garcia", 
    country: "Spain", 
    description: "Delivered exactly what was promised. The attention to detail and work ethic were commendable."
  },
];


const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What people say about me?</h2>
      <h3>Recommendations and testimonials</h3>
      <div className="cards">
      {testimonials.map((t, index) => (
        <div key={index} className="testimonial-card">
          <p><strong>{t.name}</strong> ({t.country})</p>
          <p>"{t.description}"</p>
        </div>
        
      ))}
      </div>
    </div>
  );
};

export default Testimonials;
