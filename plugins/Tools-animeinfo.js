import translate from '@vitalets/google-translate-api';
import { Anime } from '@shineiichijo/marika';

const client = new Anime();

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) return m.reply(`*[❗] Bitte geben Sie den Namen eines Animes ein, nach dem Sie suchen möchten.*`);
  try {
    let anime = await client.searchAnime(text);
    let result = anime.data[0];
    let resultes = await translate(`${result.background}`, { to: 'en', autoCorrect: true });
    let resultes2 = await translate(`${result.synopsis}`, { to: 'de', autoCorrect: true });
    let AnimeInfo = `
🎀 • *Titel:* ${result.title}
🎋 • *Format:* ${result.type}
📈 • *Status:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *Episoden insgesamt:* ${result.episodes}
🎈 • *Dauer: ${result.duration}*
✨ • *Basierend auf:* ${result.source.toUpperCase()}
💫 • *Veröffentlicht:* ${result.aired.from}
🎗 • *Beendet:* ${result.aired.to}
🎐 • *Beliebtheit:* ${result.popularity}
🎏 • *Favoriten:* ${result.favorites}
🎇 • *Bewertung:* ${result.rating}
🏅 • *Rang:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *Link:* ${result.url}
🎆 • *Hintergrund:* ${resultes.text}
❄ • *Übersicht:* ${resultes2.text}`;

    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] FEHLER, bitte versuchen Sie es erneut.*`;
  }
};

handler.command = /^(anime|animeinfo)$/i;
export default handler;
