import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchProgressData = async () => {
      const token = localStorage.getItem("firebaseToken");
      if (!token) {
        console.error("No token available");
        return;
      }

      try {
        const response = await fetch("https://pleasing-guppy-hardy.ngrok-free.app/api/progress", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}` // Include token in Authorization header
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProgressData(data); // Save the data to state
        } else {
          console.error("Failed to fetch data", response.status);
        }
      } catch (error) {
        console.error("Error fetching progress data:", error);
      }
    };

    fetchProgressData();
  }, []);

  return (
    <div>
      <h2>User Progress</h2>
      <ul>
        {progressData.map((item, index) => (
          <li key={index}>
            Test: {item.test_name}, Score: {item.score}, Time Spent: {item.time_spent}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;