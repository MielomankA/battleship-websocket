import { Player } from "../types/types.js";
import { getPlayerByName } from "../db/players.js";
import { createPlayer } from "../db/players.js";
import { AuthData } from "../types/auth.js";

let nextIndex = 1;

export function registerPlayer(data: AuthData) {
    const { name, password } = data;

    const player: Player = {
        name,
        password,
        index: nextIndex++
    };

    createPlayer(player);

    return player;
}
