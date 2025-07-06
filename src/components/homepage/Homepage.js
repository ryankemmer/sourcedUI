import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
  const [imageUrl, setImageUrl] = useState('');
  const [urlList, setUrlList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      // Use POST method to send image URL in the body
      const response = await fetch('https://utt0f2i5kl.execute-api.us-west-2.amazonaws.com/prod/sourced', {
        method: 'POST', // Use POST method instead of GET
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_url: imageUrl }), // Send the image URL in the body
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response from the server

        setUrlList(data.urls); // Set the returned URLs into the state
      } else {
        setError('Error fetching URLs. Please try again.');
      }
  
    } catch (error) {
      setError('Error fetching URLs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage">
      <h1 className="heading">Sourced</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <label className="input-label">
          Image URL:
          <input
            className="input-field"
            type="text"
            value={imageUrl}
            onChange={handleImageUrlChange}
            placeholder="Enter image URL"
            required
          />
        </label>
        <button className="submit-button" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <h2 className="url-list-title">Returned URLs:</h2>
      {urlList.length > 0 ? (
        <ul className="url-list">
          {urlList.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No URLs to show</p>
      )}
    </div>
  );
}

export default Homepage;
