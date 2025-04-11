import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ResultPage.css';

function ResultPage({ result }) {
  const navigate = useNavigate(); 

  return (
    <div className="result-page">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        style={{
          margin: '20px',
          padding: '8px 16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>

      <h1 className="title">FactCheck Result</h1>

      <div className="top-loader-container">
        <svg viewBox="0 0 200 100" className="semi-circle">
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="red" />
              <stop offset="33%" stopColor="yellow" />
              <stop offset="66%" stopColor="lightgreen" />
              <stop offset="100%" stopColor="green" />
            </linearGradient>
          </defs>
          <path
            d="M10,100 A90,90 0 0,1 190,100"
            stroke="url(#loaderGradient)"
            strokeWidth="15"
            fill="none"
          />
        </svg>
      </div>

      <div className="result-summary">
        <h2 className="verdict">{result || 'No result available'}</h2>
        <p className="score">70/100</p>
      </div>

      <div className="claim-box">
        <strong>Claim:</strong> Over 150 persons have died from meningitis in Nigeria.
      </div>

      <div className="finding-box">
        <strong>What we found:</strong> Trusted sources like AP News and Nigeria CDC have confirmed the outbreak. It is serious and has spread over many states.
      </div>

      <div className="sources-box">
        <strong>Sources:</strong>
        <ul>
          <li>Associated Press (April 2025)</li>
          <li>NCDC official Twitter (April 2025)</li>
        </ul>
      </div>

      <button className="check-more-btn">Check More</button>

      <div className="feedback-section">
        <h3>Was this verification helpful?</h3>
        <div className="feedback-options">
          <button>
            <div className="emoji">😊</div>
            <div className="label">Good</div>
          </button>
          <button>
            <div className="emoji">😐</div>
            <div className="label">Bad</div>
          </button>
          <button>
            <div className="emoji">😕</div>
            <div className="label">Confusing</div>
          </button>
          <button>
            <div className="emoji">🌟</div>
            <div className="label">Excellent</div>
          </button>
        </div>

        <div className="thought-box">
          <textarea placeholder="Share your thought..." rows="3"></textarea>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
