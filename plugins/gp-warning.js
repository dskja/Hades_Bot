
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Jemanden markieren oder erwähnen\n\n📌 Beispiel : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ Der Benutzer wird in meiner Datenbank nicht gefunden`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Gewarnter Benutzer* ⚠️

▢ *Admin:* ${name}
▢ *Benutzer:* @${who.split`@`[0]}
▢ *Warnungen:* ${warn + 1}/${war}
▢ *Grund:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *Vorsicht* ⚠️
Sie haben eine Warnung von einem Admin erhalten

▢ *Warnungen:* ${warn + 1}/${war} 
wenn Sie *${war}* Warnungen erhalten, werden Sie automatisch aus der Gruppe entfernt`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ Der Benutzer hat die *${war}*-Warnungen überschritten, daher wird er entfernt`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ Du wurdest aus der Gruppe *${groupMetadata.subject}* entfernt, weil du *${war}* mal gewarnt wurdest`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
