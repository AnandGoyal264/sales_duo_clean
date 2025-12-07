import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import optimizeRoutes from "./routes/optimizeRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/optimize", optimizeRoutes);

app.get("/", (req, res) => {
  res.send("SalesDuo AI Listing Optimizer API");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
