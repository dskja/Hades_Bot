
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ Der Benutzer wurde in meiner Datenbank nicht gefunden`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌 Nummer* : @${who.split('@')[0]}
▢ *💎 Diamanten* : ${user.diamond}
▢ *💎 Gold* : ${user.gold}
▢ *💎 Stein* : ${user.rock}
▢ *💎 Smaragd* : ${user.emerald}
▢ *💎 Rang* : ${user.role}
▢ *💎 Gesundheit* : ${user.health}
▢ *💎 Holz* : ${user.wood}
▢ *💎 Heiltränke* : ${user.potion}
▢ *💎 Eisen* : ${user.iron}
▢ *💎 Geld* : ${user.money}
▢ *⬆️XP* : Insgesamt ${user.exp}
└──────────────
`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance', 'saldo', 'konto', 'diamanten'] 

export default handler
