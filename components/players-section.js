import { state, setSelectedPlayerId, subscribe } from "../helpers/state.js";

export function createPlayersSection() {
  const playerSection = document.createElement("section");
  playerSection.classList.add("player-section");

  const playerList = document.createElement("div");
  playerList.classList.add("player-list");
  const playerTable = document.createElement("table");
  playerList.append(playerTable);

  const playerCard = document.createElement("div");
  playerCard.classList.add("player-card");

  function render() {
    playerTable.innerHTML = "";
    state.players.forEach((player) => {
      const tr = document.createElement("tr");

      const td1 = document.createElement("td");
      td1.innerHTML = `${player.firstname}`;
      const td2 = document.createElement("td");
      td2.innerHTML = `${player.lastname}`;
      const td3 = document.createElement("td");
      td3.innerHTML = `#${player.number}`;
      const td4 = document.createElement("td");
      td4.innerHTML = `${state.teams[player.teamId].name}`;

      if (player.id === state.selectedPlayerId) {
        tr.classList.add("player-tr--selected");
      }

      tr.append(td1, td2, td3, td4);

      tr.addEventListener("click", () => {
        setSelectedPlayerId(player.id);
      });

      playerTable.append(tr);

      playerCard.innerHTML = "";

      state.players.forEach((p) => {
        if (p.id === state.players[state.selectedPlayerId].id) {
          const nameBlock = document.createElement("div");
          nameBlock.classList.add("player-card__name-block");

          const skewLight = document.createElement("div");
          skewLight.classList.add("player-card__skewLight");

          const name = document.createElement("div");
          name.classList.add("player-card__name");
          const firstName = document.createElement("div");

          firstName.innerHTML = `${
            state.players[state.selectedPlayerId].firstname
          }`;
          const lastName = document.createElement("div");
          lastName.innerHTML = `${
            state.players[state.selectedPlayerId].lastname
          }`;

          const number = document.createElement("div");
          number.innerHTML = `#${state.players[state.selectedPlayerId].number}`;
          const teamName = document.createElement("div");
          teamName.innerHTML = `${
            state.teams[state.players[state.selectedPlayerId].teamId].name
          }`;

          name.append(firstName, lastName, number, teamName);

          nameBlock.append(skewLight, name);

          const imgBlock = document.createElement("div");
          imgBlock.classList.add("player-card__img-block");

          const imgPlayer = document.createElement("img");
          imgPlayer.src = p.photo;

          const imgTeam = document.createElement("img");
          imgTeam.src = state.teams[p.teamId]?.logo;

          const skewShadow = document.createElement("div");
          skewShadow.classList.add("player-card__skewShadow");

          imgBlock.append(imgTeam, skewShadow, imgPlayer);

          playerCard.append(imgBlock, nameBlock);
        }
      });
    });

    playerSection.append(playerList, playerCard);
  }

  render();

  subscribe(render);

  return playerSection;
}
