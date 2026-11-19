const container = document.querySelector(".container");

container.innerHTML += ` 
<div class="modal-activities-details">
<div class="activities-details">
  <div class="flex-bt on">
    <h2 class="bold">Detalhes de Actividades</h2>
    <i class="b close-activities-details">
      <img src="../../styles/assets/icons/close.svg" alt="close" />
    </i>
  </div>
  <div class="flex-bt">
    <p></p>
    <div class="flex">
      <a href="#" class="config getE exportExtractButton" style="display:none;" id=""></a>
      <a href="#" class="config delete deleteExtratoBtn  id="" ">Deletar extrato</a>
    </div>
  </div>
  <div class="dataActivity">
    <div class="on">
      <p class="title">Nome</p>
      <p class="value activitiesDetailName">António Gabreil</p>
    </div>
    <div class="flex-bt on">
      <div>
        <p class="title">Codigo</p>
        <p class="value activitiesDetailCode">6753175381</p>
      </div>
      <div>
        <p class="title">Turma</p>
        <p class="value activitiesDetailTurma">11ª ID</p>
      </div>
    </div>
    <div class="on">
      <p class="title">Contacto</p>
      <p class="value activitiesDetailContact">34551565</p>
    </div>
    <div class="on">
      <p class="title">Mensagem de actividade</p>
      <p class="value activitiesDetailMessage">
        Paulo Sanguli retifou 7 folhas de prova
      </p>
    </div>
  </div>
</div>
</div>
`;
