import { html } from '/packages/preact.mjs'
import Profile from '/components/Profile.mjs'
import PostPreview from '/components/PostPreview.mjs'

const Home = ({ posts }) => html`
  <div class="home">
    <${Profile}
      name="Fabricio Augusto"
      role="Front End Developer"
      picture="//gravatar.com/avatar/79fb5298a62cdfdc0d16b46e44c5bfab.jpg?s=200"
    />

    <section class="latestposts">
      ${posts.map(
        (props) => html`
          <${PostPreview} ...${props} />
        `
      )}
    </section>
  </div>
`

export default Home
