
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `😑 Einen Songtitel eingeben\n\n*📌 Beispiel*\n*${usedPrefix + command}* Heat Waves `
    m.react('📀')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `▢ ⌚ *Dauer:* ${v.timestamp}\n▢ 👀 *Aufrufe:* ${v.views}\n▢ 📌 *Titel* : ${v.title}\n▢ 📆 *Hochgeladen:* ${v.ago}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `▢ ⌚ *Dauer:* ${v.timestamp}\n▢ 👀 *Aufrufe:* ${v.views}\n▢ 📌 *Titel* : ${v.title}\n▢ 📆 *Publiced:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *HadesBot Musik*🔎', `\n 📀 Hier eine Liste der Ergebnisse von :\n *${text}*`, igfg, `Click `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler
