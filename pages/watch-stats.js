import { createPlayersSection } from "../components/players-section.js";
import { renderCourtWatching } from "../components/court-watching.js";

export function createPageWatchStats() {
  const watchStats = document.createElement("main");
  const PlayersSection = createPlayersSection();

  watchStats.id = "watch-stats";
  watchStats.style.display = "none";

  const courtWatching = renderCourtWatching();

  watchStats.append(PlayersSection, courtWatching);

  return watchStats;
}
