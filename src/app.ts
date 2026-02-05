import express from "express";
import healthRouter from "./routes/health";
import momoBalanceRouter from "./routes/momoBalance";

const app = express();
app.use(express.json());
app.use("/health", healthRouter);
app.use("/check-balance", momoBalanceRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `Server ready at http://localhost:${port} — let's build something solid.`,
  );
});
