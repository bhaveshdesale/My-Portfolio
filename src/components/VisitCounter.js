import { useEffect, useState } from 'react';

export const VisitCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/visit")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Failed to fetch visit count", err));
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 10, right: 10, background: '#fff', padding: '5px 10px', borderRadius: '8px', boxShadow: '0px 0px 5px #ccc', fontSize: '14px', zIndex: 1000 }}>
      👀 Total Visits: {count !== null ? count : "Loading..."}
    </div>
  );
};
