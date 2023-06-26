let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Dieser Befehl erzeugt Bilder aus Texten*\n\n*—◉ Beispiel für die Verwendung*\n*◉ ${usedPrefix + command} Katze*\n*◉ ${usedPrefix + command} Anime*`
try {
m.reply('*Bildverarbeitung...*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*INTERNER FEHLER*`
}}
handler.command = ['ai2', 'dalle', 'gen', 'gimg', 'openai2']
export default handler
