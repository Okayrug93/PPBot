import {
    AutocompleteInteraction,
    ChatInputCommandInteraction,
    RESTPostAPIChatInputApplicationCommandsJSONBody
} from 'discord.js';

export class Command {
    data: RESTPostAPIChatInputApplicationCommandsJSONBody;
    execute: (interacion: ChatInputCommandInteraction) => Promise<void>;
    autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
}
