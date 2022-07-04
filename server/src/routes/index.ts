import { Router } from "express";
import nodemailer from "nodemailer";
import { CreateFeedbackController } from "../controllers/CreateFeedbackController";

const routes = Router();

const createFeedbackController = new CreateFeedbackController();

routes.post("/feedback", createFeedbackController.handle);

// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "1899ee0ade63dc",
//     pass: "5f0ac4172ea120",
//   },
// });

// routes.post("/feedback", async (request, response) => {
//   const feedback = await transport.sendMail({
//     from: "Equipe FeedGet <oi@feedget.com",
//     to: "Junior Silva <juniorsilvacc1@gmail.com>",
//     subject: "Novo Feedback",
//     html: [
//       `<div>`,
//       `<p>Tipo do feedback: ${type}</p>`,
//       `<p>Comentário: ${comment}</p>`,
//       `</div>`,
//     ].join(""),
//   });
// });

export { routes };
