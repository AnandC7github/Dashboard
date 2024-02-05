// src/components/Alerts.jsx
import React from 'react';

const Alerts = () => {
  const handleShowAlert = () => {
    // Add your actual alert logic here
    alert('This is an example alert!');
  };

  return (
    <div>
      <h2>Alerts Section</h2>
      <button onClick={handleShowAlert}>Show Alert</button>
    </div>
  );
};

export default Alerts;
