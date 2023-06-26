
import fg from 'api-dylux'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 350
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Beispiel :\n${usedPrefix + command} https://youtu.be/qaU8yIzn9HQ`
    if (!args[0].match(/youtu/gi)) throw `❎ Überprüfen Sie, ob der angegebene Link ein YouTube-Link ist`
	 let chat = global.db.data.chats[m.chat]
	 m.react(rwait) 
	try {
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
       if (size.split('MB')[0] >= limit) return m.reply(` ≡  *HadesBot YTDL*\n\n▢ *⚖️Größe* : ${size}\n▢ *🎞️Qualität* : ${q}\n\n▢ Die Datei überschreitet das Download-Limit *+${limit} MB*`)    
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *HadesBot YTDL*
  
▢ *📌Titel* : ${title}
▢ *📟 Ext* : mp4
▢ *🎞️Qualität* : ${q}
▢ *⚖️Größe* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
		
	} catch {
		
		const { title, result, quality, size, duration, thumb, channel } = await fg.ytv(args[0]) 
		if (size.split('MB')[0] >= limit) return m.reply(` ≡  *HadesBot YTDL2*\n\n▢ *⚖️Größe* : ${size}\n▢ *🎞️Qualität* : ${quality}\n\n▢ Die Datei überschreitet das Download-Limit *+${limit} MB*`)
	conn.sendFile(m.chat, result, title + '.mp4', `
 ≡  *HadesBot YTDL2*
  
▢ *📌Titel* : ${title}
▢ *📟 Ext* : mp4
▢ *⚖️Größe* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
	} 
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'video']
handler.diamond = false

export default handler
