import { ChatInputCommandInteraction } from 'discord.js';

export const execute  = async (interaction : ChatInputCommandInteraction ) => {
    //Get User and transform it into GuildMember
    const member = await interaction.guild.members.fetch(interaction.options.getUser('newly-zood'));

    //Removes all roles from said GuildMember except @everyone, cuz it cannot be removed
    member.roles.cache.map(async (role) => { 
        if(role.name !== '@everyone') { await member.roles.remove(role);}
    });
    //Add troll role from process.env
    await member.roles.add(process.env.TROLL_ID);

    interaction.reply({ content : 'L bozo got locked up', ephemeral: true});
};