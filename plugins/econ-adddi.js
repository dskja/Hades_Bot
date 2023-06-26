//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Bitte makiere denn Benutzer der die Diamanten erhalten soll'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Geben Sie die Anzahl der *Diamanten* ein, die Sie dem erwähnten Benutzer geben möchten'
    if (isNaN(txt)) throw '🔢 Ungültiger, bitte geben sie nur Zahlen ein!'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Ungültig, der Minimalwert beträgt *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 HINZUGEFÜGT*
┌──────────────
▢ *Insgesamt:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Sie haben \n\n *+${dmt}* Diamanten erhalten`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

