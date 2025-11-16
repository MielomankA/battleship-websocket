import { Player } from "../types/types.js";
import { getPlayerByName } from "../db/players.js";
import { createPlayer } from "../db/players.js";
import { AuthData } from "../types/auth.js";

let nextIndex = 1;

export function registerPlayer(data: AuthData) {
    const { name, password } = data;

    const existingPlayer = getPlayerByName(name);

    if (existingPlayer) {
        return {
            name,
            index: existingPlayer.index,
            error: true,
            errorText: "Player already exists"
        };
    }

    const player: Player = {
        name,
        password,
        index: nextIndex++
    };

    createPlayer(player);

    return player;
}
