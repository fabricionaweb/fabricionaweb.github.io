import { html } from '/packages/preact.mjs'
import Fetch from '/components/Fetch.mjs'
import Loading from '/components/Loading.mjs'
import Profile from '/components/Profile.mjs'
import PostPreview from '/components/PostPreview.mjs'

const Home = () => html`
  <div class="home">
    <${Profile}
      name="Fabricio Augusto"
      role="Front-end Developer"
      picture="//gravatar.com/avatar/79fb5298a62cdfdc0d16b46e44c5bfab.jpg?s=200"
    />

    <${Fetch} url="/data.json">
      ${({ loading, data, error }) => {
        const { posts } = data

        if (loading) {
          return html`
            <${Loading} />
          `
        }

        if (error || !posts) {
          return html`
            <p class="color-red">${error || 'Response error'}</p>
          `
        }

        return html`
          <section class="latestposts">
            ${posts.map(
              (props) => html`
                <${PostPreview} ...${props} />
              `
            )}
          </section>
        `
      }}}
    <//>
  </div>
`

export default Home
