import { baseUrl } from "../utils/baseUrl.js";
import { redirectTo } from "../utils/redirectTo.js";
import { setCookie } from "../utils/setCookies.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";
import { token } from "../utils/token.js";
import { getActivities } from "./getActivities.js";
import { getDataAdmin } from "./getDataAdmin.js";
import { getStockSheet } from "./getStock.js";
import { getStudentAccounts } from "./getStudentAccount.js";

export async function authentication(DateOfSignIn) {
  ShowLoadingScreen();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Roots-Happiness-dashboard",
    },
    body: JSON.stringify(DateOfSignIn),
  };
  await fetch(`${baseUrl}/admin/login`, options)
    .then(async (response) => {
      if (!response.ok) {
        if (response.status >= 400) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.detail);
        }
      }
      return response.json();
    })
    .then(async (response) => {
      await getDataAdmin();
      if (response.token) {
        setCookie("token", response.token, 2);

        await getStockSheet();
        await getStudentAccounts();
        redirectTo("../application/Dashboard.html");
        ShowLoadingScreen();
      } else {
        ShowErrorScreen("Email or password Invalid");
      }
    })
    .catch((err) => {
      ShowLoadingScreen();
      ShowErrorScreen(err);
    });
}
