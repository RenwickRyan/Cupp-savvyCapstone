import Navigo from "navigo";
import { capitalize } from "lodash";
// importing all as a Module object
import * as state from "./Store";
// importing all by name
import { Header, Nav, Main, Footer } from "./Components";
// add menu toggle to bars icon in nav bar
const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();
}
render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();
