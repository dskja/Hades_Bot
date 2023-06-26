
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {
	var limit
     if((isOwner || isPrems)) limit = 1200
     else limit = 100
   if (!args[0]) throw `✳️ Geben Sie den mediafire-Link neben dem Befehl ein`
    if (!args[0].match(/mediafire/gi)) throw `❎ Der Link ist nicht korrekt`
    m.react(rwait)
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(`https://image.thum.io/get/fullpage/${u}`)).buffer()
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = (isPrems || isOwner ? limit : limit) * 1012 < filesize
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Name:* ${filename}
▢ *Größe:* ${filesizeH}
▢ *Erweiterung:* ${ext}
▢ *Hochgeladen:* ${aploud}
${isLimit ? `\n▢ Die Datei überschreitet das Download-Limit *+${limit} MB*\nUpgrade auf Premium, um Dateien mit mehr als *900 MB* herunterladen zu können` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
    
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
}
handler.help = ['mediafire <url>']
handler.tags = ['dl', 'prem']
handler.command = ['mediafire', 'mfire'] 
handler.diamond = false
handler.premium = false

export default handler
