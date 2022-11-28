import express, { Request, Response } from "express";
import cors from "cors";
import employeeRouter from "./routes/employeeRoute";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome" });
});

//routes:
app.use("/api/v1/employee", employeeRouter);

export default app;
