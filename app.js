const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./helpers");
const {
  routerAuth,
  routerEvents,
  routerPackages,
  routerAdmin,
} = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
const corsOptions = {
origin: ['https://finance-club-amber.vercel.app'],
allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
credentials: true,
enablePreflight: true
}
app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

// app.use(cors());
// app.options('*', cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(`${__dirname}/images`));
app.use("/uploads", express.static(`${__dirname}/images/events`));
app.use("/uploads", express.static(`${__dirname}/images/avatars`));

app.use("/api/auth", routerAuth);
app.use("/api/events", routerEvents);
app.use("/api/packages", routerPackages);
app.use("/api/admin", routerAdmin);

app.use((req, res) => {
  console.log("!!!!! APP (req, res) !!!!!!");
  res.status(404); // .json({ message: "Not found", data: null });
  res.json({ messages: "ERRR JSONS" });
});

app.use(errorHandler);

module.exports = app;
