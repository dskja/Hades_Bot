
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

m.reply( `Hallo ${taguser} Brauchen Sie Hilfe?  Dann geben sie /help ein`)

handler.customPrefix = /^(bot|hadesbot|abhishek)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
