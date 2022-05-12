#!

import {Master} from "discord-rose";
import {resolve} from "path";

const master = new Master(resolve(__dirname, "./", "Worker.js"), {
    token: process.env["TOKEN"] || "",
});

master.start();
