
export async function all(m) {
	
    // when someone sends a group link to the bot's dm
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `*Bot zu einer Gruppe einladen* 
        
  Hallo @${m.sender.split('@')[0]} 
  Sie können den Bot auch einer Gruppe hinzufügen oder den Besitzer kontaktieren 
  mehr Infos durch Klick auf den Button
`.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })
    m.react('👻')
  } 
  
   return !0
}
