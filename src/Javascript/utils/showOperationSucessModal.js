export function showOperationSuceessModal(title, msg) {
  const operationSuccessModal = document.querySelector(
    ".operation-sucess-modal"
  );
  const TitleOperationSuccess = document.querySelector(".h2-sucess-modal");
  TitleOperationSuccess.innerHTML = title;
  const ElementMsgShow = document.querySelector(".operation-success-modal-msg");
  ElementMsgShow.innerHTML = msg;
  operationSuccessModal.classList.toggle("show");
}

const oKSucessBtn = document.querySelector(".ok-secess");
oKSucessBtn.addEventListener("click", () =>
  showOperationSuceessModal("Not-Title-Sucess", "Not Find")
);
