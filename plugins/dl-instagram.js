
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `Bitte gib einen gültigen Instagram Link ein`;
  m.reply(wait);

  let res = await fetch(`https://api.zeltoria.my.id/api/download/instagram?apikey=Elistz&url=${text}`);
  let x = await res.json();

  let cap = `MADE BY YASSIN`;
  
  if (x.result && x.result.length > 0) {
    conn.sendFile(m.chat, x.result[0].url, 'instagram.mp4', cap, m);
  } else {
    throw `No Video Found.`;
  }
}

handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i


export default handler
