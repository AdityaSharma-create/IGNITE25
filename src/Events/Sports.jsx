import React from 'react';
import './Cultural.css';
import Bob from '../assets/image.png'
import {Link} from 'react-router-dom'
const EventCard = ({ title, image, id}) => {
  return (
    <Link to={`/events/${id}`} style={{ textDecoration: 'none' ,color: 'white' }}>
      <div className="event-card">
        <img src={Bob} alt={title} className="event-image" />
      <h3 className="event-title">{title}</h3>
      </div>
    </Link>
  );
};

const Cultural = () => {
  const events = [
    { title: "Basketball", image: "" , id: 'battleofbands'},
    { title: "Football", image: "" },
    { title: "Hockey", image: ""},
    { title: "Badminton", image: ""},
    { title: "Tennis", image: "" },
    { title: "Table Tennis", image: "" },
    { title: "Relay", image: "" },
    { title: "Flag Football", image: "" },
    { title: "Chess", image: "" },
    { title: "Squash", image: "" },
    { title: "Swimming", image: "" },
  ];

  return (
    <div className="events-page">
      <h1>Sports Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} id={event.id} title={event.title} image={event.image} />
        ))}
      </div>
    </div>
  );
};

export default Cultural;