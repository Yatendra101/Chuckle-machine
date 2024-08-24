import axios from 'axios';

// Hugging Face API configuration
const HUGGING_FACE_API_KEY = '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'; // Replace with your actual API key
const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/gpt2'; // Replace with the appropriate model endpoint

// YouTube Data API configuration
const YOUTUBE_API_KEY = 'AIzaSyBIFW9l-ivIUZN2T6SQO2hv6eqAtbQOqfE'; // Replace with your actual API key
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const huggingFaceAPI = axios.create({
  baseURL: HUGGING_FACE_API_URL,
  headers: {
    'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const youtubeAPI = axios.create({
  baseURL: YOUTUBE_API_URL,
  params: {
    key: YOUTUBE_API_KEY,
    part: 'snippet',
    type: 'video'
  }
});
