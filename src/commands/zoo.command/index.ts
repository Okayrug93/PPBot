import { Command } from '@/commands/Command.class';
import { data } from '@/commands/zoo.command/zoo.data';
import { execute } from '@/commands/zoo.command/zoo.execution';

export const zoo: Command = {
    data,
    execute
};
