import "../../pages/components/operationSucessModal.component.js";

import "../../pages/components/loadingModal.component.js";

import "../../pages/components/errorModal.component.js";

import "../../utils/closeErrorModal.js";
import "../../utils/showOperationSucessModal.js";

import { authentication } from "../../API/authentication.js";

const signInForm = document.querySelector("#signIn-form");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const DateOfSignIn = {
    email: email.value,
    password: password.value,
  };
  await authentication(DateOfSignIn);
});
