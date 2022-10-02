import React from "react"
import { useState } from "react";
import { useEffect } from "react";

const Blog = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <div className="appWrapper">
      
    </div>
  )
}

export default Blog
