import { getCookie } from "./getCookies.js";

const token = getCookie("token");

if (!token || token.length === 0 || token == "") {
  window.location = "/";
}
