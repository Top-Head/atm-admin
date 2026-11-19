const container = document.querySelector(".container");

container.innerHTML += ` 
<div class="add-sheets-modal">
<form class="add-sheets" id="addSheetsForm">
  <div class="flex-bt">
    <h2 class="bold">Adcionar Folha</h2>
    <a href = '#' class="close-add-sheets-modal">
      <img src="../../styles/assets/icons/close.svg" alt="close" />
    </a>
  </div>
  <div class="qauntety">
    <p>Quantidade de folhas</p>
    <div class="flex-bt">
      <h1 class="bold addSheetsNumberValue">0</h1>
      <div>
        <a href="#" class="upAddSheetsNumber">
          <img src="../../styles/assets/icons/mains.svg" alt="up" />
        </a>
        <a href="#" class="donwAddSheetsNumber">
          <img src="../../styles/assets/icons/menos.svg" alt="donw" />
        </a>
      </div>
    </div>
  </div>
  <button type="submit" class="btn-black-100 confirm-add-sheets">Ok</button>
</form>
</div>`;
