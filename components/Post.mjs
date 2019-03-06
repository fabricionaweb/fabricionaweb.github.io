import { html } from '/packages/preact.mjs'
// import snarkdown from '/packages/snarkdown.mjs'

const Post = ({ posts, slug }) => {
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    return html`
      <p class="color-red">Post not found</p>
    `
  }

  return html`
    <div class="post">
      <p class="color-red">${console.log(post)}</p>
    </div>
  `
}

export default Post
