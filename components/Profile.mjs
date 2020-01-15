import { html } from "/web_modules/htm/preact.js"

const Profile = ({ name, role, picture }) => html`
  <header class="profile">
    <a href="/">
      <img class="profile__picture" src=${picture} />
    </a>
    <h1 class="profile__name">
      ${name}
    </h1>
    <p class="profile__role">
      ${role}
    </p>
  </header>
`

export default Profile
