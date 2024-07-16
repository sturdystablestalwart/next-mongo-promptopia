"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, index) => (
        <PromptCard key={index} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    filterPosts(value);
    setSearchText(value);
  };

  const filterPosts = (value) => {
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.tag.includes(value) ||
          post.creator.username.includes(value) ||
          post.prompt.includes(value)
      )
    );
  };

  const handleTagClick = (value) => {
    filterPosts(value);
    setSearchText(value);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    })();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center`">
        <input
          type="text"
          placeholder="Search for a tag, prompt or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <PromptCardList data={filteredPosts} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
