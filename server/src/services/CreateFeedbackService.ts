import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";
import { ISendMailRepository } from "../repositories/ISendMailRepository";

interface IFeedback {
  type: string;
  comment: string;
  screenshot?: string;
}

class CreateFeedbackService {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private sendMailRepository: ISendMailRepository
  ) {}

  async execute({ type, comment, screenshot }: IFeedback) {
    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.sendMailRepository.sendMail({
      subject: "Novo feedback",
      body: [
        `<div>`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join(""),
    });
  }
}

export { CreateFeedbackService };
