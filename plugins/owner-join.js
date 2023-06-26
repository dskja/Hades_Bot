
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) return conn.sendButton(m.chat, `*Bot zu einer Gruppe einladen*\n\nHallo @${m.sender.split('@')[0]}\n\n\n`.trim(), igfg, null, [
       ['Alquilar', `${usedPrefix}buyprem`]] , m, { mentions: [m.sender] })
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `✳️ Senden Sie den Gruppenlink\n\n 📌 Beispiel:\n *${usedPrefix + command}* <linkwa> <Tage>\n\n die Zahl ist die Anzahl der Tage, die der Bot in der Gruppe sein wird ` 
  if (!code) throw `✳️ Link ungültig`
  if (!args[1]) throw `📌 Fehlende Anzahl von Tagen\n\n Beispiel:\n *${usedPrefix + command}* <linkwa> 2`
  if (isNaN(args[1])) throw `✳️ Nur eine Zahl, die die Tage angibt, an denen der Bot in der Gruppe sein wird!`
  let owbot = global.owner[1] 
  m.reply(`Warte 3 Sekunden, ich werde der Gruppe beitreten`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ Ich bin erfolgreich der Gruppe beigetreten \n\n≡ Gruppeninfo \n\n *Name :* ${await conn.getName(res)}\n\nHadesBot wird nach \n\n${msToDate(global.db.data.chats[res].expired - now)} automatisch die Gruppe verlassen`)
 
 if (e.length) await conn.reply(res, `🏮 Hallo Leute

@${owbot} er ist mein Erschaffer, falls Sie Zweifel haben
Ich wurde von *${m.name}* eingeladen`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `Ok, entspannt euch alle.`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *GRUPPE EINLADUNG*{m.sender.split('@')[0]} hat *${conn.user.name}* zur Gruppe eingeladen\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nHadesBot wird nach \n\n${msToDate(global.db.data.chats[res].expired - now)} automatisch die Gruppe verlassen`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *GRUPPENEINLADUNG*\n\n@${m.sender.split('@')[0]} wurde soeben von *${conn.user.name}* zur Gruppe eingeladen\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nHadesBot wird nach \n\n ${msToDate(global.db.data.chats[res].expired - now)} automatisch die Gruppe verlassen`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✳️ HadesBot wurde erfolgreich zu der Gruppe eingeladen\n\n${await conn.getName(res)}\n\nHadesBot wird die Gruppe nach *${msToDate(global.db.data.chats[res].expired - now)}* automatisch verlassen`).then(async () => {
     let mes = `Hii 👋🏻
     
*${conn.user.name}* ist einer der geräteübergreifenden WhatsApp-Bots, die mit Node.js entwickelt wurden, *${conn.user.name}* wurde gerade von *${m.name}* eingeladen

um das Menü des Bots zu sehen, geben sie dies ein

${usedPrefix}help
@${conn.user.jid.split('@')[0]} wird automatisch die Gruppe verlassen nach \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.sendButton(res, mes, igfg, null, [[`✆ Owner`, `${usedPrefix}fgowner`], [`⦙☰ Menü`, `${usedPrefix}help`]], m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `✳️ Entschuldigung, der Bot ist der Gruppe beigetreten`
      }
}
handler.help = ['join <chat.whatsapp.com> <Tage>']
handler.tags = ['owner']
handler.command = ['join', 'invite'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Tage*\n ', h, ' *Stunden*\n ', m, ' *Minuten*\n ', s, ' *Sekunden* '].map(v => v.toString().padStart(2, 0)).join('')
}
