import Express from "express";
import routesPayment from "./routes/payment_routes.js";
import cors from "cors";

const Application = Express();

Application.use(cors());
Application.use(routesPayment);

export default Application;
