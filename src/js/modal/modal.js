const modal = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
const openAnimatedModal = document.querySelector(".messenger-link.weechat");
const closeAnimatedModal = document.getElementById("closeAnimatedModal");

openAnimatedModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("active");
  modalContent.classList.add("active");
  document.body.style.overflowY = "hidden";
});

closeAnimatedModal.addEventListener("click", () => {
  modal.classList.remove("active");
  modalContent.classList.remove("active");
  document.body.style.overflowY = "auto";
});
