import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('stop-active')
    .setDescription('Stop the active channels function of the bot')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .toJSON();
