import { patchStudentBalance } from "../API/updateStudantsBalance.js";
import { getCookie } from "./getCookies.js";

const openAddBalanceModal = document.querySelector(".openAddBalanceModal");
const okAddBalanceBtn = document.querySelector(".ok-add-balance");
const containerBalance = document.querySelector(".balance");
const closeBalanceBtn = document.querySelector(".closeBalanceBtn");

const balanceValue = document.querySelector("#balance-Value");

const containerStudentDetail = document.querySelector(".modal-student-details");

export function CloseStudentDetail() {
  containerStudentDetail.classList.remove("show");
}

function OpenAndCloseBalanceModal() {
  CloseStudentDetail();
  containerBalance.classList.toggle("show");
}

openAddBalanceModal.addEventListener("click", () => OpenAndCloseBalanceModal());
closeBalanceBtn.addEventListener("click", () => OpenAndCloseBalanceModal());

okAddBalanceBtn.addEventListener("click", async () => {
  OpenAndCloseBalanceModal();
  const ref = getCookie("studentRef");
  const balance = balanceValue.value;
  await patchStudentBalance(balance, ref);
});
