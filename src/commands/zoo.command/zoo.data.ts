import { SlashCommandBuilder } from 'discord.js';
import { PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('zoo-troll')
    .setDescription('Place the provided user in the zoo! (beware, removes all their roles)')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(
        (option) =>  
            option.setName('newly-zood')
                .setDescription('The person you want to have locked up in the zoo')
                .setRequired(true))
    .toJSON();