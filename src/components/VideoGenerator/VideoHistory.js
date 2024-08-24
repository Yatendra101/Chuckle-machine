import React from 'react';

function VideoHistory({ history }) {
  return (
    <div>
      <h3>Video History</h3>
      <ul>
        {history.map((video, index) => (
          <li key={index}>
            <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoHistory;
