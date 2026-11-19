import { baseUrl } from "../utils/baseUrl.js";
import { showOperationSuceessModal } from "../utils/showOperationSucessModal.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";
import { token } from "../utils/token.js";

export async function deleteStudantAccount(ref) {
  ShowLoadingScreen();
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  await fetch(`${baseUrl}/admin/account/?ref=${ref}`, options)
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
      showOperationSuceessModal(
        "operação relizada com sucesso",
        `A conta do estudante de Refencia: ${ref} foi Removida com sucesso`
      );
      ShowLoadingScreen();
    })
    .catch((err) => {
      ShowLoadingScreen();
      ShowErrorScreen(err);
    });
}
