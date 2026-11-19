import { PostNewStudantAccount } from "../API/PostNewStudantAccount.js";

const addAccountModal = document.querySelector(".modal-addaccount");
const openAddAccountModalbtn = document.querySelector(
  ".openAddAccountModalbtn"
);
const closeAddAccountModal = document.querySelector(".closeAddAccount");

function CloseAndOpenAddAccountModal() {
  addAccountModal.classList.toggle("show");
}

openAddAccountModalbtn.addEventListener("click", () =>
  CloseAndOpenAddAccountModal()
);
closeAddAccountModal.addEventListener("click", () =>
  CloseAndOpenAddAccountModal()
);

const signUpNewStudantBtn = document.querySelector(".signUpNewStudantBtn");
const newStudantName = document.querySelector("#NewStudantName");
const newStudantEmail = document.querySelector("#NewStudantEmail");
const newStudantCourse = document.querySelector("#NewStudantCourse");
const newStudantGrade = document.querySelector("#NewStudantGrade");
const newStudantContact = document.querySelector("#NewStudantContact");
const formCreateNewStudant = document.querySelector("#NewStudantForm");
const progressiveBar = document.querySelector(".progressiveBar");
const inputs = formCreateNewStudant.querySelectorAll("input");

let progress = 0;
setInterval(() => {
  if (newStudantName.value != "") {
    progress = 20;
    progressiveBar.style = `width:${progress}%;`;
  }
  if (newStudantName.value != "" && newStudantEmail.value != "") {
    progress = 40;
    progressiveBar.style = `width:${progress}%;`;
  }
  if (
    newStudantName.value != "" &&
    newStudantEmail.value != "" &&
    newStudantCourse.value != ""
  ) {
    progress = 60;
    progressiveBar.style = `width:${progress}%;`;
  }
  if (
    newStudantName.value != "" &&
    newStudantEmail.value != "" &&
    newStudantCourse != "" &&
    newStudantGrade.value != ""
  ) {
    progress = 80;
    progressiveBar.style = `width:${progress}%;`;
  }
  if (
    newStudantName.value != "" &&
    newStudantEmail.value != "" &&
    newStudantCourse != "" &&
    newStudantGrade.value != "" &&
    newStudantContact.value != "" &&
    newStudantContact.value > 900000000
  ) {
    progress = 100;
    progressiveBar.style = `width:${progress}%;`;
  }
}, 1000);
formCreateNewStudant.addEventListener("submit", async (event) => {
  event.preventDefault();
  CloseAndOpenAddAccountModal();
  const NewStudant = {
    name: newStudantName.value,
    email: newStudantEmail.value,
    grade: newStudantGrade.value,
    course: newStudantCourse.value,
    contact: newStudantContact.value,
    rfid: String(Math.random() * 100000000),
  };

  await PostNewStudantAccount(NewStudant);
});
