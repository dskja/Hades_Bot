import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import { canLevelUp, xpRange } from '../lib/levelling.js';
import fetch from 'node-fetch';
import fs from 'fs';
import moment from 'moment-timezone';
import { promises } from 'fs';
import { join } from 'path';
const time = moment.tz('Europe/Berlin').format('HH');

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.quoted?.sender || m.mentionedJid?.[0] || (m.fromMe ? conn.user.jid : m.sender);
  if (!(who in global.db.data.users)) throw `✳️ Der Benutzer ist nicht in meiner Datenbank gefunden`
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Abhi.jpg')
  let user = global.db.data.users[who];
  let { name, exp, diamond, lastclaim, registerDate, regTime, age, level, role, warns } = user;
  let { min, xp, max } = xpRange(user.level, global.multiplier);
  let math = max - xp;
  let prem = global.prems.includes(who.split`@`[0]);
  let sn = createHash('md5').update(who).digest('hex');
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
  let taguser = `@${m.sender.split("@")[0]}`;
  let str = `
╔════ ⋆⋅☆⋅⋆ ════╗
║  𝐇𝐚𝐥𝐥𝐨𝐨, ${name}  ║
╚════ ⋆⋅☆⋅⋆ ════╝

🤖 *Bot Info*
├─ ❏ Bot Name: ${botname}
├─ ❏ Owner Name: Yassin
├─ ❏ Developers Name: Yassin
├─ ❏ Platform: Hades Server
└─ ❏ *Uptime*: ${clockString(process.uptime() * 1000)}

👤 *User Info*
├─ ❏ Name: ${name}
├─ ❏ Number: ${taguser}
├─ ❏ Premium: ${prem ? '✅' : '❌'}
└─ ❏ Total Users: ${rtotalreg}

📅 *Calendar*
├─ ❏ Time: ${moment.tz('Europe/Berlin').format('HH:mm:ss')}
└─ ❏ Date: ${moment.tz('Europe/Berlin').format('LL')}
 
🏆 *Leveling*
├─ ❏ Level: ${level}
├─ ❏ Role: ${role}
├─ ❏ Experience: ${exp} (${math} to Next Level)
└─ ❏ Diamonds: ${diamond}

🚨 *Warnings*
└─ ❏ Warnings Count: ${warns || 0}

📜 *Commands*
├─ ❏ ${usedPrefix}list - Display all available commands
└─ ❏ ${usedPrefix}${command} - Display this menu

Made with ❤️ by Yassin
`.trim();
  conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] });
  m.react('👍');
};

handler.help = ['menu'];
handler.tags = ['group'];
handler.command = ['menu3', 'help3', 'h3', 'command3'];

export default handler;

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}