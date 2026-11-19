import { baseUrl } from "../utils/baseUrl.js";
import { token } from "../utils/token.js";

import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../utils/showLoadingScreen.js";

export async function exportExtract(id_activitie) {
  ShowLoadingScreen();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
    body: JSON.stringify(id_activitie),
  };

  await fetch(`${baseUrl}/admin/extractct`, options)
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
