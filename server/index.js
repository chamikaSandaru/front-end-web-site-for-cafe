import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Twilio } from 'twilio';
import nodemailer from 'nodemailer';
import { z } from 'zod';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI);

// Message Schema
const messageSchema = new mongoose.Schema({
  content: String,
  smsRecipients: [String],
  whatsappRecipients: [String],
  emailRecipients: [String],
  status: {
    sms: [{ number: String, status: String }],
    whatsapp: [{ number: String, status: String }],
    email: [{ email: String, status: String }],
  },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Validation Schema
const sendMessageSchema = z.object({
  message: z.string().min(1),
  smsNumbers: z.array(z.string()).max(10),
  whatsappNumbers: z.array(z.string()).max(10),
  emails: z.array(z.string().email()).max(10),
});

// Initialize Twilio client
const twilioClient = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Initialize Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post('/api/send', async (req, res) => {
  try {
    const validatedData = sendMessageSchema.parse(req.body);
    const { message, smsNumbers, whatsappNumbers, emails } = validatedData;

    const messageDoc = new Message({
      content: message,
      smsRecipients: smsNumbers,
      whatsappRecipients: whatsappNumbers,
      emailRecipients: emails,
      status: {
        sms: [],
        whatsapp: [],
        email: [],
      },
    });

    // Send SMS messages
    for (const number of smsNumbers) {
      try {
        await twilioClient.messages.create({
          body: message,
          to: number,
          from: process.env.TWILIO_PHONE_NUMBER,
        });
        messageDoc.status.sms.push({ number, status: 'success' });
      } catch (error) {
        messageDoc.status.sms.push({ number, status: 'failed' });
      }
    }

    // Send WhatsApp messages
    for (const number of whatsappNumbers) {
      try {
        await twilioClient.messages.create({
          body: message,
          to: `whatsapp:${number}`,
          from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        });
        messageDoc.status.whatsapp.push({ number, status: 'success' });
      } catch (error) {
        messageDoc.status.whatsapp.push({ number, status: 'failed' });
      }
    }

    // Send emails
    for (const email of emails) {
      try {
        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: email,
          subject: 'New Message',
          text: message,
        });
        messageDoc.status.email.push({ email, status: 'success' });
      } catch (error) {
        messageDoc.status.email.push({ email, status: 'failed' });
      }
    }

    await messageDoc.save();

    res.json({
      success: true,
      message: 'Messages sent successfully',
      status: messageDoc.status,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});