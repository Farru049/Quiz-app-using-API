import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function Timer({ duration, onTimeEnd }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeEnd();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeEnd]);

  return (
    <div className="timer">
      Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
    </div>
  );
}

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
  onTimeEnd: PropTypes.func.isRequired
};