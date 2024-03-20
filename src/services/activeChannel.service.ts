import { ToadScheduler, SimpleIntervalJob, AsyncTask } from 'toad-scheduler';
import { EmbedBuilder, Message } from 'discord.js';

export const activeChannels = new Map<string, number>();
let activeChannelsRunning = false;

export const setMessage = (receivedMessage: Message) => {
    message = receivedMessage;
};

export const getMessage = () => {
    return message;
};

export const setActiveChannelsRunning = (receivedBoolean: boolean) => {
    activeChannelsRunning = receivedBoolean;
};

export const stopTask = () => scheduler.stop();
export const startTask = () => scheduler.addSimpleIntervalJob(job);

let message: Message;

const scheduler = new ToadScheduler();

const task = new AsyncTask(
    'Update #active-channels',
    async () => {
        if (activeChannelsRunning && activeChannels.size > 0) {
            let desc = '';
            for (const [key, value] of activeChannels) {
                if (value + 300 <= Math.floor(Date.now() / 1000)) {
                    activeChannels.delete(key);
                    return;
                }
                desc = desc.concat(`- <#${key}> <t:${value}:R>\n`);
            }

            await message.edit({
                embeds: [EmbedBuilder.from(message.embeds[0]).setDescription(desc)]
            });
            return;
        } else if (activeChannelsRunning) {
            await message.edit({
                embeds: [EmbedBuilder.from(message.embeds[0]).setDescription('no active channels')]
            });
        }
    },
    (err: Error) => {
        console.error(err);
    }
);

const job = new SimpleIntervalJob({ seconds: 5 }, task);
