import {CommandOptions} from "discord-rose";

const command: CommandOptions = {
    command: "help",
    interaction: {
        name: "help",
        description: "Displays a list of commands.",
    },
    exec: (ctx) => {
        ctx.reply({
            embeds: [{
                title: "Available commands",
                description: ctx.worker.commands.commands?.map(c => `\`/${c.command}\` - ${c.interaction?.description}`).join("\n") || "No commands available.",
                color: 0x00FF00,
            }],
        });
    }
}

export default command;
