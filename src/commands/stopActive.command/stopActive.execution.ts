import { getMessage, setActiveChannelsRunning, stopTask } from '@/services/activeChannel.service';
import { ChatInputCommandInteraction } from 'discord.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const execute = async (interaction: ChatInputCommandInteraction) => {
    setActiveChannelsRunning(false);
    await getMessage().delete();
    stopTask();
    interaction.reply({ content: 'active channel feature now stoppped', ephemeral: true });
};
