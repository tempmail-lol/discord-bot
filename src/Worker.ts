
import {Worker} from "discord-rose";
import {resolve} from "path";

const worker = new Worker();
worker.commands.prefix("/").load(resolve(__dirname, "./commands"));
