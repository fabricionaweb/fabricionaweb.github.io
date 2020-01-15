import { html } from "/web_modules/htm/preact.js"
import snarkdown from "/web_modules/snarkdown.js"

const Post = ({ posts, slug }) => {
  const post = posts.find(post => post.slug === slug)

  if (!post) {
    return html`
      <p class="color-red">Post not found</p>
    `
  }

  const { data, content } = post
  const { title, date } = data
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const postContent = {
    __html: snarkdown(content),
  }

  return html`
    <article class="post">
      <header>
        <h1 class="post__title">
          ${title}
        </h1>
        <p class="post__date">
          ${formatedDate}
        </p>
      </header>

      <div class="post__content" dangerouslySetInnerHTML=${postContent} />
    </article>
  `
}

export default Post
