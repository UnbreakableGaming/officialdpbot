const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if(client.config.ticketSystem === "off") return;
    message.delete()
    
    if(!client.checkPermissions(client.config.permissions.notice)) return

    const notATicketChannel = new Discord.RichEmbed()
        .setColor(client.config.colour)
        .setTitle("🚫 You can only use this in a ticket channel")    

    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(notATicketChannel)
    
    message.channel.send(`<@${message.channel.topic}>`)
    var notice = new Discord.RichEmbed()
        .setTitle(`👋  Hello! Do you still need assistance?`)
        .setDescription(`Please update us on your issue so we can help you out.
                         If you no longer need any help, please close the ticket with \`${client.config.prefix}close\`.
                         \nIf there is no response within **24 hours**, this ticket will be **closed** by a member of staff. Thank you.`)
        .setColor(client.config.colour)
        .setFooter(`${message.guild.name} Support ➤ Command ran by ${message.author.username}`)              

    message.channel.send(notice)
}