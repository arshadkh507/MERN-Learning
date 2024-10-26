const express = require("express");

// express create the server under the hood.
const app = express();
app.use(express.urlencoded({ extended: true }));

app.post("/user", (req, res, next) => {
  res.send("<h1>" + req.body.username + "</h1>");
});

app.get("/", (req, res, next) => {
  res.send(
    `<form action="/user" method="POST"><input type="text" name="username" /><button type="submit">Submit</button></form>`
  );
});

app.listen(5000, () => console.log("server is running on port 5000"));

// Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
// Middleware (functions at the end && it can manipulate the req & res even.)
// because every incomming request funnel through bunch of middleware functions

//
// next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

// app.use((req, res, next) => {
//   let body = "";

//   req.on("end", () => {
//     const userName = body.split("=")[1];
//     if (userName) {
//       req.body = { name: userName };
//     }
//     next();
//   });

//   req.on("data", (chunk) => {
//     body += chunk;
//   });
// });
