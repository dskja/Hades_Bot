let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Abhi.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `❀° ┄──•••───╮
       𝘽𝙊𝙏 𝙈𝙀𝙉𝙐  
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 ${usedPrefix}ping
⎪⌲👑 ${usedPrefix}uptime
⎪⌲👑 ${usedPrefix}bot
⎪⌲👑 ${usedPrefix}owner
⎪⌲👑 ${usedPrefix}script
⎪⌲👑 ${usedPrefix}runtime
⎪⌲👑 ${usedPrefix}infobot
⎪⌲👑 ${usedPrefix}donate
⎪⌲👑 ${usedPrefix}groups
⎪⌲👑 ${usedPrefix}blocklist
⎪⌲👑 ${usedPrefix}listprem
⎪⌲👑    ABHISHEK-SER
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
     𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐  
╰───•••──┄ °❀     
┏━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 ${usedPrefix}banchat
⎪⌲👑 ${usedPrefix}unbanchat
⎪⌲👑 ${usedPrefix}banuser
⎪⌲👑 ${usedPrefix}unbanuser
⎪⌲👑 ${usedPrefix}Broadcast
⎪⌲👑 ${usedPrefix}Broadcastgc
⎪⌲👑 ${usedPrefix}join
⎪⌲👑 ${usedPrefix}setppbot
⎪⌲👑 ${usedPrefix}setprefix
⎪⌲👑 ${usedPrefix}resetprefix
⎪⌲👑 ${usedPrefix}getfile
⎪⌲👑 ${usedPrefix}getplugin
┗━━━ʕ•㉨•ʔ━━━┛

${readMore} 
❀° ┄──•••───╮
      𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲💎${usedPrefix}kick *<@tag>*
⎪⌲💎${usedPrefix}promote *<@tag>*
⎪⌲💎 ${usedPrefix}demote *<@tag>*
⎪⌲💎 ${usedPrefix}infogroup
⎪⌲💎 ${usedPrefix}resetlink
⎪⌲💎 ${usedPrefix}link
⎪⌲💎 ${usedPrefix}setpp *<image>*
⎪⌲💎 ${usedPrefix}setname *<text>*
⎪⌲💎 ${usedPrefix}setdesc *<text>*
⎪⌲💎 ${usedPrefix}setwelcome *<text>*
⎪⌲💎 ${usedPrefix}setbye *<text>*
⎪⌲💎 ${usedPrefix}hidetag *<text/image/audio/vid>*
⎪⌲💎 ${usedPrefix}warn *<@tag>*
⎪⌲💎 ${usedPrefix}unwarn *<@tag>*
⎪⌲💎 ${usedPrefix}group *<open/close>*
⎪⌲💎 ${usedPrefix}enable
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
       𝘿𝙇 𝙈𝙀𝙉𝙐 
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲💎 ${usedPrefix}play
⎪⌲💎 ${usedPrefix}song
⎪⌲💎 ${usedPrefix}yta <link>
⎪⌲💎 ${usedPrefix}ytv <link>
⎪⌲💎 ${usedPrefix}ytmp3 <link>
⎪⌲💎 ${usedPrefix}ytmp4 <link>
⎪⌲💎 ${usedPrefix}gimage
⎪⌲💎 ${usedPrefix}pinterest
⎪⌲💎 ${usedPrefix}mediafire <link>
⎪⌲💎 ${usedPrefix}gdrive <link>
⎪⌲💎 ${usedPrefix}gitclone <link>
⎪⌲💎 ${usedPrefix}twitter <link>
⎪⌲💎 ${usedPrefix}tiktok <link>
⎪⌲💎 ${usedPrefix}tiktokstalk
⎪⌲💎 ${usedPrefix}instagram <link>
⎪⌲💎 ${usedPrefix}spotify
⎪⌲💎 ${usedPrefix}facebook <link>
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
       𝙀𝘾𝙊𝙉𝙊𝙈𝙔 
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 ${usedPrefix}claim/daily
⎪⌲👑 ${usedPrefix}weekly
⎪⌲👑 ${usedPrefix}monthly
⎪⌲👑 ${usedPrefix}leaderboard
⎪⌲👑 ${usedPrefix}bet
⎪⌲👑 ${usedPrefix}heal
⎪⌲👑 ${usedPrefix}craft
⎪⌲👑 ${usedPrefix}balance
⎪⌲👑 ${usedPrefix}shop
⎪⌲👑 ${usedPrefix}sell
⎪⌲👑 ${usedPrefix}adventure
⎪⌲👑 ${usedPrefix}opencrate
⎪⌲👑 ${usedPrefix}mine
⎪⌲👑 ${usedPrefix}work
⎪⌲👑 ${usedPrefix}transfer
⎪⌲👑 ${usedPrefix}todiamond
⎪⌲👑 ${usedPrefix}tomoney
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
      𝙁𝙐𝙉 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 ${usedPrefix}character
⎪⌲👑 ${usedPrefix}truth
⎪⌲👑 ${usedPrefix}dare
⎪⌲👑 ${usedPrefix}flirt
⎪⌲👑 ${usedPrefix}gay
⎪⌲👑 ${usedPrefix}shayeri
⎪⌲👑 ${usedPrefix}ship
⎪⌲👑 ${usedPrefix}waste
⎪⌲👑 ${usedPrefix}simpcard
⎪⌲👑 ${usedPrefix}hornycard
⎪⌲👑 ${usedPrefix}ytcomment
⎪⌲👑 ${usedPrefix}stupid
⎪⌲👑 ${usedPrefix}lolicon
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
      𝐴𝑁𝐼𝑀𝐸 𝑀𝐸𝑁𝑈
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 ${usedPrefix}waifu
⎪⌲👑 ${usedPrefix}neko
⎪⌲👑 ${usedPrefix}loli
⎪⌲👑 ${usedPrefix}couplepp
⎪⌲👑 ${usedPrefix}toanime
⎪⌲👑 ${usedPrefix}naruto
⎪⌲👑 ${usedPrefix}itachi
⎪⌲👑 ${usedPrefix}akira
⎪⌲👑 ${usedPrefix}asuna
⎪⌲👑 ${usedPrefix}akiyama
⎪⌲👑 ${usedPrefix}boruto
⎪⌲👑 ${usedPrefix}hornycard
⎪⌲👑 ${usedPrefix}ayuzawa
⎪⌲👑 ${usedPrefix}anna
⎪⌲👑 ${usedPrefix}chiho
⎪⌲👑 ${usedPrefix}chitoge
⎪⌲👑 ${usedPrefix}deidara
⎪⌲👑 ${usedPrefix}erza
⎪⌲👑 ${usedPrefix}elaina
⎪⌲👑 ${usedPrefix}emilia
⎪⌲👑 ${usedPrefix}hestia
⎪⌲👑 ${usedPrefix}hinata
⎪⌲👑 ${usedPrefix}inori
⎪⌲👑 ${usedPrefix}isuzu
⎪⌲👑 ${usedPrefix}kagura
⎪⌲👑 ${usedPrefix}kaori
⎪⌲👑 ${usedPrefix}keneki
⎪⌲👑 ${usedPrefix}kurumi
⎪⌲👑 ${usedPrefix}madara
⎪⌲👑 ${usedPrefix}mikasa
⎪⌲👑 ${usedPrefix}miku
⎪⌲👑 ${usedPrefix}minato
⎪⌲👑 ${usedPrefix}nezuko
⎪⌲👑 ${usedPrefix}sagiri
⎪⌲👑 ${usedPrefix}sasuke
⎪⌲👑 ${usedPrefix}sakura
⎪⌲👑 ${usedPrefix}kotori
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
      𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐 
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 ${usedPrefix}tictactoe
⎪⌲👑 ${usedPrefix}delttt
⎪⌲👑 ${usedPrefix}math
⎪⌲👑 ${usedPrefix}math answer
⎪⌲👑 ${usedPrefix}ppt
⎪⌲👑 ${usedPrefix}slot
⎪⌲👑 ${usedPrefix}casino
⎪⌲👑 ${usedPrefix}yourmom
⎪⌲👑 ${usedPrefix}teri mummy
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
     𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 ${usedPrefix}sticker
⎪⌲👑 ${usedPrefix}take
⎪⌲👑 ${usedPrefix}scircle
⎪⌲👑 ${usedPrefix}smaker
⎪⌲👑 ${usedPrefix}sremovebg
⎪⌲👑 ${usedPrefix}getsticker
⎪⌲👑 ${usedPrefix}emojimix
⎪⌲👑 ${usedPrefix}toimg
⎪⌲👑 ${usedPrefix}tovid
⎪⌲👑 ${usedPrefix}ttp
⎪⌲👑 ${usedPrefix}ttp2
⎪⌲👑 ${usedPrefix}ttp3
⎪⌲👑 ${usedPrefix}ttp4
⎪⌲👑 ${usedPrefix}ttp5
⎪⌲👑 ${usedPrefix}attp
⎪⌲👑 ${usedPrefix}attp2
⎪⌲👑 ${usedPrefix}attp3
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
     𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 ${usedPrefix}autosticker
⎪⌲👑 ${usedPrefix}pdf
⎪⌲👑 ${usedPrefix}whatmusic
⎪⌲👑 ${usedPrefix}calc
⎪⌲👑 ${usedPrefix}google
⎪⌲👑 ${usedPrefix}lyrics
⎪⌲👑 ${usedPrefix}readmore
⎪⌲👑 ${usedPrefix}ssweb
⎪⌲👑 ${usedPrefix}tts
⎪⌲👑 ${usedPrefix}translate
⎪⌲👑 ${usedPrefix}tourl
⎪⌲👑 ${usedPrefix}wikipedia
⎪⌲👑 ${usedPrefix}nowa
⎪⌲👑 ${usedPrefix}qrmaker
⎪⌲👑 ${usedPrefix}readqr
⎪⌲👑 ${usedPrefix}styletext
⎪⌲👑 ${usedPrefix}weather
⎪⌲👑 ${usedPrefix}siri
⎪⌲👑 ${usedPrefix}alexa
⎪⌲👑 ${usedPrefix}dalle
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
    𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨
╰───•••──┄ °❀`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'all menu'] 

export default handler
