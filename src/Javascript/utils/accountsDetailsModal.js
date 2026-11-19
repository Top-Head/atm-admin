import { ShowErrorScreen } from "./showErrorScreen.js";
import { PatchUpdateAdminData } from "../API/patchAdminAccount.js";
import { getCookie } from "./getCookies.js";

const dataAccount = document.querySelector(".data-account");

const closeModalAccountsDetails = document.querySelector(
  ".closeModalAccountsDetails"
);

dataAccount.addEventListener("click", showAccountDetailsModal);
closeModalAccountsDetails.addEventListener("click", () => {
  showAccountDetailsModal();
});

export function showAccountDetailsModal() {
  const modalAccountDetails = document.querySelector(".modal-account-details");
  modalAccountDetails.classList.toggle("show");
}

const adminForm = document.querySelector("#AdminForm");
const adminEmail = document.querySelector("#adminEmail");
const adminPassword = document.querySelector("#adminPassword");
const adminName = document.querySelector("#adminName");
const adminContact = document.querySelector("#adminContact");
const adminPasswordConfirm = document.querySelector("#adminPasswordConfirm");

adminForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const adminUpdateData = {
    name: adminName.value,
    email: adminEmail.value,
    number: adminContact.value,
    password: adminPassword.value,
  };

  if (adminPassword.value != adminPasswordConfirm.value) {
    adminPasswordConfirm.style = "border: 1px solid var(--red)";
    ShowErrorScreen(
      "A confirmação da Senha não é igual a Senha digitada, por favor redigite a mesma"
    );
    return;
  }
  if (adminContact.value < 900000000) {
    adminContact.style = "border: 1px solid var(--red)";
    ShowErrorScreen("Este Numero não é valido");
    return;
  } else {
    showAccountDetailsModal();
    await PatchUpdateAdminData(adminUpdateData);
  }
});
const admin = JSON.parse(getCookie("admin"));
function renderAdminDateInInputs() {
  adminName.value = admin.name;
  adminEmail.value = admin.email;
  adminContact.value = admin.number;
}
renderAdminDateInInputs();
