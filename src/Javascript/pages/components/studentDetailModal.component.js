const container = document.querySelector(".container");

container.innerHTML += ` 
<div class="modal-student-details">
<div class="student-details">
  <div class="flex-bt on">
    <h2 class="bold">Detalhes de Conta</h2>
    <i class="b closeStudentDetail">
      <img src="../../styles/assets/icons/close.svg" alt="close" />
    </i>
  </div>
  <div class="flex-bt links">
    <p></p>
    <div class="flex">
      <a href="#" class="config getE getExtractStudantAccountBtn">Exportar extrato</a>
      <a href="#" class="config add ">Adicionar conta</a>
      <a href="#" class="config delete deleteStudantAccountBtn">Deletar conta</a>
    </div>
  </div>
  <div class="dataActivity">
    <div class="on">
      <p class="title">Nome</p>
      <p class="value studentName">António Gabreil</p>
    </div>
    <div class="flex-bt on">
      <div>
        <p class="title">Codigo</p>
        <p class="value studentRef ">6753175381</p>
      </div>
      <div>
        <p class="title">Turma</p>
        <p class="value studentGrade">11ª ID</p>
      </div>
    </div>
    <div class="flex-bt on">
      <div>
        <p class="title">Data de sessão</p>
        <p class="value  studentDateSession
        ">99/00/0000 15:12min</p>
      </div>
      <div>
        <p class="title">Saldo</p>
        <p class="value  studentBalance ">1.000,00</p>
      </div>
    </div>
    <div class="flex-bt on">
      <div>
        <p class="title">Contacto</p>
        <p class="value studentContact">6753175381</p>
      </div>
      <div>
        <p class="title">Data de validade</p>
        <p class="value studentValidade">99/00/0000 15:12min</p>
      </div>
    </div>
    <div class="flex-bt on">
      <div>
        <p class="title">Curso</p>
        <p class="value studentCourse ">Informatica</p>
      </div>
      <div>
        <p class="title">Email</p>
        <p class="value studantEmail">paulosegule@gamil.com</p>
      </div>
    </div>
  </div>

  <button class="btn-black-100 openAddBalanceModal">
    Carregar a conta
  </button>
</div>
</div>
`;
