import { createTeamSection } from "../components/team-section.js";

export function createPageSwapper() {
  const swapper = document.createElement("main");

  swapper.id = "swapper";
  swapper.style.display = "none";

  const TeamSection = createTeamSection();

  swapper.append(TeamSection);

  return swapper;
}
