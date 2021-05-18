import dotenv from "dotenv";
import express from "express";

import AppRouter, { errorHandler } from "./router";

dotenv.config({
  path: ".env",
});

const app = express();
const port = process.env.APP_PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/api", AppRouter);

app.listen(port, () => console.log(`> Listening on port ${port}`));
