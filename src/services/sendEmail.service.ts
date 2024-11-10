import nodemailer from "nodemailer";

import { EmailDetails } from "@/models/emailDetails.model";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async (emailDetails: EmailDetails) => {
    return await transporter.sendMail(emailDetails);
};
