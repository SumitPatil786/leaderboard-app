import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js"
import claimRoutes from "./routes/claim.routes.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/claims",claimRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT ,()=>console.log(`API Running on : ${PORT}`));
})
.catch(err => console.error(err));