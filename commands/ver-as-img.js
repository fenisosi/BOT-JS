//comando para ver imagens aleatorias!
const Discord = require("discord.js");
const {all} = require('../DATABASE/image/Randon-images.json')
exports.run = async (client, message, args) => {
  
  if (all.length === 0) {
        let embed = new Discord.MessageEmbed()
          .setTitle('❌| não a imagems na minha database')
        return message.channel.send(embed)
      } else {

        var randomNumber = Math.floor(Math.random() * all.length)
        
        let embed = new Discord.MessageEmbed()
          .setAuthor('roleta de imagens!')
          .setImage(all[randomNumber])
        message.channel.send(embed)
      }
}