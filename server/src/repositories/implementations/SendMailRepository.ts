import { ISendMailDTO } from "../../dtos/ISendMailDTO";
import { ISendMailRepository } from "../ISendMailRepository";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1899ee0ade63dc",
    pass: "5f0ac4172ea120",
  },
});

class SendMailRepository implements ISendMailRepository {
  async sendMail({ subject, body }: ISendMailDTO): Promise<void> {
    await transport.sendMail({
      from: "Equipe FeedGet <oi@feedget.com",
      to: "Junior Silva <juniorsilvacc1@gmail.com>",
      subject,
      html: body,
    });
  }
}

export { SendMailRepository };

// [
//         `<div>`,
//         `<p>Tipo do feedback: ${type}</p>`,
//         `<p>Comentário: ${comment}</p>`,
//         `</div>`,
//       ].join(""),
