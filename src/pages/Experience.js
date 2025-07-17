import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

export default function Experience() {
  const experiences = [
    { 
      company: 'Paytronix Systems, Inc.', 
      title: 'Software Engineer Intern', 
      date: 'May 2025-Present', 
      bullets: [
        'Did something cool', 
        'More cool stuff', 
        'Final achievement'
      ]
    },
    {
      company: 'Paytronix Systems, Inc.',
      title: 'Backend Software Developer',
      date: '2021–2024',
      bullets: [
        'Built RESTful APIs in Java/Scala with Docker, Maven, Jenkins',
        'Served as primary on-call engineer, triaged incidents, and contributed to maintaining system uptime.', 
        'Integrated Apple Pay, implemented threat detection and mitigation and, implemented KPI dashboards.'
      ]
    },
    {
      company: 'HourWork',
      title: 'Research Assistant',
      date: 'Sep 2020 – Dec 2020',
      bullets: [
        'Built an NLP-based chatbot pipeline using RASA and Google Dialogflow for company–client communications.',
        'Streamlined automation of common support tasks, improving response efficiency and reducing manual workload.'
      ]
    },
    {
      company: 'UMass Boston',
      title: 'Undergraduate SI Leader – Data Structures & Algorithms',
      date: 'Sep 2019 – Dec 2019',
      bullets: [
        'Facilitated weekly peer-led instruction sessions for 5+ students to reinforce core data structure and algorithm concepts.',
        'Provided debugging support and problem-solving guidance, resulting in 100% participation retention.',
        'Helped improve student performance by at least one letter grade on average.'
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Experience</h2>
      <div style={styles.timeline}>
        <div style={styles.timelineLine} />
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} align={idx % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '2rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  timeline: {
    position: 'relative',
    padding: '2rem 0',
  },
  timelineLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '2px',
    backgroundColor: '#aaa',
    transform: 'translateX(-50%)',
    zIndex: 0,
  },
};

