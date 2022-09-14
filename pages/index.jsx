import React from "react"
import prisma from "../lib/prisma";
import Layout from "../components/Layout"
import Post from "../components/Post"

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true},
      }
    }
  });
  return { 
    props: { feed }, 
    revalidate: 10 
  }
}

const Blog = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog