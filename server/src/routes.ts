import express from "express";
import userController from "./controllers/UserController";
import mailRouter from "./routes/MailRoutes";
import MatchController from "./controllers/matches";
import { Router } from "express";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);


routes.use('/mail',mailRouter);


routes.post("/matches", MatchController.create);
routes.get("/matches", MatchController.get);
routes.get("/matches/:id", MatchController.getById);
routes.put("/matches/:id", MatchController.update);
routes.delete("/matches/:id", MatchController.delete);
routes.get("/matches/username/:username", MatchController.readByUsername);

export default routes;
