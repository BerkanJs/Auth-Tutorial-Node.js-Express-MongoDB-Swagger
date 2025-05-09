import { mailtrapClient, sender } from "./mailtrap.config.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  USER_WELCOME_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  const welcomeEmailHtml = USER_WELCOME_TEMPLATE.replace("{username}", name)
    .replace("{welcomeURL}", "https://aaa?='/welcome")
    .replace("{nextStepURL}", "https://aaa?='/next-step")
    .replace("{unsubscribeURL}", "https://aaa?='/unsubscribe");

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Welcome to Our App",
      html: welcomeEmailHtml,
      category: "Welcome Email",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email:${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipent = [{ email }];

  try {
    const resonse = await mailtrapClient.send({
      from: sender,
      to: recipent,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
  } catch (error) {
    console.log(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};


export const sendResetSuccessEmail = async(email)=>{
  const recipent = [{email}];

  try{
    const response=await mailtrapClient.send({
      from:sender,
      to:recipent,
      subject:"Password Reset Successful",
      html:PASSWORD_RESET_SUCCESS_TEMPLATE,
      category:"Password Reset"

    });
    console.log("Password reset email sent successfully",response);

  }catch(error){
    console.log(`Error sending password reset success email`,error);
    throw new Error(`Error sending password reset success email: ${error}`)
    
  }

}