import { PLAYERS } from "../mocks/PLAYERS.js";
import { TEAMS } from "../mocks/TEAMS.js";

export const state = {
    players: PLAYERS,
    teams: TEAMS,
    selectedPlayerId: 0,
};

export let stateChangeListeners = [];

export function setNewPlayer(playerObj) {
    if (Array.isArray(playerObj)) {
        Object.assign(PLAYERS[0], playerObj[0]);
    } else {
        Object.assign(PLAYERS[0], playerObj);
    }
    stateChangeListeners.forEach((listener) => listener());
}

export function setSelectedPlayerId(playerId) {
    state.selectedPlayerId = playerId;
    stateChangeListeners.forEach((listener) => listener());
}

export function setMake(shotIndex) {
    state.players[state.selectedPlayerId].makes[shotIndex] =
        state.players[state.selectedPlayerId].makes[shotIndex] + 1;

    state.players[state.selectedPlayerId].shots[shotIndex] =
        state.players[state.selectedPlayerId].shots[shotIndex] + 1;

    stateChangeListeners.forEach((listener) => listener());
}

export function setTeam(playerId, teamId) {
    state.players[playerId].teamId = teamId;

    stateChangeListeners.forEach((listener) => listener());
}

export function setMiss(shotIndex) {
    state.players[state.selectedPlayerId].shots[shotIndex] =
        state.players[state.selectedPlayerId].shots[shotIndex] + 1;

    stateChangeListeners.forEach((listener) => listener());
}
export function subscribe(listener) {
    stateChangeListeners.push(listener);
}
