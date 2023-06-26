import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*Eine Anfrage oder einen Auftrag zur Nutzung von ChatGPT eingeben*\n\n*—◉ Beispiel*\n*◉ ${usedPrefix + command} Netflix Serien 2023*\n*◉ ${usedPrefix + command} Wer war Adolf Hitler*`
try {
m.reply(`*Bitte warte kurz...*`)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*Fehler*`
}}
handler.command = ['hadesai']
handler.diamond = false
export default handler
