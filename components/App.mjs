import { html } from '/packages/preact.mjs'
import Nav from '/components/Nav.mjs'

const App = () => html`
  <div class="app">
    <${Nav} />
  </div>
`

export default App
