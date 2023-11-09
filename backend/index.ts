import express from "express";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from  "cors";
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb+srv://govind:PjoVECCDvYtMfERi@govind.xzdrj3o.mongodb.net', { dbName: "courses" });
