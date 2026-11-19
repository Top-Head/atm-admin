import { getCookie } from "./getCookies.js";
import { patchStockSheet } from "../API/patchSheetsStock.js";

const stock = getCookie("stock");
const UpdateSheetsBtn = document.querySelector(".confirm-edite-sheets");
const editeSheetsModal = document.querySelector(".edite-sheets-modal");
const openModalEditeSheetsBtn = document.querySelector(".edite-sheets-button");
const fromEditeSheets = document.querySelector("#fromEditeSheets");
const closeModalEditeSheets = document.querySelector(
  ".close-edite-sheets-modal"
);
const editeSheetsNumberValue = document.querySelector(
  "#editeSheetsNumberValue"
);

const upAddSheetsNumberEdite = document.querySelector(
  ".upAddSheetsNumberEdite"
);
const donwAddSheetsNumberEdite = document.querySelector(
  ".donwAddSheetsNumberEdite"
);

export function openAndCloseModalEditeSheets() {
  editeSheetsModal.classList.toggle("show");
}

editeSheetsNumberValue.value = JSON.parse(stock).sheets;

openModalEditeSheetsBtn.addEventListener("click", () =>
  openAndCloseModalEditeSheets()
);

closeModalEditeSheets.addEventListener("click", () =>
  openAndCloseModalEditeSheets()
);

upAddSheetsNumberEdite.addEventListener("click", () => {
  editeSheetsNumberValue.value++;
});

donwAddSheetsNumberEdite.addEventListener("click", () => {
  editeSheetsNumberValue.value--;
});

fromEditeSheets.addEventListener("submit", async (e) => {
  e.preventDefault();
  openAndCloseModalEditeSheets();
  await patchStockSheet(editeSheetsNumberValue.value);
});
