const cardAuthor = document.querySelector(".card-author");
const shareButton = document.querySelector(".article-share");
const cardShareModal = document.querySelector(".card-share-modal");

const updatePageContent = () => {
  cardShareModal.style.top =
    String(shareButton.getBoundingClientRect().top - 94 + window.pageYOffset) +
    "px";
  cardShareModal.style.left =
    String(shareButton.getBoundingClientRect().right - 170) + "px";
};

const share = (event) => {
  event.preventDefault();
  cardAuthor.classList.toggle("active");
  cardShareModal.classList.toggle("active");
  updatePageContent();
};

shareButton.addEventListener("click", share);
window.addEventListener("resize", updatePageContent);
