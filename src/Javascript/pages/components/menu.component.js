import { getCurrentPage } from "../../utils/getCurrentPage.js";

const headerMenu = document.querySelector("#header-menu");
const currentPage = getCurrentPage();

headerMenu.innerHTML = `
<div class="menu flex-bt">
<div class="logo flex">
  <img src="../../styles/assets/logo.svg" alt="logo" />
  <div class="link flex">
    <a href="./Dashboard.html" class="Dashboard">Dashboard</a>
    <a href="./Documents.html" class="Documents">Controle de documentos</a>
    <a href="./Accounts.html" class="Accounts">Controle de conta</a>
    <a href="./Activities.html" class="Activities">Actividades</a>
  </div>
</div>
<div class="user flex data-account">
  <div class="avatar">
    <h3 class="avatarProfile">EC</h3>
  </div>
  <div class="datauser">
    <h4 class= "adminName">Edilson Campos</h4>
    <a href="#" class="adminEmail">edlsoncampos@gmail.com</a>
  </div>
</div>
</div>
`;
