import { PLAYERS } from "../mocks/PLAYERS.js";
import { setNewPlayer } from "../helpers/state.js";

export function createPageIntro() {
  const mainIntro = document.createElement("main");
  mainIntro.id = "intro";

  const formNewPlayer = document.createElement("form");
  formNewPlayer.innerHTML = `
      <fieldset>
        <legend>Create New Player</legend>
        <input type="text" placeholder="Имя" id="new-player-firstname" />
        <input type="text" placeholder="Фамилия" id="new-player-lastname" />
        <input type="number" placeholder="номер майки" id="jersey-number" />
        <select id="new-player-team">
          <option value="0" selected>No Team</option>
          <option value="1">Tsmoki Minsk</option>
          <option value="2">CSKA Moscow</option>
        </select>
        <button type="button" id="new-player-create">создать</button>
      </fieldset>
  `;

  const formImportPlayer = document.createElement("form");
  formImportPlayer.innerHTML = `
      <fieldset>
        <legend>Import / Export Player</legend>
        <input type="file" id="input-import-player"/>
        <button type="button" id="btn-export-player">Export</button>
      </fieldset>
  `;

  mainIntro.append(formNewPlayer, formImportPlayer);

  const inputAddPlayerJSON = formImportPlayer.querySelector(
    "#input-import-player"
  );

  inputAddPlayerJSON.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = (e) => {
      try {
        const fileObj = JSON.parse(e.target.result);

        setNewPlayer(fileObj);

        if (fileObj) {
          alert("Игрок успешно импортирован");
        }
      } catch (error) {
        alert("Ошибка при импорте, проверьте исходный файл");
      }
    };
  });

  const btnExportPlayerJSON =
    formImportPlayer.querySelector("#btn-export-player");
  btnExportPlayerJSON.addEventListener(
    "click",
    exportToJsonFile.bind(this, PLAYERS[0])
  );

  function exportToJsonFile(jsonData) {
    const dataStr = JSON.stringify(jsonData, null, 2);

    const dataBlob = new Blob([dataStr], {
      type: "application/json",
    });

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(dataBlob);
    downloadLink.download = "playerJSON";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  const btnCreateNewPlayer = formNewPlayer.querySelector("#new-player-create");
  btnCreateNewPlayer.addEventListener("click", () => {
    const firstname = formNewPlayer.querySelector("#new-player-firstname");
    const lastname = formNewPlayer.querySelector("#new-player-lastname");
    const jerseyNumber = formNewPlayer.querySelector("#jersey-number");
    const teamId = formNewPlayer.querySelector("#new-player-team");

    const objPlayer = {
      id: 0,
      firstname: firstname.value,
      lastname: lastname.value,
      photo: "./src/new-player.png",
      teamId: +teamId.value,
      number: jerseyNumber.value,
      shots: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      makes: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    };

    setNewPlayer(objPlayer);

    alert("Новый игрок создан успешно");

    firstname.value = "";
    lastname.value = "";
    jerseyNumber.value = null;
    teamId.value = 0;
  });

  return mainIntro;
}
