import { html } from "/web_modules/htm/preact.js"
import Router from "/web_modules/preact-router.js"

import Nav from "./Nav.mjs"
import Home from "./Home.mjs"
import Post from "./Post.mjs"
import Fetch from "./Fetch.mjs"
import Loading from "./Loading.mjs"

const App = () => html`
  <div class="app">
    <${Nav} />

    <main class="main">
      <${Fetch} url="/data.json">
        ${({ loading, data, error }) => {
          const { posts, pages } = data

          if (loading) {
            return html`
              <${Loading} />
            `
          }

          if (error || !posts || !pages) {
            return html`
              <p class="color-red">${error || "Response error"}</p>
            `
          }

          return html`
            <${Router}>
              <${Home} posts=${posts} default />
              <${Post} posts=${posts} path="/post/:slug" />
            <//>
          `
        }}
      <//>
    </main>
  </div>
`

export default App
