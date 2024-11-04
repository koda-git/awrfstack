// apps/web/src/components/HomePage

"use client";

import React, { useState } from 'react';

const HomePage = () => {
  // State to manage the button text
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', color: '#333' }}>Welcome to awrfstack</h1>
        <p style={{ fontSize: '1.2em', color: '#666' }}>
          Catch me later I'll buy you a beer.
        </p>
      </section>

      {/* Features Section */}
      <section>
        <h2 style={{ fontSize: '2em', color: '#333', marginBottom: '20px' }}>Features</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5em', color: '#0070f3' }}>Fast Performance</h3>
            <p style={{ fontSize: '1em', color: '#666' }}>Our application is optimized for speed and efficiency.</p>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5em', color: '#0070f3' }}>Responsive Design</h3>
            <p style={{ fontSize: '1em', color: '#666' }}>Works seamlessly on all device sizes.</p>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5em', color: '#0070f3' }}>User-Friendly Interface</h3>
            <p style={{ fontSize: '1em', color: '#666' }}>Easy to use with a clear and intuitive layout.</p>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5em', color: '#0070f3' }}>Secure and Reliable</h3>
            <p style={{ fontSize: '1em', color: '#666' }}>Built with security in mind to protect your data.</p>
          </div>
        </div>
      </section>

      {/* Interactive Button Section */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={handleClick}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            color: '#fff',
            backgroundColor: '#0070f3',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {clicked ? 'Thanks for Clicking!' : 'Click Me!'}
        </button>
      </section>
    </div>
  );
};

export default HomePage;
