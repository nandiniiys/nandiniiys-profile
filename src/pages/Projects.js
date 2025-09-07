
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import allProjects from '../data/Projects.js';

const tags = ['All', 'Frontend', 'Backend', 'Data Analytics', 'AI/ML', 'Networking & Security'];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = selectedTag === 'All'
    ? allProjects
    : allProjects.filter(p => p.tags.includes(selectedTag));

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.tags}>
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => { setSelectedTag(tag); setPage(1); }}
            style={{
              ...styles.tagButton,
              backgroundColor: selectedTag === tag ? '#9e9eed' : '#e0e0f8',
              color: selectedTag === tag ? '#fff' : '#333'
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        style={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {paginated.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </motion.div>

      <div style={styles.pagination}>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1100px',
    margin: 'auto',
    padding: '2rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '2rem',
    justifyContent: 'center'
  },
  tagButton: {
    padding: '0.4rem 0.9rem',
    border: 'none',
    borderRadius: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    alignItems: 'stretch',
    marginBottom: '2rem',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  }
};
