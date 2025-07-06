import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
  const [imageUrl, setImageUrl] = useState('');
  const [urlList, setUrlList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://utt0f2i5kl.execute-api.us-west-2.amazonaws.com/prod/sourced', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ image_url: imageUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        setUrlList(data.urls);
      } else {
        setError('Error fetching URLs.');
      }
    } catch (error) {
      setError('Error fetching URLs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage">
      <div className="hero">
        <h1 className="hero-title">You Know the Look.<br/>We Know Where to Thrift It.</h1>
        <p className="hero-subhead">
          Thrift designer fashion across Depop, Grailed, and more—curated to your exact aesthetic.
        </p>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="What are you looking for?"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <button type="submit" className="search-btn" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>

      <div className="results-section">
        {urlList.length > 0 && (
          <ul className="url-list">
            {urlList.map((url, idx) => (
              <li key={idx}>
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <section className="info-section">
        <h2>What We Do</h2>
        <p>You bring the inspiration. We bring the finds. Think of us as your thrift stylist, powered by your moodboard—not keywords.</p>
        <ul className="info-list">
          <li>🔍 Curated from Depop, Grailed, and Poshmark daily</li>
          <li>✨ Premium brands like Ralph Lauren, Dior, Zegna & more</li>
          <li>⏰ Updated constantly so you never miss a drop</li>
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
