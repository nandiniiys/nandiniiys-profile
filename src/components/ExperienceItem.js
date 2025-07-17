import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceItem({ title, company, date, bullets, align }) {
  const isLeft = align === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        ...styles.container,
        flexDirection: isLeft ? 'row' : 'row-reverse',
      }}
    >
      {/* Dot aligned to center timeline */}
      <span style={styles.dot} />

      <div
        style={{
          ...styles.content,
          transform: isLeft ? 'translateX(-8%)' : 'translateX(8%)',
          textAlign: isLeft ? 'left' : 'right',
        }}
      >
        <div style={styles.box}>
          <div style={styles.header}>
            <h3 style={styles.company}>{company}</h3>
            <p style={styles.date}>{date}</p>
          </div>
          <h4 style={styles.title}>{title}</h4>
          <ul>
            {bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '3rem',
    position: 'relative',
  },
  content: {
    width: '50%',
    position: 'relative',
    padding: '1rem',
  },
  box: {
    backgroundColor: 'rgba(158, 158, 237, 0.1)',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'left',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  company: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  date: {
    fontStyle: 'italic',
    fontSize: '0.95rem',
    color: '#333',
  },
  title: {
    margin: '0.2rem 0 0.5rem',
    fontWeight: 500,
  },
  dot: {
    position: 'absolute',
    top: '16px',
    left: '50%',
    width: '14px',
    height: '14px',
    backgroundColor: '#9e9eed',
    borderRadius: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
  },
};
