import { config as dotEnvConfig } from 'dotenv';
import { client } from '@/services/discordClient.service';
dotEnvConfig();
(async () => {
    await client.login(process.env.TOKEN);
})();
