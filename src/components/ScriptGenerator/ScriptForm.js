import React, { useState } from 'react';
import { huggingFaceAPI } from '../../services/api'; // Import huggingFaceAPI
import ScriptOutput from './ScriptOutput';

function ScriptForm() {
  const [prompt, setPrompt] = useState('');
  const [script, setScript] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Making a request to the Hugging Face API
      const response = await huggingFaceAPI.post('', {
        inputs: prompt,
        parameters: {
          max_length: 100 , // Adjust the max length as needed
          temperature: 0.7, // Controls randomness (Lower = More Deterministic)
          top_p: 0.9, // Nucleus Sampling (Lower = More Focused Choices)
          repetition_penalty: 1.5, // Penalize repeated words (higher = fewer repetitions)
          no_repeat_ngram_size: 3, // Prevents repeating sequences of words
          do_sample: true // Ensures diverse sampling 
        }
      });
      setScript(response.data[0].generated_text.trim()); // Adjust based on the API response structure
    } catch (error) {
      console.error('Error generating script:', error);
      setScript('Error generating script.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <button type="submit">Generate Script</button>
      </form>
      <ScriptOutput script={script} />
    </div>
  );
}

export default ScriptForm;
