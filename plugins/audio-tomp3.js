import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️  Antworten Sie auf die Video- oder Sprachnotiz, die Sie in mp3 umwandeln möchten, mit dem Befehl :\n\n*${usedPrefix + command}*`*/
    let media = await q.download?.()
    if (!media) throw '❎ Herunterladen der Medien fehlgeschlagen'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎ Fehler bei der Konvertierung'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^to(mp3|a(udio)?)$/i

export default handler
