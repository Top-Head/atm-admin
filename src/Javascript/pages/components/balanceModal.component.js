const container = document.querySelector(".container");

container.innerHTML += ` 
<div class="balance">
<form class="add-balance">
  <div class="flex-bt">
    <h2 class="bold">Carregar saldo</h2>
    <i class="b closeBalanceBtn">
      <img src="../../styles/assets/icons/close.svg" alt="close" />
    </i>
  </div>
  <div class="quantety">
    <p>Saldo de (<span> Paulo sengule </span>)</p>
    <div class="flex-bt">
      <h1 class="bold balanceNumberValue">
        <input
          type="number"
          class="balance-Value remove"
          id="balance-Value"
          value="0"
        />
      </h1>
      <div>
        <a href="#">
          <img src="../../styles/assets/icons/mains.svg" alt="" />
        </a>
        <a href="#">
          <img src="../../styles/assets/icons/menos.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
  <button class="btn-black-100 ok-add-balance">Ok</button>
</form>
</div>
`;
