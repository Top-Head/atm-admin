import { baseUrl } from "../utils/baseUrl.js";
import { token } from "../utils/token.js";

import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";
import { showOperationSuceessModal } from "../utils/showOperationSucessModal.js";
import { getDataAdmin } from "./getDataAdmin.js";

export async function PatchUpdateAdminData(NewAdminData) {
  ShowLoadingScreen();
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
    body: JSON.stringify(NewAdminData),
  };

  await fetch(`${baseUrl}/admin/person`, options)
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
      ShowLoadingScreen();
      await getDataAdmin();
      showOperationSuceessModal(
        "Tudo Pronto , Conta Atualidada",
        "Já pode porcegir com a tua activiades de Administrador"
      );
    })
    .catch((err) => {
      ShowLoadingScreen();
      ShowErrorScreen(err);
    });
}
