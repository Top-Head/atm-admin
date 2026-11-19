import { getCurrentPage } from "./getCurrentPage.js";

import { generateProfileAvatarByUserName } from "./generateProfileAvatar.js";
import { getCookie } from "./getCookies.js";
const UserAdminData = JSON.parse(getCookie("admin"));

const currentPage = getCurrentPage();
const avatarProfile = document.querySelector(".avatarProfile");
const adminName = document.querySelector(".adminName");
const adminEmail = document.querySelector(".adminEmail");

const DashboardLinkMenu = document.querySelector(".Dashboard");
const DocumentsLinkMenu = document.querySelector(".Documents");
const AccountsLinkMenu = document.querySelector(".Accounts");
const ActivitiesLinkMenu = document.querySelector(".Activities");

if (currentPage == "Dashboard.html") {
  DashboardLinkMenu.classList.toggle("atv");
}
if (currentPage == "Documents.html") {
  DocumentsLinkMenu.classList.toggle("atv");
}
if (currentPage == "Accounts.html") {
  AccountsLinkMenu.classList.toggle("atv");
}
if (currentPage == "Activities.html") {
  ActivitiesLinkMenu.classList.toggle("atv");
}

avatarProfile.innerHTML = generateProfileAvatarByUserName(UserAdminData.name);
adminEmail.innerHTML = UserAdminData.email;
adminName.innerHTML = UserAdminData.name;
