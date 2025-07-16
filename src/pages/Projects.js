import React from 'react';

export default function Projects() {
  return (
    <div style={{ maxWidth: '900px', margin: 'auto' }}>
      <h2>Projects</h2>

      <div>
        <h3>Reliable Data Transfer over UDP</h3>
        <p>
          Simulated TCP over UDP sockets using C/C++ and Winsock libraries.
          Implemented flow control and ARQ strategies for reliable transmission.
        </p>
      </div>

      <div>
        <h3>AI Assistant @ Paytronix</h3>
        <p>
          Backend for AI-powered assistant using Scala + ZIO, connected to a React frontend via REST APIs.
          Focused on distributed architecture, service orchestration, and cloud-native deployment.
        </p>
      </div>

      <div>
        <h3>KPI Dashboards</h3>
        <p>
          Automated log parsing from DataDog to Snowflake, visualized via Looker dashboards.
          Enhanced data visibility for sprint retrospectives and quarterly performance reviews.
        </p>
      </div>

      <div>
        <h3>3D Interactive Building (Machine Psychology Research)</h3>
        <p>
          Built an interactive 3D viewer of UMass Boston's McCormack Building using JavaScript + Xeokit SDK and Autodesk Revit.
          <br />
          <a href="https://nandiniiys.github.io/LiteMckViewable/index.html" target="_blank" rel="noopener noreferrer">
            View Live Demo →
          </a>
        </p>
      </div>
    </div>
  );
}
