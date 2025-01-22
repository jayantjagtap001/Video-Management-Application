import  { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get('http://localhost:5000/videos', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setVideos(data);
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Your Videos</h1>
      {videos.map((video) => (
        <div key={video._id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;