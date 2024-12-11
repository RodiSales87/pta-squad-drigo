import express from "express";
import userController from "./controllers/UserController";
import mailRouter from "./routes/MailRoutes";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);
routes.use('/mail',mailRouter);


export default routes;
