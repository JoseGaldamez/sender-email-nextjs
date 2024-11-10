import { sendEmail } from "@/services/sendEmail.service";

export const POST = async (req: Request) => {
    try {
        const emailDetails = await req.json();
        const emailSentInfo = await sendEmail(emailDetails);
        return Response.json({
            message: "Sent email successfully",
            emailSentInfo,
        });
    } catch (error) {
        return Response.json({
            message: "Hello World",
            error,
        });
    }
};
