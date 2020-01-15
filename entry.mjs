import { render, html } from "/web_modules/htm/preact.js"
import App from "/components/App.mjs"

render(
  html`
    <${App} />
  `,
  document.getElementById("root")
)
