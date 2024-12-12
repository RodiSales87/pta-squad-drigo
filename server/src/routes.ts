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


import { Router } from "express";
import MatchController from "./matches";

const router = Router();

router.post("/matches", MatchController.create);
router.get("/matches", MatchController.get);
router.get("/matches/:id", MatchController.getById);
router.put("/matches/:id", MatchController.update);
router.delete("/matches/:id", MatchController.delete);
router.get("/matches/username/:username", MatchController.readByUsername);

export default router;
