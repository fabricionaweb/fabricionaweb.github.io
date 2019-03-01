import { html } from '/packages/preact.mjs'

const Nav = () => html`
  <nav class="nav">
    <a href="/" class="nav__item">← Back</a>
    <a href="/about" class="nav__item nav__item--about">About</a>
  </nav>
`

export default Nav
