import { huggingFaceAPI, youtubeAPI } from './api';

// Function to generate scripts using Hugging Face
export const generateScript = async (prompt) => {
  try {
    const response = await huggingFaceAPI.post('', {
      inputs: prompt,
      parameters: {
        max_length: 500,
        temperature: 0.7
      }
    });
    // Adjust response handling based on Hugging Face API response format
    return response.data[0].generated_text.trim();
  } catch (error) {
    console.error('Error generating script:', error);
  }
};

// Function to search for videos on YouTube based on a query
export const searchVideos = async (query) => {
  try {
    const response = await youtubeAPI.get('', {
      params: {
        q: query,
        maxResults: 5
      }
    });
    return response.data.items.map(item => ({
      title: item.snippet.title,
      videoId: item.id.videoId
    }));
  } catch (error) {
    console.error('Error searching for videos:', error);
  }
};
