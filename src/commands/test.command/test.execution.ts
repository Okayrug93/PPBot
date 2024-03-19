import { ChatInputCommandInteraction } from 'discord.js';

export const execute = async (interaction: ChatInputCommandInteraction) => {
    const interactionTime = interaction.createdTimestamp;
    const initialTime = new Date().getTime();

    const msg = await interaction.reply({
        content: 'Pinging...',
        fetchReply: true
    });

    const finalTime = new Date().getTime();

    msg.edit(
        `Pong!\nMy Ping: ${initialTime - interactionTime}ms\nRound Trip: ${
            finalTime - interactionTime
        }ms`
    );
};
