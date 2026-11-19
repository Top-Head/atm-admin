import { deleteStudantAccount } from "../API/deletestudantsAccounts.js";
import { setCookie } from "../utils/setCookies.js";
import { getStudentAccounts } from "../DB/student.js";
import { getExtractStudantAccount } from "../API/getExtraxctStudent.js";

const deleteStudantAccountBtn = document.querySelector(
  ".deleteStudantAccountBtn"
);
const closeStudentDetail = document.querySelector(".closeStudentDetail");
const containerStudentDetail = document.querySelector(".modal-student-details");
const studentName = document.querySelector(".studentName");
const studentRef = document.querySelector(".studentRef");
const studentCourse = document.querySelector(".studentCourse");
const studentGrade = document.querySelector(".studentGrade");
const studentDateSession = document.querySelector(".studentDateSession");
const studentBalance = document.querySelector(".studentBalance");
const studentContact = document.querySelector(".studentContact");
const studantEmail = document.querySelector(".studantEmail");
const studentValidade = document.querySelector(".studentValidade");
const getExtractStudantAccountBtn = document.querySelector(
  ".getExtractStudantAccountBtn"
);

export function CloseAndOpenStudentDetail() {
  Text = "Close";
  containerStudentDetail.classList.toggle("show");
}

closeStudentDetail.addEventListener("click", () => CloseAndOpenStudentDetail());

export async function getStudentDetail(studantRef) {
  const students = await getStudentAccounts();
  const studant = students.find((i) => i.ref === studantRef);
  return studant;
}

async function renderStudentDetail(studentRe) {
  const studant = await getStudentDetail(studentRe);
  setCookie("studentRef", studentRe, 1);

  getExtractStudantAccountBtn.id = studant.ref;
  deleteStudantAccountBtn.id = studant.ref;
  studentName.innerHTML = studant.name;
  studentRef.innerHTML = studant.ref;
  studentCourse.innerHTML = studant.course;
  studentGrade.innerHTML = studant.grade;
  studentDateSession.innerHTML = studant.dateSession;
  studentBalance.innerHTML = studant.balance;
  studentContact.innerHTML = studant.number;
  studantEmail.innerHTML = studant.email;
  studentValidade.innerHTML = studant.validade;
}

export async function showStudentDetails(ref) {
  await renderStudentDetail(ref);
  containerStudentDetail.classList.toggle("show");
}

deleteStudantAccountBtn.addEventListener("click", async () => {
  containerStudentDetail.classList.remove("show");
  const ref = deleteStudantAccountBtn.id;

  await deleteStudantAccount(ref);
});

getExtractStudantAccountBtn.addEventListener("click", async () => {
  containerStudentDetail.classList.remove("show");
  const ref = getExtractStudantAccountBtn.id;
  await getExtractStudantAccount(ref);
});
