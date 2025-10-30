const allProjects = [
  {
    title: 'Reliable Data Transfer over UDP',
    association: 'Texas A&M University',
    description:
      "I built a custom transport protocol on top of UDP that behaves a lot like TCP. It handles flow control, congestion avoidance, and retransmissions using ARQ. Everything was written in C/C++ with Winsock and tested under packet loss, high latency, and buffer overflow scenarios to see how far I could push reliability.",
    tags: ['Networking', 'Systems', 'Security']
  },
  {
    title: 'Cloud-Native AI Assistant Backend',
    association: 'Paytronix Systems, Inc.',
    description:
      "I designed and built a distributed backend in Scala using the ZIO framework for an AI assistant that helps answer customer questions in real time. It exposes REST APIs, manages configurations through a config-as-a-service layer, and uses a NoSQL database for quick lookups. All of it runs in a scalable cloud setup.",
    tags: ['Backend', 'Cloud / Infra', 'AI & Automation']
  },
  {
    title: 'KPI Dashboards for Engineering Visibility',
    association: 'Paytronix Systems, Inc.',
    description:
      "I wrote Python scripts that pulled logs and metrics from DataDog every night, pushed them into Snowflake, and powered Looker dashboards that made it easy to see API usage patterns, latency spikes, and error trends. It started as a side project to make retrospectives faster and ended up becoming part of the weekly reports.",
    tags: ['Data Analytics', 'Backend', 'Cloud / Infra']
  },
  { 
    title: 'Threat Detection and Mitigation',
    association: 'Paytronix Systems, Inc.',
    description:
      "I worked on improving the security layer for guest-facing web traffic by catching and blocking malicious requests before they hit production. I used patterns in headers, geolocation data, and URL signatures to flag bot traffic, DDoS attempts, and spoofed agents. It was a fun mix of debugging, pattern hunting, and prevention.",
    tags: ['Security', 'Networking']
  },
  {
    title: 'Win32.LuckyCat Malware Analysis',
    association: 'Texas A&M University',
    description:
      "I reverse-engineered the Win32.LuckyCat malware sample using Ghidra and Wireshark to understand how it hides, persists, and talks to its command-and-control servers. It disguises traffic as normal POP3 and DNS requests, edits the registry to stay alive, and even checks for debuggers. I wrapped up the analysis with a short mitigation plan.",
    tags: ['Security', 'Reverse Engineering']
  },
  {
    title: 'Patient Management Pipeline',
    association: 'Dr. Lakshmi Health Clinic, Kenya',
    description:
      "I built a small patient tracking system for a community clinic using Google Forms, Sheets, and Apps Script. Each form entry linked back to an editable record so doctors could update visits in the same form. The sheet also had a quick search popup that jumped straight to the right record. It cut down manual lookups by around 60% every week.",
    tags: ['Automation', 'AI & Automation', 'Frontend']
  }
];

export default allProjects;
