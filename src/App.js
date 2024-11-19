import React from 'react';
import './App.css';
import profileLogo from '../src/profile.jpg'; // Replace with your logo image
import WhatsApp from '../src/whatsapp.png';
import Instagram from '../src/instagram.png';
import Facebook from '../src/facebook.png';
import LinkedIn from '../src/linkedin.png';
import XIcon from '../src/twitter.png';
import GlobeIcon from '../src/web.png';

function App() {
  return (
    <div className="App">
      <div className="profile-card">
        <div className="profile-container">
          <img src={profileLogo} alt="Nexura IT Solutions" className="profile-logo" />
        </div>
        <h3 className="profile-name">
          Your Digital Partner
        </h3>

        <p style={{color:"#fff", fontSize:"12px"}}>Connect with us</p>
        <div className="social-icons">
          <a href="https://wa.me/+971507072116" target="_blank" rel="noreferrer">
            <img src={WhatsApp} alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/nexura.ae/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/nexuraIT" target="_blank" rel="noreferrer">
            <img src={Facebook} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/nexura-it" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://x.com/nexuraIt" target="_blank" rel="noreferrer">
            <img src={XIcon} alt="X (formerly Twitter)" className="social-icon" />
          </a>
          <a href="https://nexura.ae" target="_blank" rel="noreferrer">
            <img src={GlobeIcon} alt="Website" className="social-icon" />
          </a>
        </div>

        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-grid">
          <a href="https://example.com/project1" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291089/Artboard_1_vh5kci.jpg" alt="Project 1" className="project-image" />
          </a>
          <a href="https://example.com/project2" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291089/Artboard_2_wknepd.jpg" alt="Project 2" className="project-image" />
          </a>
          <a href="https://example.com/project3" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291091/Artboard_3_l5gdv3.jpg" alt="Project 3" className="project-image" />
          </a>
          <a href="https://example.com/project4" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291091/Artboard_5_rulcoq.jpg" alt="Project 4" className="project-image" />
          </a>
          <a href="https://example.com/project5" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291180/mango_smoothie_SP_rhu9al.jpg" alt="Project 5" className="project-image" />
          </a>
          <a href="https://example.com/project6" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291180/addidas_social_ad_-02_up7y14.jpg" alt="Project 6" className="project-image" />
          </a>

          <a href="https://example.com/project1" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291089/Artboard_1_vh5kci.jpg" alt="Project 1" className="project-image" />
          </a>
          <a href="https://example.com/project2" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291089/Artboard_2_wknepd.jpg" alt="Project 2" className="project-image" />
          </a>
          <a href="https://example.com/project3" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291091/Artboard_3_l5gdv3.jpg" alt="Project 3" className="project-image" />
          </a>
          <a href="https://example.com/project4" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291091/Artboard_5_rulcoq.jpg" alt="Project 4" className="project-image" />
          </a>
          <a href="https://example.com/project5" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291180/mango_smoothie_SP_rhu9al.jpg" alt="Project 5" className="project-image" />
          </a>


          <a href="https://example.com/project1" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291089/Artboard_1_vh5kci.jpg" alt="Project 1" className="project-image" />
          </a>
          <a href="https://example.com/project2" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291089/Artboard_2_wknepd.jpg" alt="Project 2" className="project-image" />
          </a>
          <a href="https://example.com/project3" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291091/Artboard_3_l5gdv3.jpg" alt="Project 3" className="project-image" />
          </a>
          <a href="https://example.com/project4" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291091/Artboard_5_rulcoq.jpg" alt="Project 4" className="project-image" />
          </a>
          <a href="https://example.com/project5" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dqasmnsve/image/upload/v1728291180/mango_smoothie_SP_rhu9al.jpg" alt="Project 5" className="project-image" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
