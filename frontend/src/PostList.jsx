import React, { useState } from "react";

function PostList({ posts }) {
  const [appliedJobs, setAppliedJobs] = useState(new Set());

  const handleApplyClick = (postId) => {
    setAppliedJobs(prev => new Set(prev).add(postId));
    alert("Applied successfully!");
  };

  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {posts.map(post => {
        const isApplied = appliedJobs.has(post.id);
        return (
          <li
            key={post.id}
            style={{
              border: "1px solid #3498db",
              borderRadius: 8,
              padding: 20,
              marginBottom: 15,
              backgroundColor: isApplied ? "#d6f5d6" : "white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "background-color 0.3s ease",
            }}
          >
            <h3 style={{ marginTop: 0, color: "#2c3e50" }}>{post.job_name}</h3>
            <p style={{ fontStyle: "italic", color: "#555" }}>{post.job_desc}</p>
            <p><strong>Tech Stack:</strong> {post.tech_stack ? post.tech_stack.join(", ") : "-"}</p>

            <button
              onClick={() => handleApplyClick(post.id)}
              disabled={isApplied}
              style={{
                marginTop: 12,
                padding: "10px 18px",
                backgroundColor: isApplied ? "#7bbc70" : "#3498db",
                border: "none",
                borderRadius: 5,
                color: "white",
                cursor: isApplied ? "default" : "pointer",
                fontWeight: "bold",
                boxShadow: isApplied ? "none" : "0 2px 6px rgba(0,0,0,0.2)"
              }}
            >
              {isApplied ? "Applied" : "Apply Job"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
