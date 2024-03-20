import { ChannelType, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('start-active')
    .setDescription('Start the active channels function of the bot')
    .addChannelOption((option) =>
        option
            .setName('channel')
            .setDescription('The channel where the active channels will be listed')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .toJSON();
