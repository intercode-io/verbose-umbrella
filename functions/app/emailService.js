import { sendGridKey } from "./constants"
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(sendGridKey);

export async function send(data) {
    try {
        const msg = {
            // to: 'sales@intercode.io',
            to: 'yurapostevka@gmail.com',
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