import { baseUrl } from "../utils/baseUrl.js";
import { openCloseAddSheetsModal } from "../utils/openAddSheetsModal.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";
import { token } from "../utils/token.js";

export async function patchStockSheet(sheets) {
  ShowLoadingScreen();
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  await fetch(`${baseUrl}/admin/sheets/?quant_sheets=${sheets}`, options)
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
    })
    .catch((err) => {
      ShowLoadingScreen();
      ShowErrorScreen(err);
    });
}
