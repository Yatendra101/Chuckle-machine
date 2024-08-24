import React, { useState } from 'react';
import { searchVideos } from '../../services/aiServices';

function VideoForm() {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoResults = await searchVideos(query);
    setVideos(videoResults);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your query:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <button type="submit">Search Videos</button>
      <div>
        {videos.length > 0 ? (
          <ul>
            {videos.map((video) => (
              <li key={video.videoId}>
                <h4>{video.title}</h4>
                <iframe
                  width="600"
                  height="400"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                  title={video.title}
                ></iframe>
              </li>
            ))}
          </ul>
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </form>
  );
}

export default VideoForm;
