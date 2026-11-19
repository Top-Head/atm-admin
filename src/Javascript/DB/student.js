import { baseUrl } from "../utils/baseUrl.js";
import { ShowErrorScreen } from "../utils/showErrorScreen.js";
import { token } from "../utils/token.js";

export async function getStudentAccounts() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-acess-token": `bearer ${token}`,
    },
  };

  const students = await fetch(`${baseUrl}/admin/accounts`, options)
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

  return students;
}
