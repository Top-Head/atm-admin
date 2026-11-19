import { baseUrl } from "../utils/baseUrl.js";
import { token } from "../utils/token.js";

import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";
import { showOperationSuceessModal } from "../utils/showOperationSucessModal.js";

export async function PostNewStudantAccount(NewStudant) {
  ShowLoadingScreen();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
    body: JSON.stringify(NewStudant),
  };

  await fetch(`${baseUrl}/admin/student`, options)
    .then(async (response) => {
      if (!response.ok) {
        if (response.status >= 400) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.detail);
        }
      }
      return response.json();
    })
    .then((response) => {
      ShowLoadingScreen();
      showOperationSuceessModal(
        "Tudo Pronto , Conta criada",
        "Já pode entrar na sua conta e começar a realizar as actividades desejadas"
      );
    })
    .catch((err) => {
      ShowLoadingScreen();
      ShowErrorScreen(err);
    });
}
