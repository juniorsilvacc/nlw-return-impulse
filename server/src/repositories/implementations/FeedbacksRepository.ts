import { prisma } from "../../database/prisma";
import { ICreateDTOFeedBack } from "../../dtos/ICreateDTOFeedBack";
import { IFeedbacksRepository } from "../IFeedbacksRepository";

class FeedbacksRepository implements IFeedbacksRepository {
  async create({
    type,
    comment,
    screenshot,
  }: ICreateDTOFeedBack): Promise<void> {
    await prisma.feedbacks.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}

export { FeedbacksRepository };
