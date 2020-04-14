import { sendGridKey } from "./constants"
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(sendGridKey);

const to = process.env.SENDGRID_TO_ADDRESS;

export async function send(data) {
    try {
        const msg = {
            to,
            from: data.email,
            subject: 'Sales.',
            text: data.message,
        };

        await sgMail.send(msg);
        return true;
    } catch (err) {
        console.log(err.message);
        return false;
    }
}