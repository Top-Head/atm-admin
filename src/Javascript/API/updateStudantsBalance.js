import { baseUrl } from "../utils/baseUrl.js";
import { showOperationSuceessModal } from "../utils/showOperationSucessModal.js";
import { openCloseAddSheetsModal } from "../utils/openAddSheetsModal.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";
import { token } from "../utils/token.js";

export async function patchStudentBalance(balance, ref) {
  ShowLoadingScreen();
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  await fetch(
    `${baseUrl}/admin/balance/?balance=${balance}&ref_account=${ref}`,
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
    .then((response) => {
      ShowLoadingScreen();
      showOperationSuceessModal(
        "Tudo Pronto !",
        "O saldo da conta do estudante foi atualizado com sucesso "
      );
    })
    .catch((err) => {
      ShowLoadingScreen();
      ShowErrorScreen(err);
    });
}
