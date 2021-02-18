// const express = require("express");
// const app = express();
// // const morgan = require("morgan");
// // const bodyParser = require("body-parser");
// // const posts = require("./Routers/posts");
// // const authors = require("./Routers/authors");

// app.listen(4040, () => console.log("Listening on port 4040"));

// app.route("/posts/:id").get((request, response) => {
//   const id = request.params.id;
//   response.status(200).json({ message: "HELLO WORLD" });
// });

// app
//   .route("/")
//   .get((request, response) => {
//     response.json({ message: "HELLO WORLD" });
//   })
//   .post((request, response) => {
//     response.json(request.body);
//   });

// // const logging = (request, response, next) => {
// //   console.log(`${request.method} ${request.url} ${Date.now()}`);
// //   next();
// // };

// // app.use(logging);
// // app.use(morgan("dev"));

// app.use(bodyParser.json()).use(
//   morgan("dev")
//     .use("/posts", posts)
//     .use("/authors", authors)
// );
