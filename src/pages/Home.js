import React from 'react';

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <img
        src={`${process.env.PUBLIC_URL}/profile.png`}
        alt="Nandinii portrait"
        style={styles.image}
      />
      <div style={styles.bio}>
        <h1 style={styles.heading}>Hi, I'm Nandinii Yeleswarapu</h1>
        <p style={styles.paragraph}>
          I’m a software developer who enjoys building systems that are reliable, efficient, and a little smarter each time I revisit them.
        </p>
        <p style={styles.paragraph}>
          Before grad school, I worked in industry building scalable SaaS backends and cloud-native APIs. Now I’m pursuing my Master’s in Computer Science at Texas A&M University, where my research focuses on reinforcement learning and meta-learning for adaptive wireless networks.  
        </p>

        <p style={styles.paragraph}>
          My current toolkit spans Java, Scala, Python, and React, along with Docker, Git, and cloud platforms like Azure. I’m comfortable with these tools, but I’m always looking to learn something new and pick up better ways of building things. More than the stack itself, I care about writing code that’s easy to reason about and systems that can handle real-world stress without falling apart.
        </p>
        <p style={styles.paragraph}>
          When I’m not deep in code or research, I’m usually exploring new places, reading (currently in my pshycological thriller era), or working on small DIY projects like turning old packaging into lightweight shelves or holiday decor. Lately, I’ve been picking up the ukulele, and I’m finally starting to sound like I know a few songs!
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    padding: '3rem',
    flexWrap: 'wrap',
  },
  image: {
    maxWidth: '250px',
    height: 'auto',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '12px',
  },
  bio: {
    flex: '1 1 400px',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '2.2rem',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
};
