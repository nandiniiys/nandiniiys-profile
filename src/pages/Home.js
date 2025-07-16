import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem' }}>Hi, I'm Nandinii Yeleswarapu</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Software Developer | AI Researcher | Cloud Enthusiast
      </p>
      <img
        src="/profile.png"
        alt="Nandinii portrait"
        style={{
          marginTop: '1.5rem',
          maxWidth: '180px',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)'
        }}
      />
    </div>
  );
}
