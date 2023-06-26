import fetch from "node-fetch";
import { generateWAMessageFromContent } from "@adiwajshing/baileys";
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const configuration = new Configuration({
  organization: process.env.OPEN_ORGANIZATION,
  apiKey: process.env.OPEN_API_KEY
});

const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, usedPrefix, command, text }) => {
  try {
    if (!text) throw new Error(`Chatgpt .\n\nbenutzen:\n${usedPrefix}${command} Hallo?`);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    });

    if (response.data.choices && response.data.choices.length > 0) {
      const reply = response.data.choices[0].message.content;
      conn.reply(m.chat, reply, m);
    } else {
      throw new Error("Leere Antwort von OpenAI erhalten");
    }
  } catch (error) {
    console.error("Fehler:", error.message);
    console.error("Fehlermeldung:", error.response);
    conn.reply(m.chat, "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.", m);
  }
}

handler.command = /^(openai|gpt)$/i;
handler.help = ["gpt", "openai"].map(v => v + " <Text>");
handler.tags = ["internet"];

export default handler;
