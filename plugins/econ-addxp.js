//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Bitte makiere denn Benutzer der die XP erhalten soll'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Geben Sie die Anzahl der *XP* ein, die Sie dem erwähnten Benutzer geben möchten'
  if (isNaN(txt)) throw ' 🔢 Ungültiger Wert, bitte geben sie nur Zahlen ein!'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ Ungültig, der Minimalwert beträgt *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *XP HINZUGEFÜGT*
┌──────────────
▢  *Insgesamt:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Sie haben \n\n *+${xp} XP* erhalten`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

