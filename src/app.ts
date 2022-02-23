import express from "express";
import Router from "./routes";
const app = express();
const port = 3000;

app.use("/api", Router);

app.listen(port, () =>
  console.log("\x1b[32m%s\x1b[0m", `🚀 Server running on port ${port}...`)
);
