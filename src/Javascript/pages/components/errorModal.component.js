const container = document.querySelector(".container");

container.innerHTML += `
<div class="error-modal">
<div class="error">
  <img src="../../styles/assets/Warning-Icon.svg" alt="error" />
  <h2 class="bold">Ops! , algo não deu certo.</h2>
  <p class="text-gray-100 message">
    Aqui vai aprarecer a mensagen de erro de server
  </p>
  <button class="button-ok error-ok-btn">Ok</button>
</div>
</div>`;
