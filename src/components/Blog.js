import React from "react"
// import { Link } from "react-router-dom"

const Blog = ({ id, title, thumbnail, pubDate, categories, link, content }) => {
  function cleanTitle(checkTitle) {
    checkTitle = checkTitle.replace("amp;", "");
    return checkTitle
  }

  function truncateText(text, start, len) {
    return text.length > len ? text.slice(start, len) : text;
  }

  function toText(block) {
    let tag = document.createElement('div');
    tag.innerHTML = block;
    block = tag.innerText;
    return block
  }

  function convertDate(date) {
    let dateString = date.match(/^[^ ]+/)[0].split("-");
    const d = new Date(`${dateString[0]}-${dateString[1]}-${dateString[2]}`);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da} ${mo}, ${ye}`;
  }

  return (
    <a href={`${link}`} key={title} className="blog">
      <article className="">
        <img src={`${thumbnail}`} className="blog-img" alt={truncateText(cleanTitle(title), 0, 60)}></img>
        <div className="blog-card">
          <h4>{truncateText(cleanTitle(title), 0, 60)}</h4>
          <p className="blog-text">{truncateText(toText(content), 48, 300) + "..."}</p>
          <div className="blog-footer">
            <span>{categories[1]}</span>
            <p>{convertDate(pubDate)}</p>
          </div>
        </div>
      </article>
    </a>
  )
}

export default Blog
