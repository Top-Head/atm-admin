const container = document.querySelector(".container");

container.innerHTML += `
<div class="loading-modal">
<div class="loading">
  <img src="../../styles/assets/waiting.gif" alt="loading" />
  <h2 class="bold">Quase pronto, aguarde...</h2>
  <p class="text-gray-100">
    Estamos agora processando o teu pedido, por favor aguarde
  </p>
</div>
</div>`;
