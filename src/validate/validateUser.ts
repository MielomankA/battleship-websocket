import { AuthData } from "../types/auth.js";
import { getPlayerByName } from "../db/players.js";

export function validateUser(data: AuthData, isLogin: boolean = false) {
    const { name, password } = data;

    if (!name || !password) {
        return { 
            valid: false,
            errorText: "Name and password cannot be empty"
        };
    }

    const existingPlayer = getPlayerByName(name);

    if (isLogin) {
        if (!existingPlayer) {
            return { valid: false, errorText: "User does not exist" };
        }
        if (existingPlayer.password !== password) {
            return { valid: false, errorText: "Wrong password" };
        }

        return { valid: true, player: existingPlayer };
    } else {
        if (existingPlayer) {
            return { valid: false, errorText: "User already exists" };
        }
        return { valid: true };
    }
}
