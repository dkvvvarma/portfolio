import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>DKVV.VARMA's Portfolio</h1>
        <nav>
          <a href="/" className="active">ABOUT ME</a>
          <a href="/resume">RESUME</a>
          <a href="#projects">PROJECTS</a>
          <a href="/certifications">CERTIFICATION</a>
        </nav>
      </header>
      <main>
        <div className="profile-card">
          <img 
            src="/Hero.jpeg" 
            alt="DKVV Varma" 
            className="profile-image"
          />
          <h2>DKVV's Portfolio</h2>
          <div className="divider"></div>
          <p className="subtitle">UNDERGRADUATE STUDENT</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/dkvvvarma" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/dkvvvarma" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://x.com/dkvvvarma" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="content">
          <h1>
            I'm <span className="highlight">D.K.V.V VARMA</span><br/>
          </h1>

          <div className="buttons">

          <a href="/resume" target="_blank" rel="noopener Rnoreferrer">
          <button>RESUME</button>
          </a>

  
            <button>PROJECTS</button>
            <a href="https://blog.dkvv.live" target="_blank" rel="noopener noreferrer">
  <button>VISIT BLOG</button>
</a>
          <a href='/certifications'>    <button>CERTIFICATIONS</button> 
          </a>
          </div> 

          <p className="bio">
            I'm an undergraduate student at Gitam University,<br/>
            Visakhapatnam. This site is a platform for me to<br/>
            showcase my skills, projects, portfolio, blog,<br/>
            CV/resume, and contact details. It's an excellent<br/>
            place to explore and learn more about my journey.
          </p>



          <div className="badge-section">
            <img src="https://tryhackme-badges.s3.amazonaws.com/0xWAYNE.png" alt="Your Image Badge" />
          </div>

        </div>
      </main>
      <style jsx>{`
        .portfolio {
          background-color: #1a202c;
          color: white;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
        }
        h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        nav {
          display: flex;
          gap: 1.5rem;
        }
        nav a {
          color: white;
          text-decoration: none;
        }
        nav a.active {
          color: #ed8936;
        }
        main {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 3rem;
          padding: 3rem 2rem;
        }
        .profile-card {
          background-color: #2d3748;
          border-radius: 0.5rem;
          padding: 2rem;
          width: 20rem;
          text-align: center;
          position: relative;
          box-shadow: 0 0 15px rgba(237, 137, 54, 0.2);
        }
        .profile-image {
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          border: 4px solid #0bc5ea;
        }
        .divider {
          width: 3rem;
          height: 2px;
          background-color: #ed8936;
          margin: 1rem auto;
        }
        .subtitle {
          color: #a0aec0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }
        .social-icons {
          background-color: #ed8936;
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding: 0.75rem;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .social-icons a {
          color: white;
          font-size: 1.5rem; // Size of the icons
          transition: color 0.3s;
        }
        .social-icons a:hover {
          color: #dd6b20; // Change color on hover
        }
        .content {
          max-width: 40rem;
        }
        .content h2 {
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
        }
        .content h1 {
          font-size: 3.75rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
        .highlight {
          color: #ed8936;
        }
        .description {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        button {
          background-color: #ed8936;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #dd6b20;
        }
        .bio {
          color: #cbd5e0;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
