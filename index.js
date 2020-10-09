import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import * as state from "./Store";
import { Header, Nav, Main, Footer } from "./Components";

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

/*my github token access*/
// axios
//   .get(`https://api.github.com/users/${RenwickRyan}/repos`, {
//     headers: {
//       Authorization: `token ${/*tokengoeshere*/}`
//     }
//   })
//   .then(response => console.log(response.data));
