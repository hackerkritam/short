import React, { useState, useEffect } from 'react';

function Progress() {
    const [progressData, setProgressData] = useState([]);

    useEffect(() => {
        const fetchProgressData = async () => {
            const token = localStorage.getItem("firebaseToken");
            console.log(token);
            if (!token) {
                console.error("No token available");
                return;
            }

            try {
                const endpoint = `https://pleasing-guppy-hardy.ngrok-free.app/api/progress/${token}`
                console.log(endpoint)
                const response = await fetch(endpoint);
                const data = await response.json();
                console.log()
                console.log(data); // Log the response data
                setProgressData(data);
            } catch (error) {
                console.error("Error fetching progress data:", error);
            }
        };

        fetchProgressData();
    }, []);

    return (
        <div>
            {/* Render progress data here */}
        </div>
    );
}

export default Progress;