let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command}) => {
if (!text) throw `teksnya mana bang?\n\n${usedPrefix + command} melcanz`
let res = await fetch(API('amel', '/textpro/neon', { text }, 'apikey'))
if (!res.ok) throw eror
let img = await res.buffer()
if (!img) throw img
conn.sendFile(m.chat, img, 'neon.jpg', wm, m)
}
handler.help = ['neon'].map(v => v + '<teks>')
handler.tags = ['maker']
handler.command = /^(neon)$/

module.exports = handler