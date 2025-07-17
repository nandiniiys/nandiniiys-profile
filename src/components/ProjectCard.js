
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, association, description, link, tags }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 200 }}
      style={styles.card}
    >
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.desc}>{association}</p>
      <p style={styles.desc}>{description}</p>
      <div style={styles.tags}>
        {tags.map((tag, i) => (
          <span key={i} style={styles.tag}>{tag}</span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          View Project →
        </a>
      )}
    </motion.div>
  );
}

const styles = {
  card: {
    backgroundColor: 'rgba(158, 158, 237, 0.15)',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  title: {
    margin: 0,
    fontSize: '1.3rem',
    fontWeight: 600,
  },
  desc: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  tag: {
    backgroundColor: '#9e9eed',
    padding: '0.3rem 0.7rem',
    borderRadius: '1rem',
    fontSize: '0.8rem',
    color: '#fff'
  },
  link: {
    textDecoration: 'none',
    color: '#444',
    fontWeight: 'bold',
    marginTop: 'auto',
    alignSelf: 'flex-start',
  },
};
