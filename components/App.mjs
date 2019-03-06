import { html } from '/packages/preact.mjs'
import Router from '/packages/router.mjs'
import Nav from '/components/Nav.mjs'
import Home from '/components/Home.mjs'
import Post from '/components/Post.mjs'
import Fetch from '/components/Fetch.mjs'
import Loading from '/components/Loading.mjs'

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
              <p class="color-red">${error || 'Response error'}</p>
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
