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
    { title: "Battle of the Bands", image: ""},
    { title: "Pitch Perfect", image: "" },
    { title: "Razzmatazz", image: ""},
    { title: "Silver Screen", image: ""},
    { title: "Thespian of Melody", image: "" },
    { title: "Icons and Imitations", image: "" },
    { title: "Metamorphosis", image: "" },
    { title: "Kryptos Visos", image: "" },
    { title: "Dyed in Crimson", image: "" },
    { title: "Dealer's Choice", image: "" },
    { title: "Photography", image: "" },
    { title: "Gaming", image: "" },
    { title: "Sports", image: "" },
  ];

  return (
    <div className="events-page">
      <h1>Cultural Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} id={event.id} title={event.title} image={event.image} />
        ))}
      </div>
    </div>
  );
};

export default Cultural;