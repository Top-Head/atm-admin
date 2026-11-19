const container = document.querySelector(".container");

container.innerHTML += ` 
<div class="modal-addaccount">
<div class="add-account">
  <div class="flex-bt on">
    <h2 class="bold">Adicionar de Conta</h2>
    <i class="b closeAddAccount">
      <img src="../../styles/assets/icons/close.svg" alt="close" />
    </i>
  </div>
  <p class="desciption">
    Preencha o formulário abaixo para criar uma conta
  </p>
  <div class="contentProgressiveBar">
      <div class="progressiveBar"></div>
  </div>

  <form class="inputs" id="NewStudantForm">
    <label for="name">
      <p>Nome</p>
      <input class="input" type="text" name="name" id="NewStudantName" required />
    </label>
    <label for="email">
      <p>Email</p>
      <input
        class="input"
        type="email"
        name="email"
        id="NewStudantEmail"
        required
      />
    </label>
    <div class="selects flex-bt">
      <div class="course-u">
        <p>Curso</p>
        <select class="course" name="course" id="NewStudantCourse">
         <option value="">Curso</option>
          <option value="informatica">Informatica</option>
          <option value="Eletronica">Electronica</option>
        </select>
      </div>

      <div class="class-u">
        <p>class</p>
        <select class="class" name="class" id="NewStudantGrade">
         <option value="">Classe</option>
          <option value="10">10ª</option>
          <option value="11">11ª</option>
          <option value="12">12ª</option>
          <option value="12">13ª</option>
        </select>
      </div>
    </div>

    <label for="password">
      <p>Contacto</p>
      <input
        class="input remove"
        type="number"
        id="NewStudantContact"
        name="contact"
        required
      />
    </label>
    <button type="submit" class="btn-black-100 signUpNewStudantBtn">Cadastrar</button>
  </form>
</div>
</div>
`;
