import {CommandOptions, Embed} from "discord-rose";
import {checkInboxAsync} from "tempmail.lol";
import UserEmails from "../util/UserEmails";

const command: CommandOptions = {
    command: "checkinbox",
    interaction: {
        name: "checkinbox",
        description: "Check your inbox",
    },
    exec: async (ctx): Promise<any> => {
        const inbox = UserEmails.getAddress(ctx.author.id);
        if(!inbox) {
            return ctx.reply("You don't have an inbox. Use `/generate` to create one.");
        }
        
        const emails = await checkInboxAsync(inbox[1] || "");
        if(emails.length === 0) {
            return ctx.reply("You don't have any emails.");
        }
        
        const embed = new Embed();
        embed.title(`You have ${emails.length} emails.`);
        emails.forEach((email) => {
            embed.field(`From: ${email.from}; subject: ${email.subject}`, email.body, false);
        });
        return ctx.reply(embed);
    }
}

export default command;
