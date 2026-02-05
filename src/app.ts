import express from "express";
import healthRouter from "./routes/health";

const app = express();
app.use(express.json());
app.use("/health", healthRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `Server ready at http://localhost:${port} — let's build something solid.`,
  );
});
