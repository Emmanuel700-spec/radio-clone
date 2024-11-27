import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <img
          src="https://ichef.bbci.co.uk/images/ic/raw/p0f4b99m.png"  // Replace with your image path
          alt="BBC Radio"
          className="hero-image"
        />
      </header>

      <section className="hero-content">
        <h5>Your world of Sounds</h5>
        <p>Save shows to listen to later, subscribe to your favourites<br /> and get fresh recommendations every day.</p>
      </section>

      <section className="features">
        <h2>Explore BBC Radio</h2>

        <section className="authentication-section">
          <button>Sign up</button> or <a href="#">Register</a>
        </section>

        <div className="feature-cards">
          <div className="card">
            <h3>Live Radio</h3>
            <p>Listen to your favorite BBC stations live.</p>
          </div>
          <div className="card">
            <h3>Podcasts</h3>
            <p>Catch up with the latest podcasts from BBC Radio.</p>
          </div>
          <div className="card">
            <h3>Genres</h3>
            <p>Explore music by genre and discover new favorites.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
