import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/research">Research</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
