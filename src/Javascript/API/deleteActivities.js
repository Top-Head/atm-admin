import { baseUrl } from "../utils/baseUrl.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";
import { showOperationSuceessModal } from "../utils/showOperationSucessModal.js";
import { token } from "../utils/token.js";

export async function deleteActivities(id_activitie) {
  ShowLoadingScreen();
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  await fetch(
    `${baseUrl}/admin/activitie/?id_activitie=${id_activitie}`,
    options
  )
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
      showOperationSuceessModal(
        "Atividade removida com sucesso",
        "a tua atividade foi removida com sucesso"
      );
    })
    .catch((err) => {
      ShowErrorScreen(err);
    });
}
