//comando para adiconar uma imagem aleatória ao bot
const Discord = require("discord.js");
//const fs = require('fs');
const dbfunc = require("../db.js")

exports.run = async (client, message, args) => {

 if (args[0]) {
   if (args[0].endsWith('.jpg') || args[0].endsWith('.png') || args[0].endsWith('.jpeg')) {
     message.delete()
     if (args[0]){
       dbfunc.addyiffy(args[0])
    
      return message.channel.send({content: "adicionado com sucesso!",embed: {color: 34047,image: {url: ""+args[0]+""}}}).then(msg => msg.delete({timeout: 5000}))
        }
      } else {
        return message.channel.send('esse link não leva a alguma imagem1\n \nos links devem ser redicecionados para imagens em .png .jpg/.jpeg !')
      }
    } else {
      return message.channel.send('esse link não leva a alguma imagem \n \nos links devem ser redicecionados para imagens em .png .jpg/.jpeg !')
    }
    
}