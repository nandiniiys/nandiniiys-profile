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
          I'm a software developer with a passion for building scalable backend systems, working with AI-driven platforms,
          and architecting reliable APIs. Currently pursuing my Master’s in Computer Science at Texas A&M University,
          I’ve contributed to enterprise SaaS products, academic research in machine learning, software verification, and 3D visualization tools.
        </p>
        <p style={styles.paragraph}>
          My toolbelt includes Java, Scala, React, Docker, and cloud platforms like Azure. I care about clean code,
          functional design, and impactful engineering.
        </p>
        <p style={styles.paragraph}>
          Outside of tech, you’ll usually find me traveling, getting lost in a good book, experimenting with DIY projects, or practicing my (still beginner!) ukulele skills.
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
