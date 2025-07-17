import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Nandinii Yeleswarapu</p>
      <div style={styles.links}>
        <a style={styles.link} href="mailto:nandinii.y.s@gmail.com">Email</a>
        <a style={styles.link} href="https://github.com/nandiniiys" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a style={styles.link} href="https://linkedin.com/in/nandiniiys" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
        Site created with help from <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" style={styles.link}>ChatGPT</a> by OpenAI.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: 'rgba(204, 204, 255, 0.4)',
    color: '#000',
    marginTop: '4rem',
  },
  links: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    color: '#000'
  },
  link: {
    color: 'rgba(0, 0, 255, 0.67)',
    textDecoration: 'none',
    fontWeight: '500',
  }
};
