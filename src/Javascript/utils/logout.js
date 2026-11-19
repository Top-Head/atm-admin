const logoutButton = document.querySelector(".logoutButton");
import { redirectTo } from "../utils/redirectTo.js";

logoutButton.addEventListener("click", () => {
  localStorage.clear();
  redirectTo("../../../../index.html");
});
