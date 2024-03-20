import { Command } from '@/classes/Command.class';
import { data } from '@/commands/stopActive.command/stopActive.data';
import { execute } from '@/commands/stopActive.command/stopActive.execution';

export const stopActive: Command = {
    data,
    execute
};
