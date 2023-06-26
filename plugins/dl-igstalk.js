
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Eingabe des Instagram-Benutzernamens\n\n📌Beispiel: ${usedPrefix + command} ishowspeed` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKER* 
▢ *🔖Nummer:* ${res.name} 
▢ *🔖Benutzername:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Folgt:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Beiträge:* ${res.postsH}

▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
