import { ICreateDTOFeedBack } from "../dtos/ICreateDTOFeedBack";

interface IFeedbacksRepository {
  create(data: ICreateDTOFeedBack): Promise<void>;
}

export { IFeedbacksRepository };
