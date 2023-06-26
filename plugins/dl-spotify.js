import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw '*Bitte gib einen Song Namen ein*'
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=a88d88273f11ee45caefe7c6&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=a88d88273f11ee45caefe7c6&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *TITLE:* ${title}\n┴\n┬\n├‣🗣️ *ARTIST:* ${artists}\n┴\n┬\n├‣🌐 *𝚄𝚁𝙻*: ${link}\n┴\n┬\n├‣💚 *SEARCH URL:* ${link}\n┴`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
throw '* 𝙴𝚁𝚁𝙾𝚁*'
}}
handler.command = /^(spotify|song)$/i
export default handler