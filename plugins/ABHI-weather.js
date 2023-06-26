import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Einen Ort zum Suchen geben*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `「 📍 」Ort: ${name}\n「 🗺️ 」Land: ${Country}\n「 🌤️ 」Sicht: ${Weather}\n「 🌡️ 」Temperatur: ${Temperature}\n「 💠 」 Mindesttemperatur: ${Minimum_Temperature}\n「 📛 」 Höchsttemperatur ${Maximum_Temperature}\n「 💦 」Feuchtigkeit ${Humidity}\n「 🌬️ 」 Windgeschwinigkeit: ${Wind}`
m.reply(wea)
} catch {
return "*Fehler*"}}
handler.help = ['wetter *<Ort>*']
handler.tags = ['herramientas']
handler.command = /^(climate|wetter|weather)$/i
export default handler
