const errorOkBtn = document.querySelector(".error-ok-btn");
errorOkBtn.addEventListener("click", () => {
  const errorModal = document.querySelector(".error-modal");
  errorModal.classList.remove("show");
});
