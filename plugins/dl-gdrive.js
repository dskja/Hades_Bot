
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `✳️ Geben Sie einen Google Drive-Link ein`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
≡ *Google Drive DL*

▢ *Nummer:* ${res.fileName}
▢ *Größe:* ${res.fileSize}
▢ *Typ:* ${res.mimetype}`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('Fehler: Überprüfen Sie den Link oder versuchen Sie einen anderen Link') 
  }
}
handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive']
handler.diamond = false
handler.premium = false

export default handler
