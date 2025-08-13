import { state } from "./state.js";

export function caclArea(playerId, indexArray) {
  let makes = 0;
  let shots = 0;

  for (const index of indexArray) {
    makes = makes + state.players[playerId].makes[index];
    shots = shots + state.players[playerId].shots[index];
  }

  return [makes, shots];
}
