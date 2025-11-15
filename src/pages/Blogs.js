import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import blogs from "../data/Blogs.js";

function uniqTags(items) {
  const set = new Set();
  items.forEach((b) => b.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function Blogs() {
  const [selected, setSelected] = useState(null); // single-select

  const navigate = useNavigate();
  const allTags = useMemo(() => uniqTags(blogs), []);
  const filtered = useMemo(() => {
    return blogs
      .filter((b) => !selected || b.tags.includes(selected));
  }, [selected]);

  const openBlogPost = (blog) => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Blogs</h2>

      <div style={styles.pillsBar} role="tablist" aria-label="Filter by tag">
        <button
          type="button"
          onClick={() => setSelected(null)}
          aria-pressed={selected === null}
          style={{ ...styles.pill, ...(selected === null ? styles.pillActive : {}) }}
        >
          All
        </button>
        {allTags.map((t) => {
          const active = selected === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setSelected(active ? null : t)}
              aria-pressed={active}
              style={{ ...styles.pill, ...(active ? styles.pillActive : {}) }}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div style={styles.grid}>
        {filtered.length === 0 ? (
          <p style={styles.empty}>No posts yet for this filter.</p>
        ) : (
          filtered.map((b) => (
            <motion.div
              key={b.title}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={styles.card}
              onClick={() => openBlogPost(b)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openBlogPost(b)}
            >
              <h3 style={styles.title}>{b.title}</h3>
              <p style={styles.desc}>{b.description}</p>

              <div style={styles.tags}>
                {b.tags.map((tag, i) => (
                  <span key={i} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <span style={styles.link}>Read Post →</span>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}

const styles = {
  // page
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "2rem 1.25rem",
  },
  heading: {
    fontSize: "2.125rem",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: "1.25rem",
  },

  // pills
  pillsBar: {
    display: "flex",
    flexWrap: "nowrap",
    gap: "0.6rem",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    overflowX: "auto",
    paddingBottom: "0.25rem",
    scrollbarWidth: "none",
  },
  pill: {
    padding: "0.5rem 0.9rem",
    borderRadius: "999px",
    border: "1px solid rgba(99,102,241,0.18)",
    background: "rgba(99,102,241,0.10)",
    color: "#3f3cbb",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    userSelect: "none",
    transition: "box-shadow 120ms ease, opacity 120ms",
    whiteSpace: "nowrap",
  },
  pillActive: {
    background: "rgba(99,102,241,0.20)",
    borderColor: "rgba(79,70,229,0.35)",
    boxShadow: "0 0 0 2px rgba(99,102,241,0.15) inset",
  },

  // grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "1rem",
  },

  // card  (mirrors ProjectCard)
  card: {
    backgroundColor: "rgba(158, 158, 237, 0.15)",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    cursor: "pointer",
  },
  title: {
    margin: 0,
    fontSize: "1.3rem",
    fontWeight: 600,
  },
  desc: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "auto",
  },
  tag: {
    backgroundColor: "#9e9eed",
    padding: "0.3rem 0.7rem",
    borderRadius: "1rem",
    fontSize: "0.8rem",
    color: "#fff",
    fontWeight: 600,
  },
  link: {
    textDecoration: "none",
    color: "#444",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  // empty
  empty: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#4b5563",
    padding: "2rem 0",
    fontSize: "1rem",
  },
};

