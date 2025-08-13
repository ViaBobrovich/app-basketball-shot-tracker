import { state, subscribe, setTeam } from "../helpers/state.js";

export function createTeamSection() {
    const teamsSection = document.createElement("section");
    teamsSection.classList.add("team-section");

    function render() {
        teamsSection.innerHTML = "";

        state.teams.forEach((el) => {
            const teamListContainer = document.createElement("div");
            teamListContainer.classList.add("team-section__list-container");

            teamListContainer.style.backgroundImage = `url(${el.logo})`;

            const teamList = document.createElement("ul");

            teamList.classList.add("team-section__list");
            teamList.id = "ul" + el.id;
            const header = document.createElement("header");

            header.innerHTML = `${el.name} - ${el.city}`;

            teamListContainer.append(header);

            teamList.addEventListener("dragenter", (event) => {
                if (event.dataTransfer.types[0] === "text/plain") {
                    event.preventDefault();
                    teamList.classList.add("drag-over");
                }
            });

            teamList.addEventListener("dragover", (event) => {
                if (event.dataTransfer.types[0] === "text/plain") {
                    event.preventDefault();
                    event.dataTransfer.dropEffect = "move";
                }
            });

            teamList.addEventListener("dragleave", (event) => {
                if (!teamList.contains(event.relatedTarget)) {
                    teamList.classList.remove("drag-over");
                }
            });

            teamList.addEventListener("drop", (event) => {
                event.preventDefault();
                const liId = event.dataTransfer.getData("text/plain");
                const li = document.getElementById(liId);

                if (!teamList.contains(li)) {
                    teamList.appendChild(li);
                    const playerId = liId.substring(2);
                    const teamId = +teamList.id.substring(2);
                    setTeam(playerId, teamId);
                }

                teamList.classList.remove("drag-over");
            });

            for (const player of state.players) {
                if (player.teamId === el.id) {
                    const li = document.createElement("li");
                    li.innerHTML = `${player.firstname} - ${player.lastname}`;
                    li.draggable = "true";
                    li.id = "li" + player.id;
                    teamList.append(li);

                    li.addEventListener("dragstart", (event) => {
                        event.dataTransfer.setData(
                            "text/plain",
                            event.target.id
                        );
                        event.dataTransfer.effectAllowed = "move";

                        event.target.style.opacity = "0.5";
                    });

                    li.addEventListener("dragend", (event) => {
                        event.target.style.opacity = "1";
                    });
                }
            }
            teamListContainer.append(teamList);
            teamsSection.append(teamListContainer);
        });
    }

    render();

    subscribe(render);

    return teamsSection;
}
