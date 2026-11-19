export function ShowErrorScreen(error) {
  const errorModal = document.querySelector(".error-modal");
  const messageElement = document.querySelector(".message");

  messageElement.innerHTML = error;
  errorModal.classList.toggle("show");
}
const errorOkBtn = document.querySelector(".error-ok-btn");
errorOkBtn.addEventListener("click", () => {});
