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

export default allProjects;