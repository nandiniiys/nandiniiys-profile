import React, { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard";
import blogs from "../data/Blogs.js";

function uniqTags(items) {
  const set = new Set();
  items.forEach((b) => b.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function Blogs() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(new Set());

  const allTags = useMemo(() => uniqTags(blogs), []);
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return blogs
      .filter((b) => {
        const qMatch =
          !normalizedQuery || b.title.toLowerCase().includes(normalizedQuery);
        const tagMatch =
          selected.size === 0 || b.tags.some((t) => selected.has(t));
        return qMatch && tagMatch;
      })
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }, [normalizedQuery, selected]);

  const toggleTag = (tag) => {
    const next = new Set(selected);
    if (next.has(tag)) next.delete(tag);
    else next.add(tag);
    setSelected(next);
  };

  const clearFilters = () => {
    setQuery("");
    setSelected(new Set());
  };

  const openPdf = (blog) => {
    const url = `${process.env.PUBLIC_URL}${blog.pdf}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Blogs</h2>

      <div style={styles.controlsRow}>
        <input
          type="search"
          placeholder="Search by title…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search blogs by title"
          style={styles.search}
        />

        {/* All pill */}
        <button
          type="button"
          onClick={() => setSelected(new Set())}
          aria-pressed={selected.size === 0}
          style={{
            ...styles.pill,
            ...(selected.size === 0 ? styles.pillActive : {}),
          }}
        >
          All
        </button>

        {/* Tag pills */}
        {allTags.map((t) => {
          const active = selected.has(t);
          return (
            <button
              key={t}
              type="button"
              onClick={() => toggleTag(t)}
              aria-pressed={active}
              style={{ ...styles.pill, ...(active ? styles.pillActive : {}) }}
            >
              {t}
            </button>
          );
        })}

        {(query || selected.size > 0) && (
          <button
            type="button"
            onClick={clearFilters}
            aria-label="Clear search and tag filters"
            style={{ ...styles.pill, ...styles.clearPill }}
          >
            Clear
          </button>
        )}
      </div>

      <div style={styles.grid}>
        {filtered.length === 0 ? (
          <p style={styles.empty}>No blogs match your search/filters.</p>
        ) : (
          filtered.map((b) => (
            <BlogCard key={b.id} blog={b} onOpen={openPdf} styles={styles} />
          ))
        )}
      </div>
    </section>
  );
}

const styles = {
  // page
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1.25rem",
  },
  heading: {
    fontSize: "2.25rem",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: "1.25rem",
  },

  // controls (search + pills)
  controlsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  search: {
    flex: "1 1 320px",
    maxWidth: "520px",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: "999px",
    outline: "none",
    background: "rgba(255,255,255,0.9)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
  },
  pill: {
    padding: "0.5rem 0.9rem",
    borderRadius: "999px",
    border: "1px solid rgba(79,70,229,0.12)",
    background: "rgba(99,102,241,0.12)",
    color: "#3f3cbb",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    userSelect: "none",
    transition: "transform 120ms ease, box-shadow 120ms ease, opacity 120ms",
  },
  pillActive: {
    background: "rgba(99,102,241,0.25)",
    borderColor: "rgba(79,70,229,0.35)",
  },
  clearPill: {
    borderStyle: "dashed",
    background: "transparent",
    color: "#4b5563",
  },

  // grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "1.25rem",
  },

  // card
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRadius: "20px",
    border: "1px solid rgba(0,0,0,0.06)",
    background: "rgba(255,255,255,0.85)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
    padding: "1.25rem",
    cursor: "pointer",
    transition: "transform 140ms ease, box-shadow 140ms ease",
  },
  cardHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.10)",
  },
  cardTitle: {
    fontSize: "1.35rem",
    fontWeight: 800,
    margin: "0 0 0.35rem 0",
  },
  cardSub: {
    fontSize: "0.95rem",
    color: "#374151",
    lineHeight: 1.5,
    marginBottom: "0.9rem",
  },
  cardTagsRow: {
    marginTop: "auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  tagChip: {
    display: "inline-block",
    padding: "0.35rem 0.65rem",
    borderRadius: "999px",
    fontSize: "0.8rem",
    background: "rgba(99,102,241,0.15)",
    color: "#4338ca",
    border: "1px solid rgba(79,70,229,0.18)",
    fontWeight: 600,
  },

  // empty state
  empty: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#4b5563",
    padding: "2rem 0",
    fontSize: "1rem",
  },
};
