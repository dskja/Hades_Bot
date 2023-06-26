
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ Einen Tiktok-Link eingeben\n\n 📌 Beispiel : ${usedPrefix + command} https://vm.tiktok.com/ZGJCdBGg7/`
if (!args[0].match(/tiktok/gi)) throw `❎ Überprüfen Sie, ob der Link von tiktok stammt`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ TIKTOK
▢ *Benutzername:* ${p.unique_id}
▢ *Beschreibung:* ${p.title}
▢ *Dauer:* ${p.duration}
└───────────`
   conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react(done)
    } catch {  	
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ Fehler beim Herunterladen des Videos'
     conn.sendFile(m.chat, url, 'fb.mp4', `
┌─⊷ *TIKTOK DL*
▢ *Benutzername:* ${nickname} ${description ? `\n▢ *Beschreibung:* ${description}` : ''}
└───────────`, m)
m.react(done)
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = false

export default handler
