import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnection } from './database/dbConnect.js'
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js"

// Setup Express app
const app = express();
// Load environment
dotenv.config({ path: "./config/config.env" })


// Middleware to parse incoming requests
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["POST"],
    credentials : true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
dbConnection();

// Routes
app.use('/api/v1/reservation', reservationRouter);

// Error handling middleware - placed at the end
app.use(errorMiddleware);

export default app;
