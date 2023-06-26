
let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {

  let chat = global.db.data.chats[m.chat]
  if (!chat.welcome) throw `✳️ Um diesen Befehl zu verwenden, müssen Sie die Begrüßung mit *${usedPrefix}on* welcome aktivieren`
  let te = `
  ┌─⊷ *EVENTS*
  ▢ welcome
  ▢ bye
  ▢ promote
  ▢ demote
  └───────────
  
  📌 Beispiel :
  
  *${usedPrefix + command}* welcome @user`

if (!event) return await m.reply(te) 

let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`✅ ${event} simulieren...`)
switch (event.toLowerCase()) {
        case 'add':
        case 'bienvenida':
        case 'invite':
        case 'welcome':
           act = 'add'
         break 
        case 'bye':
        case 'despedida':
        case 'leave':
        case 'remove':
         act = 'remove'
        break

        case 'promote':
        case 'promover':
          act = 'promote'
        break

        case 'demote':
        case 'degradar':
         act = 'demote'
        break

default:

throw te
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})
}
handler.help = ['simulate <event> @user']
handler.tags = ['group']
handler.command = ['simular', 'simulate', 'simuliere'] 
handler.admin = true
handler.group = true

export default handler
