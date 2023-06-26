//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Die Willkommensnachricht wurde erfolgreich konfiguriert')
  } else throw `✳️ Geben Sie die Willkommensnachricht ein\n\n@user (Erwähnung)\n@group (Name der Gruppe)\n@desc (Beschreibung der Gruppe)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
