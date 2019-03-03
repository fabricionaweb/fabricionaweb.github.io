import { html } from '/packages/preact.mjs'

const PostPreview = ({ data, slug }) => {
  const { title, date, description } = data
  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return html`
    <article class="postpreview">
      <a class="postpreview__link" href=${'/post/' + slug} title=${title}>
        <aside class="postpreview__date">${formatedDate}</aside>
        <h2 class="postpreview__title">${title}</h2>
        <p class="postpreview__description">${description}</p>
      </a>
    </article>
  `
}

export default PostPreview
