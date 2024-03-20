import { commands } from '@/commands';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { activeChannels } from './activeChannel.service';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', async (msg) => {
    if (msg.author.bot || msg.guildId !== process.env.GUILD_ID) return;

    activeChannels.set(msg.channelId, Math.floor(Date.now() / 1000));
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isChatInputCommand()) {
        commands
            .find((command) => command.data.name === interaction.commandName)
            ?.execute(interaction);
    }

    if (interaction.isAutocomplete()) {
        commands
            .find(
                (command) => command.data.name === interaction.commandName && command.autocomplete
            )
            ?.autocomplete(interaction);
    }
});

export { client };
