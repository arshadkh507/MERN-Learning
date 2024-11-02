const express = require("express");
const app = express();

const placesRoutes = require("./routes/places-routes.js");
const usersRoutes = require("./routes/users-routes.js");
const HttpError = require("./models/http-error");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/places", placesRoutes);

app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  throw new HttpError("Could not found this route. ", 404);
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

app.listen(5000, () => console.log("server is lestening on port 5000"));
