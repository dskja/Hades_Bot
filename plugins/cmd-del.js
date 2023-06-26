//import db from '../lib/database.js'

let handler = async (m, { text }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `✳️ Geben Sie den zu deaktivierenden Befehlsnamen ein`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw `✳️ Dieser Befehl kann nicht deaktiviert werden`
    delete sticker[hash]
    m.reply(`✅ Der Befehl wurde ausgeschaltet`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <text>')
handler.tags = ['cmd']
handler.command = ['delcmd']
handler.owner = true

export default handler
