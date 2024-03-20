import { Command } from '@/classes/Command.class';
import { data } from '@/commands/test.command/test.data';
import { execute } from '@/commands/test.command/test.execution';

export const test: Command = {
    data,
    execute
};
