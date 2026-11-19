const container = document.querySelector(".container");

container.innerHTML += ` 
<div class="modal-account-details">
<div class="account">
  <div class="flex-bt on">
    <h2 class="bold">Meu perfil</h2>
    <i class="b closeModalAccountsDetails">
      <img src="../../styles/assets/icons/close.svg" alt="close" />
    </i>
  </div>
  <p class="desciption">Dados do perfil admin</p>
  <form class="inputs" id="AdminForm">
    <label for="email">
      <p>Nome</p>
      <input
        class="input"
        type="text"
        name="name"
        id="adminName"
        required
      />
    </label>
    <label for="email">
      <p>Email</p>
      <input
        class="input"
        type="email"
        name="email"
        id="adminEmail"
        required
      />
    </label>

    <label for="contact">
      <p>Contacto</p>
      <input
        class="input remove"
        type="number"
        id="adminContact"
        name="contact"
        required
      />
    </label>
    <label for="password">
      <p>Senha</p>
      <input
        class="input"
        type="password"
        id="adminPassword"
        name="password"
        required
      />
    </label>
    <label for="password">
      <p>Confirmar senha</p>
      <input
        class="input"
        type="password"
        id="adminPasswordConfirm"
        name="password"
        required
      />
    </label>
    <button type="submit" class="btn upadate">Atulizar perfil</button>
  </form>

  <button class="btn logout logoutButton">Terminar sessão</button>
</div>
</div>
`;
