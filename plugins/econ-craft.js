let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = 'Yassin'
  let wm = 'HadesBot'

let lgocraft = `
█▀▀▀▀█▀▀▀█▀▀▀▀█
  ᴄʀᴀꜰᴛ ᴛᴀʙʟᴇ
█▄▄▄▄█▄▄▄█▄▄▄▄█`

  let caption = `
▧ Spitzhacke ⛏️
▧ Schwert ⚔️
▧ Angelrute 🎣
*❏ REZEPT*
▧ Spitzhacke ⛏️
〉 10 Holz
〉 5 Steine
〉 5 Eisen
〉 20 Fassern
▧ Schwert ⚔️
〉 10 Holz
〉 15 Eisen
▧ Angelrute 🎣
〉 10 Holz
〉 2 Eisen
〉 20 Fassern
▧ Rüstung 🥼
〉 30 Eisen
〉 1 Smaragd
〉 5 Diamanten
▧ Atm 💳
〉3 Smaragd
〉6 Diamanten
〉10k Euro
`
const sections = [
   {
	title: "Werkzeuge herstellen",
	rows: [
	    {title: "Schwer ⚔️", rowId: ".craft sword", description: "Die Herstellung eines Schwertes"},
	    {title: "Spitzhacke ⛏️", rowId: ".craft pickaxe", description: "Herstellen einer Spitzhacke"},
	    {title: "Angelrute 🎣", rowId: ".craft fishingrod", description: "Eine Angelrute herstellen"},
	    {title: "Rüstung 🥼", rowId: ".craft armor", description: "Eine Rüstung herstellen"},
	    {title: "Atm 💳", rowId: ".craft atm", description: "Herstellen eines Atm (das ist aber illegal)"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: " H E R S T E L L U N G ",
  sections
}

  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxe > 0) return m.reply('Sie haben bereits eine Spitzhacke 🔨')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return m.reply(`Not enough goods!\nTo make a pickaxe. you need : \n10 wood🪵 \n5 iron⛓\n20 String🕸️\n5 rock1 🪨`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 5
            user.rock -= 5
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            m.reply("Erfolg bei der Herstellung einer Spitzhacke 🔨.")
            break
          case 'sword':
          if (user.sword > 0) return m.reply('Sie haben bereits ein Schwert 🗡️')
            if(user.wood < 10 || user.iron < 15) return m.reply(`Nicht genug Ressourcen!\nUm ein Schwert herzustellen, brauchst du :\n10 Holz🪵\n15 Eisen⛓️`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 15
            global.db.data.users[m.sender].sword += 1
            user.sworddurability = 40
            m.reply("Erfolgreiche Herstellung eines Schwertes 🗡️")
            break
          case 'fishingrod':
          if (user.fishingrod > 0) return m.reply('Sie haben bereits eine Angelrute 🎣')
            if(user.wood < 20 || user.iron < 5 || user.string < 20) return m.reply(`Nicht genügend Ressourcen!\nUm eine Angelrute zu bauen, braucht man :\n10 Holz🪵\n5 Eisen⛓\n20 Schnüre🕸️`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 2
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].fishingrod += 1
            user.fishingroddurability = 40
            m.reply("Erfolgreiche Herstellung einer Angelrute 🎣.")
            break
          case 'armor':
          if (user.armor > 0) return m.reply('Sie haben bereits eine Rüstung 🥼')
            if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return m.reply(`Nicht genügend Ressourcen!\nUm eine Rüstung herzustellen benötigen Sie:\n30 Eisen ⛓️\n1 Smaragd ❇️\n5 Diamanten 💎`)
            global.db.data.users[m.sender].emerald -= 1
            global.db.data.users[m.sender].iron -= 30
            global.db.data.users[m.sender].diamond -= 5
            global.db.data.users[m.sender].armor += 1
            user.armordurability = 50
            m.reply("Erfolg bei der Herstellung einer Rüstung 🥼.")
            break
            case 'atm':
          if (user.atm > 0) return m.reply('Sie haben bereits eine Atm 💳')
            if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return m.reply(`nicht genügend Ressourcen!\nFür die Herstellung eines Atm benötigen Sie :\n10k Euro 💹\n3 Smaragde ❇️\n6 Diamanten 💎`)
            global.db.data.users[m.sender].emerald -= 3
            global.db.data.users[m.sender].money -= 10000
            global.db.data.users[m.sender].diamond -= 6
            global.db.data.users[m.sender].atm += 1
            global.db.data.users[m.sender].fullatm = 5000000
            m.reply("Erfolgreiche Herstellung einer Atm 💳")
            break

          default:
            return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menü`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['craft', 'bauen']
handler.tags = ['rpg']
handler.command = /^(craft|bauen|crafting|chant)/i

export default handler
