import { Command } from '@/classes/Command.class';
import { data } from '@/commands/startActive.command/startActive.data';
import { execute } from '@/commands/startActive.command/startActive.execution';

export const startActive: Command = {
    data,
    execute
};
