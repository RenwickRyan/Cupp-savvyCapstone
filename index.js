import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// importing all as a Module object
import * as state from "./store";
// importing all by name
import { Header, Nav, Main, Footer } from "./Components";
// add menu toggle to bars icon in nav bar
import "./env";

// get data from an API endpoint
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  // handle the response from the API
  .then(response => {
    // for each post in the response Array,
    response.data.forEach(post => {
      // add it to state.Blog.posts
      state.Blog.posts.push(post);
    });
    const params = router.lastRouteResolved().params;
    if (params) {
      render(state[params.page]);
    }
  });

axios
  .get(`https://api.github.com/users/RenwickRyan/repos`, {
    headers: {
      Authorization: `token 871eba93e02dfc55166e9757a11633c4b985f3b9`
    }
  })
  .then(response => console.log(response.data));

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();

  addPicOnFormSubmit(st);
  addNavEventListeners();
}

render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

function addPicOnFormSubmit(st) {
  if (st.view === "Form") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      // construct new picture object
      let newPic = inputList.reduce((pictureObject, input) => {
        pictureObject[input.name] = input.value;
        return pictureObject;
      }, {});
      // add new picture to state.Gallery.pictures
      state.Gallery.pictures.push(newPic);
      render(state.Gallery);
    });
  }
}

function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

/* number generator */
function getRandomNumber1(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
function getRandomNumber2(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
function getRandomNumber3(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
function getRandomNumber4(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
function getRandomNumber5(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
function getRandomNumber6(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
function getRandomNumber7(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
function getRandomNumber8(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
function getRandomNumber9(max, min) {
  return Math.floor(Math.random() * (999 - 100) + 100);
}

document.getElementById("num1").innerHTML = getRandomNumber1();
document.getElementById("num2").innerHTML = getRandomNumber2();
document.getElementById("num3").innerHTML = getRandomNumber3();
document.getElementById("num4").innerHTML = getRandomNumber4();
document.getElementById("num5").innerHTML = getRandomNumber5();
document.getElementById("num6").innerHTML = getRandomNumber6();
document.getElementById("num7").innerHTML = getRandomNumber7();
document.getElementById("num8").innerHTML = getRandomNumber8();
document.getElementById("num9").innerHTML = getRandomNumber9();
