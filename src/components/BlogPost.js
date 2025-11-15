import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogs from "../data/Blogs.js";
import "./blog-post.css";

export default function BlogPost() {
  const { blogId } = useParams();
  const [markdown, setMarkdown] = useState("");
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Find the blog metadata (title, tags) from our data file
    const currentBlog = blogs.find((b) => b.id === blogId);

    if (!currentBlog) {
      setError(true);
      setLoading(false);
      return;
    }
    
    setBlog(currentBlog);

    // Now, fetch the markdown file from the /public folder
    // Ensure you have a folder named `public/blog-posts/`
    const markdownUrl = `${process.env.PUBLIC_URL}/blog-posts/${blogId}.md`;

    fetch(markdownUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Markdown file not found");
        }
        return response.text();
      })
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [blogId]);

  if (loading) {
    return <div style={styles.container}>Loading post...</div>;
  }

  if (error || !blog) {
    return (
      <div style={styles.container}>
        <h2>Post not found</h2>
        <p>Sorry, we couldn't find that blog post.</p>
        <Link to="/blogs" style={styles.backLink}>&larr; Back to all blogs</Link>
      </div>
    );
  }

  return (
    <section style={styles.container}>
      <Link to="/blogs" style={styles.backLink}>
        &larr; Back to all blogs
      </Link>

      <header style={styles.header}>
        <h2 style={styles.title}>{blog.title}</h2>
        <p style={{ fontWeight: "bold" }}>By Nandinii.Y.S</p>
        <div style={styles.pillsBar}>
          {blog.tags.map((t) => (
            <span key={t} style={{...styles.pill, ...styles.pillActive}}>
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* This div will have its styles applied by blog-post.css */}
      <div className="blog-post-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
}

// We'll reuse many of the styles from Blogs.js for consistency
const styles = {
  container: {
    maxWidth: "800px", // A bit narrower for better reading
    margin: "0 auto",
    padding: "2rem 1.25rem",
  },
  header: {
    borderBottom: "1px solid #eee",
    marginBottom: "2rem",
    paddingBottom: "1.5rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    textAlign: "left",
    marginBottom: "1.25rem",
    lineHeight: 1.2,
  },
  backLink: {
    display: "inline-block",
    marginBottom: "1.5rem",
    fontWeight: 600,
    color: "#3f3cbb",
    textDecoration: "none",
  },
  // Copied from Blogs.js for the tags
  pillsBar: {
    display: "flex",
    flexWrap: "wrap", // Changed to wrap
    gap: "0.6rem",
    alignItems: "center",
    justifyContent: "flex-start", // Changed
  },
  pill: {
    padding: "0.5rem 0.9rem",
    borderRadius: "999px",
    border: "1px solid rgba(99,102,241,0.18)",
    background: "rgba(99,102,241,0.10)",
    color: "#3f3cbb",
    fontSize: "0.9rem",
    fontWeight: 600,
    userSelect: "none",
    whiteSpace: "nowrap",
  },
  pillActive: {
    background: "rgba(99,102,241,0.20)",
    borderColor: "rgba(79,70,229,0.35)",
  },
};