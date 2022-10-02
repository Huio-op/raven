import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/Layout"

const Blog = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  console.log(posts);

  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          enzo
        </main>
      </div>
    </Layout>
  )
}

export default Blog
