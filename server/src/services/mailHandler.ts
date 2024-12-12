import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

 async function mailHandler(emailConfig: 
    {
        userName: string,
        userEmail: string,
        game : string,
        matchLink: string,
        date: string,
        time: string,
        subjectText: string,
        html: string;
    })
 {
    try
    {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: emailConfig.userEmail,
            subject: emailConfig.subjectText,
            html: emailConfig.html,
        })

        return true;
    }
    catch(error)
    {
        console.log(error)
        return false;
    }
 }

 export default mailHandler;