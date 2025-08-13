import { createPlayersSection } from "../components/players-section.js";
import { renderCourtTaking } from "../components/court-taking.js";

export function createPageTakeStats() {
  const takeStats = document.createElement("main");

  const PlayersSection = createPlayersSection();

  takeStats.id = "take-stats";
  takeStats.style.display = "none";

  const courtTaking = renderCourtTaking();

  takeStats.append(PlayersSection, courtTaking);

  return takeStats;
}
