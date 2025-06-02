import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { port } from "./config/server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.render("index", { name: "Pratyush Biswal" });
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render("404", { path: req.originalUrl });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
