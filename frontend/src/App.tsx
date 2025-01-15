import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState<string>('Loading...'); // State to hold the backend message

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/')
      .then((response) => response.text()) // Convert the response to text
      .then((data) => setMessage(data)) // Set the message state with the fetched data
      .catch((error) => setMessage('Error fetching data!')); // Handle errors
  }, []); // Empty dependency array ensures this runs once when the component loads

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <p>{message}</p> {/* Display the message from the backend */}
    </div>
  );
}

export default App;
