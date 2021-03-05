const db = require('megadb');
module.exports = async (client, message) => {
let levels_db = new db.crearDB("xp_niveis");
if(message.author.bot) return;

if(!levels_db.tiene(`${message.author.id}`)) levels_db.establecer(`${message.author.id}`, {xp: 0, nivel: 0});
let xp = await levels_db.obtener(`${message.author.id}.xp`)
let nivel = await levels_db.obtener(`${message.author.id}.nivel`)
let randomxp = Math.floor(Math.random() * 100) + 1;
let levelup = nivel * nivel * 100;
if((xp + randomxp) >= levelup) {
// levels_db.establecer(`${message.author.id}`, {xp: 0, nivel: parseInt(nivel+1)})
  levels_db.sumar(`${message.author.id}.nivel`,parseInt(nivel+1))
const embed = {
  "title": "LEVEL UP!",
  "description": "parabéns {<@"+message.author+">} você passou para o nivel **"+parseInt(nivel+1)+"** \n`continue para ganhar mais xp e passar de nivel!`",
  "color": 65476,
  "footer": {
    "text": "se vc ganhar 1000 de xp você passa de nivel"
  }
};
message.channel.send({ embed });
} else{
   levels_db.sumar(`${message.author.id}.xp`, randomxp)
       
      return;
       }

     }
