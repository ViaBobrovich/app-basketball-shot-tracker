export function createHeader() {
  history.pushState(null, null, "#/intro");

  const linkIntro = document.createElement("a");
  linkIntro.classList.add("rout-selected");
  linkIntro.innerText = "INTRO";
  linkIntro.addEventListener("click", () => {
    history.pushState(null, null, "#/intro");

    for (let index = 0; index < nav.children.length; index++) {
      nav.children[index].classList.remove("rout-selected");
    }
    linkIntro.classList.add("rout-selected");

    const pages = document.querySelectorAll("main");

    for (let index = 0; index < pages.length; index++) {
      pages[index].style.display = "none";
    }

    const pageIntro = document.querySelector("main#intro");
    pageIntro.style.display = "block";
  });

  const linkTakeStats = document.createElement("a");
  linkTakeStats.innerText = "TAKE-STATS";
  linkTakeStats.addEventListener("click", () => {
    history.pushState(null, null, "#/take-stats");

    for (let index = 0; index < nav.children.length; index++) {
      nav.children[index].classList.remove("rout-selected");
    }
    linkTakeStats.classList.add("rout-selected");

    const pages = document.querySelectorAll("main");

    for (let index = 0; index < pages.length; index++) {
      pages[index].style.display = "none";
    }

    const pageTakeStats = document.querySelector("main#take-stats");

    pageTakeStats.style.display = "block";
  });

  const linkWatchStats = document.createElement("a");
  linkWatchStats.innerText = "Watch-STATS";
  linkWatchStats.addEventListener("click", () => {
    history.pushState(null, null, "#/watch-stats");

    for (let index = 0; index < nav.children.length; index++) {
      nav.children[index].classList.remove("rout-selected");
    }
    linkWatchStats.classList.add("rout-selected");

    const pages = document.querySelectorAll("main");

    for (let index = 0; index < pages.length; index++) {
      pages[index].style.display = "none";
    }

    const pageWatchStats = document.querySelector("main#watch-stats");

    pageWatchStats.style.display = "block";
  });

  const linkSwapper = document.createElement("a");
  linkSwapper.innerText = "SWAPPER";
  linkSwapper.addEventListener("click", () => {
    history.pushState(null, null, "#/swapper");

    for (let index = 0; index < nav.children.length; index++) {
      nav.children[index].classList.remove("rout-selected");
    }
    linkSwapper.classList.add("rout-selected");

    const pages = document.querySelectorAll("main");

    for (let index = 0; index < pages.length; index++) {
      pages[index].style.display = "none";
    }

    const pageSwapper = document.querySelector("main#swapper");

    pageSwapper.style.display = "block";
  });

  const nav = document.createElement("nav");
  nav.append(linkIntro, linkTakeStats, linkWatchStats, linkSwapper);

  const header = document.createElement("header");
  header.classList.add("app-header");
  header.append(nav);

  return header;
}
