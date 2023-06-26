import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `✳️ Geben Sie ein, wonach Sie auf Wikipedia suchen möchten` 
	
    try {
	const link =  await axios.get(`https://de.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`▢ *Wikipedia*

‣ Gesucht: : ${wik}

${resulw}`)
} catch (e) {
  m.reply('⚠️ Keine Ergebnisse gefunden ')
}
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki','wikipedia'] 


export default handler
