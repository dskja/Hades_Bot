import fg from 'api-dylux';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `✳️ Bitte senden Sie den Link zu einem Facebook-Video\n\n📌 Beispiel :\n*${usedPrefix + command}* https://www.facebook.com/Ankursajiyaan/videos/981948876160874/?mibextid=rS40aB7S9Ucbxw6v`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '⚠️ BITTE GEBEN SIE EINE GÜLTIGE URL AN.';
  }

  m.react(rwait);

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
⊱ ─── {* HadesBot FBDL*} ─── ⊰
↳ *VIDEO-TITEL:* ${result.title}
⊱ ────── {⋆♬⋆} ────── ⊰`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    console.log(error);
    m.reply('⚠️ Bei der Bearbeitung der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.');
  }
};

handler.help = ['facebook <url>'];
handler.tags = ['dl'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
handler.diamond = false;

export default handler;

