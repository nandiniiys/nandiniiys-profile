
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const allProjects = [
  {
    title: 'Reliable Data Transfer over UDP',
    association: 'Texas A&M University',
    description: 'Implemented a custom reliable transport protocol over UDP in C/C++, mimicking core TCP features such as flow control, congestion avoidance, and ARQ (Automatic Repeat Request). Built using Winsock on Windows, with testing scenarios for high-latency, packet-loss, and buffer overflow edge cases.',
    tags: ['C/C++', 'Networking & Security']
  },
  {
    title: 'Cloud-Native AI Assistant Backend',
    association: 'Paytronix Systems, Inc.',
    description: 'Built a distributed Scala backend using the ZIO framework to power an AI assistant that integrates with customer-facing applications. Designed RESTful APIs for real-time responses, managed dynamic settings via configuration-as-a-service, integrated a cloud-native NoSQL database for efficient storage and deployed cloud-native services for scalability and observability.',
    tags: ['Scala', 'REST APIs', 'Azure Cloud Services', 'Backend']
  },
  {
    title: 'KPI Dashboards for Engineering Visibility',
    association: 'Paytronix Systems, Inc.',
    description: 'Automated nightly ingestion and analysis of system traffic logs using Python scripts that parsed DataDog metrics and ingested structured data into Snowflake. Designed Looker dashboards to visualize API usage patterns, system latency, and error trends for retrospectives and executive reporting.',
    tags: ['Python', 'Snowflake', 'Looker', 'Data Analytics']
  },
  { 
    title: 'Threat Detection & Mitigation',
    association: 'Paytronix Systems, Inc.',
    description: 'Implemented a security layer for guest-facing web and API traffic. Identified and mitigated threats such as malicious bot traffic, DDoS attacks, and spoofed user agents by analyzing request headers, geolocation patterns, and URL injection attempts.',
    tags: ['JavaScript', 'Networking & Security']
  },
  {
    title: 'Apple Pay Integration',
    association: 'Paytronix Systems, Inc.',
    description: 'Integrated Apple Pay into the company’s guest-facing web app by extending existing Java and Scala-based payment APIs. Designed a secure flow for tokenized payment processing. Automated merchant onboarding, reducing manual work and deployment delays.',
    tags: ['Java', 'Scala', 'REST APIs', 'Backend', 'Frontend']
  },
  {
    title: 'Personal Portfolio Website',
    association: 'Self',
    description: 'Designed and developed a personal website from scratch using React and framer-motion, featuring custom routing, responsive layout, project filtering, timeline-based experience visualization, and GitHub Pages deployment.',
    tags: ['React', 'JavaScript', 'UI/UX', 'Frontend']
  },

];

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
