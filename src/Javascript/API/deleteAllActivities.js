import { baseUrl } from "../utils/baseUrl.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";

import { token } from "../utils/token.js";

export async function deleteAllActivities(id_activitie) {
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
    .then(async (response) => {})
    .catch((err) => {
      ShowErrorScreen(err);
    });
}
