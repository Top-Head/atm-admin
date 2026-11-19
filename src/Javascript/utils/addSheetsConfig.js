import { putStockSheet } from "../API/putStockSheets.js";
import { openCloseAddSheetsModal } from "./openAddSheetsModal.js";

const btnConfirmedAddSheets = document.querySelector(".confirm-add-sheets");
const addSheetsButton = document.querySelector(".add-sheets-button");
const CloseAddSheetsModalContainer = document.querySelector(
  ".close-add-sheets-modal"
);
const addSheetsNumberValue = document.querySelector(".addSheetsNumberValue");
const upAddSheetsNumber = document.querySelector(".upAddSheetsNumber");
const donwAddSheetsNumber = document.querySelector(".donwAddSheetsNumber");
const addSheetsForm = document.querySelector("#addSheetsForm");

let countSheetsNumber = 0;

addSheetsButton.addEventListener("click", () => openCloseAddSheetsModal());
CloseAddSheetsModalContainer.addEventListener("click", () =>
  openCloseAddSheetsModal()
);
upAddSheetsNumber.addEventListener("click", () => {
  countSheetsNumber++;
  addSheetsNumberValue.innerHTML = countSheetsNumber;
});

donwAddSheetsNumber.addEventListener("click", () => {
  countSheetsNumber--;
  addSheetsNumberValue.innerHTML = countSheetsNumber;
});

addSheetsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await putStockSheet(countSheetsNumber);
});
