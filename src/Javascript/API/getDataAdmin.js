import { baseUrl } from "../utils/baseUrl.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { token } from "../utils/token.js";
import { setCookie } from "../utils/setCookies.js";

export async function getDataAdmin() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  await fetch(`${baseUrl}/admin`, options)
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
      setCookie("admin", JSON.stringify(response), 2);
    })
    .catch((err) => {
      ShowErrorScreen(err);
    });
}
