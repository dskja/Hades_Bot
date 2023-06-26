
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ Geben Sie den Benutzernamen eines TikTok-Benutzers ein `
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
▢ *🔖 Name:* ${res.name}
▢ *🔖 Benutzername:* ${res.username}
▢ *👥 Follower:* ${res.followers}
▢ *🫂 Folgt:* ${res.following}
▢ *📌 Bio* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
