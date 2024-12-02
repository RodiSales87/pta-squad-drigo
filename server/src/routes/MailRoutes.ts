import {Router} from 'express';
import {sendMail} from "../controllers/mailController";

const mailRouter = Router();

mailRouter.post('/', sendMail);

export default mailRouter;