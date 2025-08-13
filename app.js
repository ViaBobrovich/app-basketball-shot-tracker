import { createHeader } from "./components/header.js";
import { createPageIntro } from "./pages/intro.js";
import { createPageTakeStats } from "./pages/take-stats.js";
import { createPageWatchStats } from "./pages/watch-stats.js";
import { createPageSwapper } from "./pages/swapper.js";

export function initApp() {
  const root = document.querySelector("#root");

  const fragment = document.createDocumentFragment();

  fragment.append(createHeader());
  fragment.append(createPageIntro());
  fragment.append(createPageTakeStats());
  fragment.append(createPageWatchStats());
  fragment.append(createPageSwapper());

  root.append(fragment);
}
