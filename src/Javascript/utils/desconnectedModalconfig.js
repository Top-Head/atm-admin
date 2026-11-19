import { ShowErrorScreen } from "./showErrorScreen.js";

const deconnectedModaL = document.querySelector(".deconnectedModaL");
const reloadingPageBtn = document.querySelector(".reloadingPageBtn");

reloadingPageBtn.addEventListener("click", () => verificarConexaoInternet());

function OpenDesconnectedModal() {
  deconnectedModaL.classList.add("show");
}
function CloseDesconnectedModal() {
  deconnectedModaL.classList.remove("show");
}
function verificarConexaoInternet() {
  fetch("https://www.google.com", { mode: "no-cors" })
    .then((response) => {
      CloseDesconnectedModal();
    })
    .catch((error) => {
      ShowErrorScreen();
      OpenDesconnectedModal();
    });
}
verificarConexaoInternet();
