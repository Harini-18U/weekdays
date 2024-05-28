import React, { useState } from 'react';
import './weekdays.css';

const DayMessage = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.trim() === '') {
      setMessage('Please enter a number.');
      return;
    }

    const dayNumber = parseInt(input);

    switch (dayNumber) {
      case 1:
        setMessage('Mon - Start of the week');
        break;
      case 2:
        setMessage('Tue - Second day of the week');
        break;
      case 3:
        setMessage('Wed - Mid day of the week');
        break;
      case 4:
        setMessage('Thr - Nearing Weekend');
        break;
      case 5:
        setMessage('Fri - Last day of the week');
        break;
      default:
        setMessage('None - Please enter any day');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number (1-5) : 
          <input type="number" value={input} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default DayMessage;