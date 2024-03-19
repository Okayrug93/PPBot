import { commands } from '@/commands';
import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration
    ]
});

client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
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
