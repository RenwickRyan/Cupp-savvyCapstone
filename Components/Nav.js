import links from "../Store/Links";

export default links => `
<nav class="hidden">
  <ul class="hidden--mobile nav-links">
  ${links.reduce(
    (html, link) =>
      html +
      `<li><a class="nav-link" href="/${
        link.title !== "Home" ? link.title : ""
      }" title="${link.title}" data-navigo>${link.text.toUpperCase()}</a></li>`,
    ``
  )}
  </ul>
</nav>
`;
