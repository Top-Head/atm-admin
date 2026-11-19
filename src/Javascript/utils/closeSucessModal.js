const oKSucessModalButton = document.querySelector(".ok-secess");
const operationSuccessModal = document.querySelector(".operation-sucess-modal");

oKSucessModalButton.addEventListener("click", () => {
  operationSuccessModal.classList.remove("show");
});
