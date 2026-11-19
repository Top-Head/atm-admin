import { baseUrl } from "../utils/baseUrl.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";
import { token } from "../utils/token.js";

export async function getExtractStudantAccount(ref) {
  ShowLoadingScreen();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  await fetch(`${baseUrl}/admin/extract/?ref_account=${ref}`, options)
    .then(async (response) => {
      if (!response.ok) {
        if (response.status >= 400) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.detail);
        }
      }
      return response.blob();
    })
    .then(async (blob) => {
      const url = window.URL.createObjectURL(blob);

      window.location = url;
      ShowLoadingScreen();
    })
    .catch((err) => {
      ShowLoadingScreen();

      ShowErrorScreen("Extrado Não encontrado !");
    });
}
