import React, { useState } from 'react';
import './Homepage.css'; // Import the CSS file for styling

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
      // Simulate an API call using fetch (replace with actual API endpoint if necessary)
      const response = await fetch('https://api.example.com/fetchUrls', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // You can pass the image URL in the query string if needed
        // or in the body of a POST request
        body: JSON.stringify({ imageUrl }),
      });

      // Simulating a successful API response
      const result = { urls: ['https://example.com', 'https://anotherurl.com'] }; // Replace with actual response
      setUrlList(result.urls); // Set the returned list of URLs
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
