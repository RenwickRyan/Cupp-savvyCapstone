import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// importing all as a Module object
import * as state from "./Store";
// import * as LivePhotosKit from "livephotoskit";
// importing all by name
import { Header, Nav, Main, Footer } from "./Components";
// add menu toggle to bars icon in nav bar
import "./env";

/* API STUFF */

// // get data from an API endpoint
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   // handle the response from the API
//   .then(response => {
//     // for each post in the response Array,
//     response.data.forEach(post => {
//       // add it to state.Blog.posts
//       state.Blog.posts.push(post);
//     });
//     const params = router.lastRouteResolved().params;
//     if (params) {
//       render(state[params.page]);
//     }
//   });

// axios
//   .get(`https://api.github.com/users/RenwickRyan/repos`, {
//     headers: {
//       Authorization: `token 871eba93e02dfc55166e9757a11633c4b985f3b9`
//     }
//   })
//   .then(response => console.log(response.data));

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();

  /* nav bar toggle */
  function addNavTrigger() {
    const hamburger = document.getElementById("hamburger");
    const navUL = document.getElementById("hidden--mobile");
    hamburger.addEventListener("click", () => {
      navUL.classList.toggle("show");
    });
  }
  addNavTrigger();
}

render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

/* number generator */
function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}

document.getElementById("num-1").innerHTML = getRandomNumber();
document.getElementById("num-2").innerHTML = getRandomNumber();
document.getElementById("num-3").innerHTML = getRandomNumber();
document.getElementById("num-4").innerHTML = getRandomNumber();
document.getElementById("num-5").innerHTML = getRandomNumber();
document.getElementById("num-6").innerHTML = getRandomNumber();
document.getElementById("num-7").innerHTML = getRandomNumber();
document.getElementById("num-8").innerHTML = getRandomNumber();
document.getElementById("num-9").innerHTML = getRandomNumber();
document.getElementById("num-10").innerHTML = getRandomNumber();
