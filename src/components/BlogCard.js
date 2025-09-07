import React, { useState } from "react";

export default function BlogCard({ blog, onOpen, styles }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Open blog "${blog.title}"`}
      onClick={() => onOpen(blog)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(blog)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...styles.card, ...(hovered ? styles.cardHover : {}) }}
    >
      <h3 style={styles.cardTitle}>{blog.title}</h3>
      <p style={styles.cardSub}>{blog.description}</p>

      <div style={styles.cardTagsRow}>
        {blog.tags.map((t) => (
          <span key={t} style={styles.tagChip}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
