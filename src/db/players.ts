import { Player } from '../types/types.js';

const players: Player[] = [];

export const getAllPlayers = () => {
    return players;
};

export const getPlayerByName = (name: string): Player | null => {
    return players.find((player) => player.name === name) ?? null;
};

export const createPlayer = (player: Player): void => {
    players.push(player);
};

export const updatePlayer = (player: Player): Player | null => {
    const index = players.findIndex((player) => player.name === player.name);

    if (index === -1) {
      return null;
    } else {
      players[index] = player;
      return players[index];
    }
};

export const deletePlayer = (name: string): Player | null => {
    const index = players.findIndex((player) => player.name === name);
    if (index === -1) {
      return null;
    } else {
      players.splice(index, 1);
      return players[index];
    }
};