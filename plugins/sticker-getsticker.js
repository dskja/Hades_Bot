
import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Geben Sie ein, wonach Sie suchen möchten \n\n📌*Beispiel:*\n${usedPrefix + command} homero`
    
    //Result https://getstickerpack.com/
    try {
   /*let res = await fetch(global.API('fgmods', '/api/getsticker', { q:text }, 'apikey'))
   let json = await res.json()*/
   let json = await fg.StickerSearch(text) 
    m.reply(`
✅ Ergebnis

▢ *Titel:* ${json.title}
▢ *Sticker insgesamt:* ${json.sticker_url.length}
▢ *Geschätzte Bearbeitungszeit:* *${json.sticker_url.length * 2} s*`)
    for (let i of json.sticker_url) {
        const stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        //await delay(1500)
    }
    } catch (e) {
	m.reply(`❇️ Fehler: Versuchen Sie es mit einem anderen`)
	} 
}
handler.help = ['getsticker']
handler.tags = ['sticker']
handler.command = ['getsticker', 'getstick', 'stickersearch', 'sticksearch'] 
handler.diamond = false

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
