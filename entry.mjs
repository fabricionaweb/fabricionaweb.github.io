import { html, render } from '/packages/preact.mjs'
import App from '/components/App.mjs'

render(
  html`
    <${App} />
  `,
  document.body
)
