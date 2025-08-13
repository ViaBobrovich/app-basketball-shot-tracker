import {
  renderCourt,
  renderCourtAngelsColored,
  renderCourtSegmentsColored,
  renderCourtSidesColored,
  renderCourtDistancesColored,
} from "./court.js";

export function renderCourtWatching() {
  const courtWatching = document.createElement("div");
  courtWatching.classList.add("court-watching");

  const courts = document.createElement("div");

  const court = renderCourt();
  const court2 = renderCourt();
  const court3 = renderCourt();
  const court4 = renderCourt();

  court.append(renderCourtSegmentsColored());
  court2.append(renderCourtAngelsColored());
  court3.append(renderCourtDistancesColored());
  court4.append(renderCourtSidesColored());

  courts.append(court, court2, court3, court4);

  courtWatching.append(courts);

  return courtWatching;
}
