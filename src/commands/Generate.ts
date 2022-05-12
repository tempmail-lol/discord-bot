import {CommandOptions} from "discord-rose";
import {createInboxAsync} from "tempmail.lol";
import UserEmails from "../util/UserEmails";

const command: CommandOptions = {
    command: "generate",
    interaction: {
        name: "generate",
        description: "Generate a new email with https://tempmail.lol",
    },
    exec: async (ctx) => {
        const inbox = await createInboxAsync();
        
        UserEmails.setAddress(ctx.author.id, inbox.address, inbox.token);
        
        await ctx.reply("The email has been generated: " + inbox.address);
    }
}

export default command;
