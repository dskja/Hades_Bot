//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Sie sind bereits registriert\n\nMöchten Sie sich erneut registrieren?\n\n 📌 Verwenden Sie diesen Befehl, um Ihren Datensatz zu entfernen \n*${usedPrefix}unreg* <Seriennummer>`
  if (!Reg.test(text)) throw `⚠️ Format falsch\n\n ✳️ Verwenden Sie diesen Befehl: *${usedPrefix + command} name.alter*\n📌Beispiel : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Der Name darf nicht leer sein'
  if (!age) throw '✳️ Alter kann nicht leer sein'
  if (name.length >= 30) throw '✳️ Ihr angegebener Name ist zu lang' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Sie sind zu alt um HadesBot verwenden zu können'
  if (age < 5) throw '🚼  Sie sind zu jung um HadesBot verwenden zu können '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTRIERT* 」─
▢ *Nummer:* ${name}
▢ *Alter* : ${age} years
▢ *Seriennummer* :
${sn}
└──────────────

 *${usedPrefix}help* um das Menü abzurufen
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar', 'registrieren'] 

export default handler

