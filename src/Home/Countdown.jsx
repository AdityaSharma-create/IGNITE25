import React, { useState, useEffect } from 'react';
import "./Countdown.css"

function Countdown({ targetDate }) {
  const [time, setTime] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = time;

  return (
    <div className="countdown">
      <div className='countdown_package_whole'>
        <div className="countdown_elements" id='countdown_days'>
          {days > 0 && `${days}`}
        </div>
        <div className="countdown_labels">
          <p className='specific_countdown_label'>Days</p>
        </div>
      </div>
      
      <div className='countdown_package_whole'>
        <div className="countdown_elements" id='countdown_hours'>
          {hours.toString().padStart(2, '0')}
        </div>
        <div className="countdown_labels">
          <p className='specific_countdown_label'>Hours</p>
        </div>
      </div>
      
      <div className='countdown_package_whole'>
        <div className="countdown_elements" id='countdown_minutes'>
          {minutes.toString().padStart(2, '0')}
        </div>
        <div className="countdown_labels">
          <p className='specific_countdown_label'>Minutes</p>
        </div>
      </div>
      
      <div className='countdown_package_whole'>
        <div className="countdown_elements" id='countdown_seconds'>
          {seconds.toString().padStart(2, '0')}
        </div>
        <div className="countdown_labels">
          <p className='specific_countdown_label'>Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;