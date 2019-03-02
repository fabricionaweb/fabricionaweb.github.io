import { html } from '/packages/preact.mjs'
import Profile from '/components/Profile.mjs'

const Home = () => html`
  <div class="Home">
    <${Profile}
      name="Fabricio Augusto"
      role="Front-end Developer"
      picture="//gravatar.com/avatar/79fb5298a62cdfdc0d16b46e44c5bfab.jpg?s=200"
    />
  </div>
`

export default Home
