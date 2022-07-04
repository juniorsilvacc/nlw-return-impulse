import { Request, Response } from "express";
import { FeedbacksRepository } from "../repositories/implementations/FeedbacksRepository";
import { CreateFeedbackService } from "../services/CreateFeedbackService";

class CreateFeedbackController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type, comment, screenshot } = request.body;

    const feedbacksRepository = new FeedbacksRepository();
    const createFeedbackService = new CreateFeedbackService(
      feedbacksRepository
    );

    const feedback = await createFeedbackService.execute({
      type,
      comment,
      screenshot,
    });

    return response.status(201).json({ feedback });
  }
}

export { CreateFeedbackController };
