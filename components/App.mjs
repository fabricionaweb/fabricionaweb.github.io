import { html } from '/packages/preact.mjs'
import Router from '/packages/router.mjs'
import Nav from '/components/Nav.mjs'
import Home from '/components/Home.mjs'

const App = () => html`
  <div class="app">
    <${Nav} />

    <main class="main">
      <${Router}>
        <${Home} default />
      <//>
    </main>
  </div>
`

export default App
