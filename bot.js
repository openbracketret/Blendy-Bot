const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(msg.content);
    if (msg.content.startsWith("!blend")) {
        const user = msg.mentions.users.first();
        if (user){
            const member = msg.guild.member(user);
            const channelNames = [
                "BLADE 1",
                "BLADE 2",
                "BLADE 3",
                "BLADE 4",
                "BLADE 5",
            ];
            const channelIDs = [
                "691989211129053205",
                "691989174403727420",
                "691989152660455500",
                "691989126764822649",
                "691988840159772713"
            ];
            const speedOptions = [
                "slow",
                "medium",
                "fast",
                "turbo"
            ];

            const args = msg.content.split(" ");
            var speed = args[2];
            var runs = args[3];
            console.log("SPEED: " + speed);
            console.log("RUNS: " + runs);
            if (member){
                if (speedOptions.includes(speed)){
                    switch(speed){
                        case "slow":
                            speed = 3;
                            break;
                        case "medium":
                            speed = 2;
                            break;
                        case "fast":
                            speed = 1;
                            break;
                        case "turbo":
                            speed = 0;
                            break;
                    }
                    if (!Number.isInteger(runs)){
                        for (var i = 0; i < runs; i++){
                            for (var j = 0; j < channelNames.length; j++){
                                var chan = msg.guild.channels.find(channel => channel.name === channelOptions[j]);
                                // var chan = client.channels.get(channelIDs[j]);
                                setTimeout(function(){
                                    mem.setVoiceChannel(chan); 
                                },speed); 
                            }
                        }
                    } else {
                        msg.reply("Please enter a valid value for run number");
                    }
                } else {
                    msg.reply(`invalid speed. Options are: ${speedOptions}`)
                }
            } else {
                msg.reply("Some weird shit happened mate");
            }
        } else {
            msg.reply("Invalid user. Retard.");
        }
    } else {

    }
});

client.login('NjkyMDE3NzQxNzY2MzI4MzMx.XnoZ2A.R2QWHd_uv5q5UHrwsm9l4cLQS-M');