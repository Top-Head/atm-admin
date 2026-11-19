const container = document.querySelector(".container");

container.innerHTML += ` 
<div class="edite-sheets-modal">
<form class="edite-sheets" id="fromEditeSheets">
  <div class="flex-bt">
    <h2 class="bold">Editar Qunatiade de Folha</h2>
    <a href = '#' class="close-edite-sheets-modal">
      <img src="../../styles/assets/icons/close.svg" alt="close" />
    </a>
  </div>
  <div class="qauntety">
    <p>Quantidade de folhas</p>
    <div class="flex-bt" >
      <h1 class="bold editeSheetsNumberValue">
        <input type="number" class="editeSheet remove" id="editeSheetsNumberValue" value="0">
      </h1>
      <div>
        <a href="#" class="upAddSheetsNumberEdite">
          <img src="../../styles/assets/icons/mains.svg" alt="up" />
        </a>
        <a href="#" class="donwAddSheetsNumberEdite">
          <img src="../../styles/assets/icons/menos.svg" alt="donw" />
        </a>
      </div>
    </div>
  </div>
  <button type="submit" class="btn-black-100 confirm-edite-sheets">Atualizar</button>
</form>
</div>`;
