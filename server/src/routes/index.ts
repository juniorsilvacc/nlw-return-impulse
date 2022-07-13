import { Router } from "express";
import { CreateFeedbackController } from "../controllers/CreateFeedbackController";

const routes = Router();

const createFeedbackController = new CreateFeedbackController();

routes.post("/feedback", createFeedbackController.handle);

export { routes };
