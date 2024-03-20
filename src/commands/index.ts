import { test } from '@/commands/test.command/';
import { zoo } from '@/commands/zoo.command';
import { startActive } from './startActive.command';
import { stopActive } from './stopActive.command';

export const commands = [test, zoo, startActive, stopActive];
