//ABHISHEK-SER-BOT
import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Bitte gib eine Nummer ein';

  try {
    let res = await fetch(`https://inrl-web.onrender.com/api/truecaller?number=${text}`);

    if (!res.ok) {
      throw new Error(`API-Anforderung fehlgeschlagen mit Status: ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    
    json.creator = 'HadesBot by: Yassin';

    let milf = '';
    for (let prop in json) {
      milf += `• *${prop}:* ${json[prop]}\n`;
    }

    m.reply(milf);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

handler.help = ['true'];
handler.tags = ['tools'];
handler.command = /^(true|caller)$/i;

export default handler;
