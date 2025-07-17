import React from 'react';
import { motion } from 'framer-motion';

export default function Research() {
  const researchItems = [
    {
      title: 'Resource Allocation in Wireless Networks',
      association: 'Texas A&M University',
      advisor: 'Dr. I-Hong Hou (2025-present)',
      description: 'Extended an existing deep reinforcement learning framework for optimizing information freshness in wireless networks modeled as Restless Multi-Armed Bandit (RMAB) problems. Integrated Weights & Biases for experiment tracking, Draccus for configuration management, and model checkpointing to enable robust, reproducible training. Currently enhancing the DeepTOP policy to improve learning efficiency in dynamic environments with Age of Information (AoI) constraints.',
      projectLink: 'https://github.com/nandiniiys/DeepTOP4Wireless'
    },
    {
      title: 'Machine Psychology Lab – Interactive 3D Visualization',
      labLink: 'https://mpsych.org',
      association: 'University of Massachusetts Boston',
      advisor: 'Dr. Daniel Haehn  (2019-2021)',
      description: 'Evaluated deep learning models for 3D visualization, converting 2D blueprints to 3D models, and developed a web-based interactive 3D model of a UMass Boston campus building using Autodesk Revit and JavaScript Xeokit SDK to automate rendering and enhance user engagement.',
      projectLink: 'https://nandiniiys.github.io/LiteMckViewable/index.html',
    },
    {
      title: 'Software Verification Lab',
      labLink: 'https://cogumbreiro.github.io',
      association: 'University of Massachusetts Boston',
      advisor: 'Dr. Tiago Cogumbreiro (2020)',
      description: 'Contributed to Faial, a novel tool for localizing bugs in kernels caused by race conditions and over-synchronization, and designed C programs to generate CUDA kernels for benchmarking performance against related tools.',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Research</h2>
      {researchItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={styles.banner}
        >
          {item.labLink ? (
            <h3 style={styles.title}>
              <a href={item.labLink} target="_blank" rel="noopener noreferrer" style={styles.titleLink}>
                {item.title}
              </a>
            </h3>
          ) : (
            <h3 style={styles.title}>{item.title}</h3>
          )}
          <h3 style={styles.desc}>{item.association} under {item.advisor}</h3>
          <p style={styles.desc}>{item.description}</p>
          {item.projectLink && (
            <a
              href={item.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              View Project →
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '3rem 1rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  banner: {
    backgroundColor: 'rgba(158, 158, 237, 0.12)',
    padding: '2rem',
    borderRadius: '12px',
    marginBottom: '2rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  desc: {
    fontSize: '1.05rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  link: {
    color: '#444',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};
