import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Nandinii Yeleswarapu</p>
      <div style={styles.links}>
        <a href="mailto:nandinii.y.s@gmail.com">Email</a>
        <a href="https://github.com/nandiniiys" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/nandiniiys" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#111',
    color: '#f5f5f5',
    marginTop: '4rem',
  },
  links: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  }
};
