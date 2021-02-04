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

  // addPicOnFormSubmit(st);
  // addNavEventListeners();
}

render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

// function addPicOnFormSubmit(st) {
//   if (st.view === "Form") {
//     document.querySelector("form").addEventListener("submit", event => {
//       event.preventDefault();
//       // convert HTML elements to Array
//       let inputList = Array.from(event.target.elements);
//       // remove submit button from list
//       inputList.pop();
//       // construct new picture object
//       let newPic = inputList.reduce((pictureObject, input) => {
//         pictureObject[input.name] = input.value;
//         return pictureObject;
//       }, {});
//       // add new picture to state.Gallery.pictures
//       state.Gallery.pictures.push(newPic);
//       render(state.Gallery);
//     });
//   }
// }

// function addNavEventListeners() {
//   // add menu toggle to bars icon in nav bar
//   document
//     .querySelector(".fa-bars")
//     .addEventListener("click", () =>
//       document.querySelector("nav > ul").classList.toggle("hidden--mobile")
//     );
// }

/* navbar */

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

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
function getRandomNumber10(max, min) {
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
document.getElementById("num10").innerHTML = getRandomNumber10();

/* apple live photo API */

// const player = LivePhotosKit.Player(document.getElementById("live-photo"));
// player.photoSrc =
//   "https://github.com/RenwickRyan/Cupp---Savvy-Capstone/blob/master/Photos/breakingcrust-detail.jpeg?raw=true";
// player.videoSrc =
//   "https://github.com/RenwickRyan/Cupp---Savvy-Capstone/blob/master/Photos/IMG_1850.mov?raw=true";

// player.addEventListener("canplay", evt => console.log("player ready", evt));
// player.addEventListener("error", evt => console.log("player load error", evt));
// player.addEventListener("ended", evt =>
//   console.log("player finished playing through", evt)
// );

// player.playbackStyle = LivePhotosKit.PlaybackStyle.HINT;
// player.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;
// player.play();
// player.pause();
// player.toggle();
// player.stop();

// player.currentTime = 0.25 * player.duration;

// player.currentTime = 0.1;

// player.addEventListener("error", ev => {
//   if (typeof ev.detail.errorCode === "number") {
//     switch (ev.detail.errorCode) {
//       case LivePhotosKit.Errors.IMAGE_FAILED_TO_LOAD:
//         break;
//       case LivePhotosKit.Errors.VIDEO_FAILED_TO_LOAD:
//         break;
//     }
//   } else {
//     console.error(ev.detail.error);
//   }
// });
