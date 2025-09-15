import React, { useState, useEffect } from "react";
import PostList from "./PostList";

const BASE_URL = "http://localhost:8080";

function Recruiter() {
  const [posts, setPosts] = useState([]);
  const [jobName, setJobName] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [techStack, setTechStack] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  const handleAddJob = () => {
    if (!jobName.trim() || !jobDesc.trim()) {
      setMessage("Please fill in all required fields.");
      return;
    }
    const payload = {
      job_name: jobName,
      job_desc: jobDesc,
      tech_stack: techStack
        .split(",")
        .map(s => s.trim())
        .filter(s => s.length > 0),
    };
    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to add job");
        return res.json();
      })
      .then(newPost => {
        setPosts([...posts, newPost]);
        setJobName("");
        setJobDesc("");
        setTechStack("");
        setMessage("Job listing added successfully.");
      })
      .catch(err => {
        console.error(err);
        setMessage("Error adding job listing.");
      });
  };

  return (
    <div className="container" style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <h1>Recruiter Portal</h1>
      <h2>Add Job Listing</h2>
      {message && <p>{message}</p>}
      <div className="add-job-card">
        <form className="add-job-form" onSubmit={e => {e.preventDefault(); handleAddJob();}}>
          <input
            type="text"
            placeholder="Job Name"
            value={jobName}
            onChange={e => setJobName(e.target.value)}
          />
          <textarea
            placeholder="Job Description"
            value={jobDesc}
            onChange={e => setJobDesc(e.target.value)}
            rows={4}
          />
          <input
            type="text"
            placeholder="Tech Stack (comma separated)"
            value={techStack}
            onChange={e => setTechStack(e.target.value)}
          />
          <button type="submit" className="add-job-btn">
            Add Job
          </button>
        </form>
      </div>
      <h2>All Job Listings</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default Recruiter;
