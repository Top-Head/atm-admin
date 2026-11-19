import { baseUrl } from "../utils/baseUrl.js";

import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { token } from "../utils/token.js";
import { setLocalStorage } from "../utils/setLocalstorage.js";

export async function getActivities() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  await fetch(`${baseUrl}/admin/activities/`, options)
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
      for (const activity of response) {
        activities.push(activity);
      }
    })
    .catch((err) => {
      ShowErrorScreen(err);
    });
}
