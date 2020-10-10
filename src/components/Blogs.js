import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "react-router-dom"

export const Blogs = ({ title, blogs, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return (<Blog key={blog.title} {...blog} />)
        })}
      </div>
      {showLink && <Link to="/blog" className="btn center-btn">Blogs</Link>}
    </section>
  )
}
export default Blogs
