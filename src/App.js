// App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">●●●</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-image">
          {/* Використовуємо прямий шлях до зображень */}
          <img src="/img/5.jpg" alt="Creative workspace" />
          <img src="/img/2.jpg" alt="Design process" />
        </div>
      </section>

      <section className="team-section">
        <div className="team-grid">
          <div className="team-member">
            <img src="/img/member1.jpg" alt="Team member" />
            <h3>Jane Smith</h3>
          </div>
          <div className="team-member">
            <img src="/img/member2.jpg" alt="Team member" />
            <h3>Jane Doe</h3>
          </div>
          <div className="team-member">
            <img src="/img/member3.jpg" alt="Team member" />
            <h3>Sarah Johnson</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;