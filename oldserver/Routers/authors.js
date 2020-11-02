// const { Router } = require("express");
// const router = Router();

// router
//   .route("/:id") // equivalent to /posts/:id
//   .get((request, response) => {
//     // use params Object to get the ID
//     const id = request.params.id;
//     const post = db
//       .get("posts")
//       .getById(id)
//       .value();

//     if (post) {
//       response.json(post);
//     } else {
//       response.status(404).json({ message: "Not Found" });
//     }
//   })
//   .patch((request, response) => {
//     const id = request.params.id;
//     const post = db
//       .get("posts")
//       .updateById(id, request.body)
//       .write();

//     if (post) {
//       response.json(post);
//     } else {
//       response.status(404).json({ message: "Not Found" });
//     }
//   })
//   .delete((request, response) => {
//     const id = request.params.id;
//     const post = db
//       .get("posts")
//       .removeById(id)
//       .write();

//     if (post) {
//       response.json(post);
//     } else {
//       response.status(404).json({ message: "Not Found" });
//     }
//   });

// module.exports = router;
