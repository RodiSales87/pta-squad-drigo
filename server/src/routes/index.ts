import { Router } from "express";

import mailRouter from './MailRoutes';

const router = Router();

router.use('/mail',mailRouter);


export default router;