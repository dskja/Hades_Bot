
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 Diese Gruppe unterstützt kein NSFW \n\nAktiveren sie es mit:  \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ Sie müssen 18 Jahre alt sein, um diese Funktion nutzen zu können.`
  if (!text) throw `✳️ Was soll ich suchen?\n📌 Verwendung : *${usedPrefix + command} <Suche>*\n\nBeispiel:- Fortnite oder Sie können auch den Link verwenden\nBeispiel: /xnxx link *`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Ungültiger Link  *xnxx.com*`)
        try {
            let xn = await (await fetch(global.API('fgmods', '/api/dowloader/xnxxdl', { url: text }, 'apikey'))).json()
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌Titel*: ${xn.result.title}
▢ *⌚Dauer:* ${xn.result.duration}
▢ *🎞️Qualität:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Fehler: Wir bemühen uns um eine Lösung`)
 }
    } else {
        try {
            let res = await fetch(global.API('fgmods', '/api/search/xnxxsearch', { text }, 'apikey'))
            let json = await res.json()
             let listSections = []
              Object.values(json.result).map((v, index) => {
              listSections.push([`${index}┃ ${v.title}`, [
                    ['🎥 MP4', `${usedPrefix}xnxxdl ${v.link}`, `▢ 📌 *Titel* : ${v.title}`]
                  ]])
              })
              //return conn.sendList(m.chat, '  ≡ *XNXX DL*🔎', `\n 🔞 Ergebnisse:\n *${text}*`, fgig, `Hier klicken`, listSections, m)
              let ff = json.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (json.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Fehler: Wir bemühen uns, ihn zu beheben`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = false
handler.premium = false
handler.register = true

export default handler
