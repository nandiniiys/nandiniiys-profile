import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

export default function Experience() {
  const experiences = [
  { 
    company: "Paytronix Systems, Inc.",
    title: "Software Engineering Intern",
    date: "May–Dec 2025",
    bullets: [
      "Built a self-service SMS configuration backend (Scala + REST) that reduced repeat support tickets by about 7% and gave internal teams more autonomy.",
      "Designed scoped transaction APIs so front-end teams could move faster without backend blockers.",
      "Collaborated with product and support teams to set clear guardrails and documentation: fewer surprises in production, smoother launches."
    ]
    },
    {
      company: "Paytronix Systems, Inc.",
      title: "Software Engineer",
      date: "Jul 2021–Jul 2024",
      bullets: [
        "Helped keep a multi-tenant SaaS platform serving 1,800+ clients steady at ~99% uptime as a primary on-call engineer.",
        "Developed a Scala backend for an AI assistant that handled common client requests and eased support load by about 20%.",
        "Automated KPI dashboards with Python, Snowflake, and Looker to enable automated reporting with real-time insights.",
        "Implemented proactive threat mitigation and DDoS/bot filtering to keep client apps secure and stable."
      ]
    },
    {
      company: "HourWork",
      title: "Research Assistant",
      date: "Sep 2020–Dec 2020",
      bullets: [
        "Prototyped an NLP chatbot (Rasa + Dialogflow) to streamline client communication and route common requests automatically."
      ]
    },
    {
      company: "UMass Boston",
      title: "Undergraduate SI Leader — Data Structures & Algorithms",
      date: "Sep 2019–Dec 2019",
      bullets: [
        "Led weekly peer-learning sessions that made algorithmic thinking and pointer logic a little less scary.",
        "Provided one-on-one debugging and study support maintaining 100% participation retention and noticeable grade improvement across sessions."
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

