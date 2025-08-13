import { renderCourt, renderCourtSegments } from "../components/court.js";

import { state, setMake, setMiss } from "../helpers/state.js";

export function renderCourtTaking() {
  const courtTaking = document.createElement("div");
  courtTaking.classList.add("court-taking");

  const courtContainer = document.createElement("div");
  courtContainer.classList.add("court-container");

  const court = renderCourt();
  court.append(renderCourtSegments());

  const tableWrapper = document.createElement("div");
  tableWrapper.classList.add("court-logs");

  const table = document.createElement("table");

  tableWrapper.append(table);

  court.addEventListener("click", (event) => {
    if (event.target.id === "court__segments") {
      return;
    }

    const arr = Array.from(court.children[2].children);

    setMake(arr.indexOf(event.target));

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.textContent = state.players[state.selectedPlayerId].lastname;
    td2.textContent = event.target.id;
    td3.textContent = "MADE";

    tr.append(td1, td2, td3);
    table.append(tr);
  });

  court.addEventListener("contextmenu", () => {
    event.preventDefault();
    const arr = Array.from(court.children[2].children);

    setMiss(arr.indexOf(event.target));

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.textContent = state.players[state.selectedPlayerId].lastname;
    td2.textContent = event.target.id;
    td3.textContent = "MISSED";

    tr.append(td1, td2, td3);
    table.append(tr);
  });

  courtContainer.append(court);
  courtTaking.append(courtContainer, tableWrapper);

  return courtTaking;
}
