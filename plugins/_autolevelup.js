//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
*👻 LEVEL UP*

Herzlichen Glückwunsch sie sind ein Level aufgestiegen!

 *${before}* ‣  *${user.level}*
 Rolle : *${user.role}*
  
       ℍ𝕒𝕕𝕖𝕤𝔹𝕠𝕥 𝕓𝕪 𝕐𝕒𝕤𝕤𝕚𝕟 👻
 zum deaktivieren dies eingeben:
*/off autolevelup*
	`.trim())
    }
}

