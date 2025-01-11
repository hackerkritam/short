import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Extract token from URL when the app loads
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("firebaseToken", token); // Store token in localStorage
    } else {
      console.error("No token found in URL");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the React App</h1>
    </div>
  );
}

export default App;