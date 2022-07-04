import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";

interface IFeedback {
  type: string;
  comment: string;
  screenshot?: string;
}

class CreateFeedbackService {
  constructor(private feedbacksRepository: IFeedbacksRepository) {}

  async execute({ type, comment, screenshot }: IFeedback) {
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
  }
}

export { CreateFeedbackService };
