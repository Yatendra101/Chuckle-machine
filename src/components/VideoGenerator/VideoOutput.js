import React from 'react';

function VideoOutput({ videoUrl }) {
  return (
    <div>
      <h3>Your Generated Video</h3>
      {videoUrl ? (
        <video width="600" height="400" controls src={videoUrl} />
      ) : (
        <p>No video generated yet.</p>
      )}
    </div>
  );
}

export default VideoOutput;
