const express = require("express");
require("express-async-errors");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");  // Import path module
const routes = require("./routes");
const helmet = require("helmet");
const compression = require("compression");
const unknownEndpoint = require("./middleware/unKnownEndpoint");
const { handleError } = require("./helpers/error");

const app = express();
app.use(
  cors({
    origin: ["https://www.e-shop.adagendemo.in"], 
    // Allow both local and remote frontend
    credentials: true, // Optional: if you're dealing with cookies/auth
  })
);

app.set("trust proxy", 1);
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(cookieParser());

// Set the Content Security Policy header
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
    "img-src 'self' https://i.ibb.co; " + // Allow images from the specific URL
    "style-src 'self' 'unsafe-inline'; " + // Allow inline styles
    "connect-src 'self' http://localhost:9000 http://194.238.17.222:9000;" // Adjust as necessary
  );
  next();
});

app.use("/api", routes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});


app.use(unknownEndpoint);
app.use(handleError);
module.exports = app;
