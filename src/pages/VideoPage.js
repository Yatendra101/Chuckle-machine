import React from 'react';
import VideoForm from '../components/VideoGenerator/VideoForm';
import VideoOutput from '../components/VideoGenerator/VideoOutput';

function VideoPage() {
  return (
    <div>
      <h2>Generate Comedy Videos</h2>
      <VideoForm />
      <VideoOutput />
    </div>
  );
}

export default VideoPage;
