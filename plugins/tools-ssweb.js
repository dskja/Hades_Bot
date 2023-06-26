
import fetch from 'node-fetch'
let handler = async (m, { conn, command, args, text }) => {
      
    if (!args[0]) return m.reply('✳️ Geben Sie die URL einer Seite ein')
    m.react(rwait) 
	let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', 'ssweb-modules', { delay: 1000, url: u }))).buffer()
    conn.sendFile(m.chat, ss, 'ssweb.png', '✅ Aufnahme von der Seite erfolgreich', m) 
   m.react(done) 
}
handler.help = ['ssweb <url>']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss', 'captura'] 


export default handler
