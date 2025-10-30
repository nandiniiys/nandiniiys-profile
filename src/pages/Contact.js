import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={styles.heading}>Let's Connect</h2>
      <p style={styles.blurb}>
        Whether you’re looking to collaborate, have a role that aligns with my work, or just want to talk tech, I’d love to connect.
      </p>
      <div style={styles.links}>
        <a href="https://github.com/nandiniiys" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
        <a href="https://linkedin.com/in/nandiniiys" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
      </div>
    </motion.div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '3rem 1rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  blurb: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  link: {
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#111',
    backgroundColor: 'rgba(158, 158, 237, 0.2)',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    transition: 'background-color 0.2s ease',
  },
};
