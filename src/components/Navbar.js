import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/experience" style={styles.link}>Experience</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/research" style={styles.link}>Research</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    padding: '0.5rem 1rem',
    backgroundColor: '#111',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
  }
};
