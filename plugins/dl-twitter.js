
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `📌 Beispiel : \n*${usedPrefix + command}* https://twitter.com/hoodzitmemes1/status/1670150064197492739?s=20`
          m.react(rwait)    
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Beschreibung: ${desc}
└───────────`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
m.react(done)
} catch (e) {
  	m.reply(`✳️ Überprüfen Sie, ob der Link von Twitter stammt`)
	} 
	
}
handler.help = ['twitter'].map(v => v + ' <Link>')
handler.tags = ['dl']
handler.command = /^(twitter|tw)$/i
handler.diamond = false

export default handler
