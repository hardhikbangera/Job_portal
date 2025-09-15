import React, { useState, useEffect } from "react";
import PostList from "./PostList";

const BASE_URL = "http://localhost:8080";

function LookingForJob() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  const handleSearch = () => {
    if (!searchText.trim()) {
      setSearchResults([]);
      return;
    }
    fetch(`${BASE_URL}/posts/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: searchText }),
    })
      .then(res => res.json())
      .then(data => setSearchResults(data))
      .catch(err => console.error("Error searching posts:", err));
  };

  return (
    <div className="container">
      <h1>Looking for Job</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by Tech Stack"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {searchResults.length > 0 && (
        <>
          <h2>Search Results</h2>
          <PostList posts={searchResults} />
        </>
      )}

      <h2>All Job Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default LookingForJob;
