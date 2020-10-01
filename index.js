// // importing all as a Module object
// import * as components from "./Components";
// // importing all by name
import { Header, Nav, Main, Footer } from "./Components";
// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
