import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const setSpeed = () => { video.playbackRate = 2; };
    video.addEventListener('loadeddata', setSpeed);
    video.addEventListener('playing', setSpeed);
    setSpeed();
    return () => {
      video.removeEventListener('loadeddata', setSpeed);
      video.removeEventListener('playing', setSpeed);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = '#f5f0eb';
    document.body.style.color = '#1a1a1a';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleWaitlist = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">sourced</a>
          <a href="#waitlist" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollToSection('waitlist'); }}>
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">Coming Soon</div>
          <h1 className="hero-title">
            You Know the Look.
            <br />
            <span className="hero-accent">We Know Where to Thrift It.</span>
          </h1>
          <p className="hero-sub">
            Thrift designer fashion across Depop, Grailed. No endless searching. No guesswork. Just your
            vibe, delivered.
          </p>
          <div className="hero-buttons">
            <a
              href="#waitlist"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('waitlist'); }}
            >
              Join the Waitlist
            </a>
            <button
              className="btn btn-ghost"
              onClick={() => scrollToSection('how-it-works')}
            >
              See How It Works
            </button>
          </div>
        </div>
        <div className="hero-fade" />
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section">
        <div className="container reveal">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-heading">
            You know the look.
            <br />
            You just don't know what to search for.
          </h2>
          <div className="section-body">
            <p>That's where we come in.</p>
            <p>
              We scan platforms like Depop, Grailed, and Poshmark to build a
              feed that looks like <em>you</em>. Just upload your inspo (from
              Pinterest, your camera roll, wherever), and we'll do the digging.
            </p>
          </div>
          <blockquote className="callout">
            Think of us as your thrift stylist. Only faster. And obsessed with
            your moodboard.
          </blockquote>
        </div>
      </section>

      {/* The Problem */}
      <section className="section section-alt">
        <div className="container reveal">
          <span className="eyebrow">The Problem</span>
          <h2 className="section-heading">
            You've got the inspo.
            <br />
            But the thrift web is a lot to wrangle.
          </h2>
          <div className="section-body">
            <p>
              Maybe you saved the perfect fit on TikTok or Pinterest. Maybe
              you've got a whole folder of looks.
            </p>
            <p>
              But when it comes time to thrift it? You're lost in a sea of tags,
              overpriced resellers, and endless scrolling.
            </p>
            <p className="emphasis">
              The pieces are out there, but good luck finding them!
            </p>
          </div>
        </div>
      </section>

      {/* Thriftable Feed */}
      <section className="section">
        <div className="container reveal">
          <span className="eyebrow">The Solution</span>
          <h2 className="section-heading">
            Goodbye searchbar, hello thriftable feed.
          </h2>
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch" />
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                onLoadedMetadata={(e) => { e.target.playbackRate = 2; }}
                onPlay={(e) => { e.target.playbackRate = 2; }}
                className="phone-video"
              >
                <source src={`${process.env.PUBLIC_URL}/Recording.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* What We Curate */}
      <section className="section">
        <div className="container reveal">
          <span className="eyebrow">What We Curate</span>
          <h2 className="section-heading">
            Your style. Real pieces. Real sellers.
          </h2>
          <div className="style-cards">
            <div className="style-card">
              <span className="style-emoji" role="img" aria-label="Coat">🧥</span>
              <h3>Archival Streetwear</h3>
            </div>
            <div className="style-card">
              <span className="style-emoji" role="img" aria-label="Jeans">👖</span>
              <h3>Y2K Minimalism</h3>
            </div>
            <div className="style-card">
              <span className="style-emoji" role="img" aria-label="Tie">👔</span>
              <h3>Classic Ralph, Dior, Zegna</h3>
            </div>
          </div>
          <p className="section-footer-text">
            Whatever your style leans, we pull the real thing from real sellers
            all secondhand, all premium, all sustainable.
          </p>
        </div>
      </section>

      {/* No More */}
      <section className="section section-alt">
        <div className="container reveal">
          <span className="eyebrow">What You Won't Deal With</span>
          <h2 className="section-heading">No more of this.</h2>
          <div className="nomore-list">
            <div className="nomore-item">
              <span className="nomore-x">&#x2715;</span>
              <span>Generic results</span>
            </div>
            <div className="nomore-item">
              <span className="nomore-x">&#x2715;</span>
              <span>Tag spamming</span>
            </div>
            <div className="nomore-item">
              <span className="nomore-x">&#x2715;</span>
              <span>
                Wasting hours scrolling through listings that don't fit your
                style or standards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section">
        <div className="container reveal">
          <span className="eyebrow">The Founders</span>
          <h2 className="section-heading">Meet Cole & Ryan</h2>
          <div className="founders">
            <div className="founder">
              <img
                src={`${process.env.PUBLIC_URL}/cole.jpeg`}
                alt="Cole"
                className="founder-img"
              />
              <span className="founder-name">Cole</span>
            </div>
            <div className="founder">
              <img
                src={`${process.env.PUBLIC_URL}/ryan.jpeg`}
                alt="Ryan"
                className="founder-img"
              />
              <span className="founder-name">Ryan</span>
            </div>
          </div>
          <p className="founders-bio">
            One part Google media strategist, one part Amazon Prime Video AI
            practitioner. Cole and Ryan founded Sourced to fix the search fatigue
            of online thrifting. Together they've built a platform that makes
            online thrifting easier than ever before.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="section section-cta">
        <div className="container reveal">
          <div className="cta-divider" />
          <h2 className="cta-heading">Thrifting just got personal.</h2>
          <p className="cta-sub">Built for your style. Not the search bar.</p>
          <p className="cta-body">
            Forget fast fashion. Forget overpriced retail. This is luxury that
            doesn't break the bank, style that doesn't wreck the planet, and a
            find engine that gets your aesthetic better than your ex ever did.
          </p>
          {!submitted ? (
            <form className="waitlist-form" onSubmit={handleWaitlist}>
              <input
                type="email"
                className="waitlist-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-lg">
                Join the Waitlist
              </button>
            </form>
          ) : (
            <div className="waitlist-success">
              <span className="success-check">&#x2713;</span>
              <p>You're on the list. We'll be in touch soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">sourced</span>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
