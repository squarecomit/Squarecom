import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import profileLogo from './logo.png'; // Replace with your profile image
import Phone from './call.png';
import WhatsApp from './whatsapp.png';
import Email from './email.png';
import Web from './web.png';
import Background from './bg.jpg';
import Instagram from './instagram.png';
import Company1 from './joy.png'; // Replace with your company logos
import Company2 from './advance.png';
import Company3 from './joy.png';
import Add from './add.png';
import Bb from './CLIENT//bullandbearz.png'
import Dr from './CLIENT/alrowaad.png'
import Masca from './CLIENT/masca.jpg'
import Wp from './CLIENT/wpmoda.png'
import Shopcin from './CLIENT/shopcin.png'
import Tasees from './CLIENT/tasees.png'
import Joy from './CLIENT/jr.png'
// import Ts from './CLIENT/tsp.png'
import BgImage from './bgimg.jpg'


const App = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);


  const callPopupRef = useRef(null);
  const whatsappPopupRef = useRef(null);


  const toggleContactOptions = () => {
    setShowContactOptions(!showContactOptions);
    if (!showContactOptions) {
      setShowWhatsAppPopup(false); // Close WhatsApp popup when Contact Options is opened
    }
  };

  const toggleWhatsAppPopup = () => {
    setShowWhatsAppPopup(!showWhatsAppPopup);
    if (!showWhatsAppPopup) {
      setShowContactOptions(false); // Close Contact Options when WhatsApp popup is opened
    }
  };

  const toggleCallPopup = () => {
    setShowCallPopup(!showCallPopup);
    if (!showCallPopup) {
      setShowContactOptions(false); // Close Contact Options when WhatsApp popup is opened
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        callPopupRef.current &&
        !callPopupRef.current.contains(event.target) &&
        showCallPopup
      ) {
        setShowCallPopup(false);
      }
      if (
        whatsappPopupRef.current &&
        !whatsappPopupRef.current.contains(event.target) &&
        showWhatsAppPopup
      ) {
        setShowWhatsAppPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCallPopup, showWhatsAppPopup]);


  return (
    <div className="App">
      <div className="profile-card" style={{ background: '#000' }}>
        {/* vCard Download Icon (inside the card) */}
        <div className="vcard-download">
          <img
            src={Add}
            alt="Save Contact"
            className="download-icon"
            onClick={toggleContactOptions}
            title="Save Contact"
          />
          {showContactOptions && (
            <div className="contact-options">
              <a href="/sulthan.vcf" download="sulthan AL Shehhi.vcf">
                Sulthan Alehshhi (CEO)
              </a>
              <a href="/rohith.vcf" download="Rohith.vcf">
               Rohith Sagar M (IT Manager)
              </a>
            </div>
          )}
        </div>

        {/* Background Section */}
        <div
          className="card-background"
          style={{
            backgroundImage: `url(${BgImage})`,
          }}
        >
          <div className="profile-image-container">
            <img src={profileLogo} alt="Profile" className="profile-image" />
          </div>
        </div>

        {/* Profile Information */}
        <div className="profile-info">
          <h1 className="profile-name" style={{ color: '#fff' }}>
            SquareCom IT Solution
          </h1>
          <h2 className="profile-title" style={{ color: 'grey' }}>Your Digital Partner          </h2>
          <br />

          {/* Social Links */}
          <div className="social-links">
            {/* <a href="tel:+971581276647" target="_blank" rel="noopener noreferrer">
              <img src={Phone} alt="Call" className="social-icon" />
            </a> */}


            <div onClick={toggleCallPopup} style={{ cursor: 'pointer' }}>
              <img src={Phone} alt="WhatsApp" className="social-icon" />
            </div>

            <div onClick={toggleWhatsAppPopup} style={{ cursor: 'pointer' }}>
              <img src={WhatsApp} alt="WhatsApp" className="social-icon" />
            </div>
            <a href="mailto:info@squarecom.ae" target="_blank" rel="noopener noreferrer">
              <img src={Email} alt="Email" className="social-icon" />
            </a>
            <a href="https://squarecom.ae" target="_blank" rel="noopener noreferrer">
              <img src={Web} alt="Web" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/squarecom.ae/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>


        {showWhatsAppPopup && (
  <div className="whatsapp-popup">
    <div className="popup-header">
      <h3>Contact via WhatsApp</h3>
      <button onClick={toggleWhatsAppPopup} className="close-button">
        &times;
      </button>
    </div>
    <div className="popup-content">
      <a href="https://wa.me/971552949444" target="_blank" rel="noopener noreferrer">
        <img src={WhatsApp} alt="WhatsApp" />
        Sulthan Alehshhi (CEO)
      </a>
      <a href="https://wa.me/971507072116" target="_blank" rel="noopener noreferrer">
        <img src={WhatsApp} alt="WhatsApp" />
        Rohith Sagar M (IT Manager)
      </a>
    </div>
  </div>
)}




{showCallPopup && (
  <div className="whatsapp-popup">
    <div className="popup-header">
    <h3>Get in Touch Over a Call</h3>
    <button onClick={toggleCallPopup} className="close-button">
        &times;
      </button>
    </div>
    <div className="popup-content">
      <a href="tel:+971552949444">
        <img src={Phone} alt="Call Sulthan" />
        Sulthan Alehshhi (CEO)
      </a>
      <a href="tel:+971507072116">
        <img src={Phone} alt="Call Rohith" />
        Rohith Sagar M (IT Manager)
      </a>
    </div>
  </div>
)}



        {/* Companies Section */}
        <div className="company-logos" style={{ paddingBottom: '10px' }}>
          <h4 className="company-logos-title" style={{ color: 'lightgrey' }}>
            Our Ventures
          </h4>
          <div className="company-logos-list">
            <a href="https://bullandbearz.com/" target="_blank" rel="noopener noreferrer">
              <img src={Bb} alt="Company 1" className="company-logo" />
            </a>
            <a href="https://masca.ae/" target="_blank" rel="noopener noreferrer">
              <img src={Masca} alt="Company 2" className="company-logo" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Dr} alt="Company 2" className="company-logo" />
            </a>
            <a href="https://shopcin.com/" target="_blank" rel="noopener noreferrer">
              <img src={Shopcin} alt="Company 2" className="company-logo" />
            </a>
            <a href="https://taseesrealestate.ae/" target="_blank" rel="noopener noreferrer">
              <img src={Tasees} alt="Company 2" className="company-logo" />
            </a>
            <a href="https://joyrefinery.ae/" target="_blank" rel="noopener noreferrer">
              <img src={Joy} alt="Company 2" className="company-logo" />
            </a>
            <a href="https://wpmoda.com/" target="_blank" rel="noopener noreferrer">
              <img src={Wp} alt="Company 2" className="company-logo" />
            </a>
          </div>
        </div>
        <div className="powered-by">
          Powered by
          <a
            href="https://squarecom.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="powered-by-link"
          >
            Squarecom IT Solution
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
