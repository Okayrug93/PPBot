import { ChannelType, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';
import { setMessage, setActiveChannelsRunning, startTask } from '@/services/activeChannel.service';

export const execute = async (interaction: ChatInputCommandInteraction) => {
    let channel;
    if (interaction.options.resolved) {
        channel = await interaction.options.getChannel('channel', true);
    }

    if (channel.type !== ChannelType.GuildText) {
        sendError(interaction);
        return;
    }
    setMessage(await channel.send({ embeds: [createEmbed()] }));
    startTask();
    setActiveChannelsRunning(true);
    interaction.reply({ content: 'active channel feature now live', ephemeral: true });
};

const sendError = async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply({ content: 'not a valid channel', ephemeral: true });
};

const createEmbed = () => {
    return new EmbedBuilder()
        .setColor('#000000')
        .setTitle('Showing channels with activity in the past 300 seconds')
        .setDescription('No active channels');
};
