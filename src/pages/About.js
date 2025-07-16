import React from 'react';

export default function About() {
  return (
    <div className="about-page" style={{ maxWidth: '800px', margin: 'auto' }}>
      <h2>About Me</h2>
      <p>
        I'm Nandinii Yeleswarapu — a backend software developer with industry experience
        in building scalable RESTful APIs, distributed systems, and cloud-native applications.
        I hold a Bachelor’s degree from UMass Boston and am currently pursuing my Master’s in
        Computer Science at Texas A&M University.
      </p>
      <p>
        I’ve worked professionally with Java, Scala, Docker, Jenkins, and cloud services like Azure.
        My work spans SaaS systems, threat mitigation, payment integration, and AI-backed pipelines.
        I also enjoy research, having contributed to kernel verification and machine psychology projects.
      </p>
      <p>
        Outside of coding, I’m passionate about UI/UX in 3D visualizations and enjoy simplifying complex
        ideas through visual storytelling and clean design.
      </p>
    </div>
  );
}
