import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {})
          })}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
  },
  link: {
    padding: '0.5rem 1.25rem',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'none',
    color: '#111',
    backgroundColor: 'rgba(158, 158, 237, 0.3)',
    borderRadius: '8px',
    transition: 'all 0.2s ease-in-out',
  },
  activeLink: {
    backgroundColor: 'rgba(122, 122, 215, 0.6)',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  },
};
