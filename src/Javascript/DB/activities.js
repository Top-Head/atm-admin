import { baseUrl } from "../utils/baseUrl.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { token } from "../utils/token.js";

export async function getActivities() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  const activities = await fetch(`${baseUrl}/admin/activities/`, options)
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
      return response;
    })
    .catch((err) => {
      ShowErrorScreen(err);
    });

  return activities;
}
