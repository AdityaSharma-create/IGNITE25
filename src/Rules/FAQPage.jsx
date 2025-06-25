import React, { useState } from 'react';
import './FAQPage.css';

const FAQCard = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div 
      className={`faq-card ${isActive ? 'active' : ''}`}
      onClick={toggleActive}
      onMouseEnter={() => window.innerWidth > 768 && setIsActive(true)}
      onMouseLeave={() => window.innerWidth > 768 && setIsActive(false)}
    >
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    { question: "How do I register?", answer: "Contact your school and let them know you are interested in participating in IGNITE. Ensure you get permission to participate and note that only 2 teams per school per event are allowed except for Rocket league. Request for the contact details for the supervisor that will accompany you to the event and ensure you fill in the details accurately." },
    { question: "What does Supervising Teacher mean?", answer: "A supervising teacher is responsible for overseeing and guiding students during the event." },
    { question: "Who do I ask if I have a question?", answer: "You can contact the event organizers or your school's designated contact person for IGNITE." },
    { question: "Where and how much do I pay?", answer: "Payment details and amounts vary. Please check with your school or the event organizers for specific information." },
  ];

  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1>FAQs</h1>
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;