"use strict";

const serviceModal = () => {
   const btnOffer = document.querySelector(".offer__btn");
   const modal = document.querySelector(".modal-callback");
   const overlay = document.querySelector(".modal-overlay");
   const closeBtn = document.querySelector(".modal-close");

   btnOffer.addEventListener("click", function () {
      modal.style.display = "block";
      overlay.style.display = "block";
   });

   function closeModal() {
      modal.style.display = "none";
      overlay.style.display = "none";
   }

   overlay.addEventListener("click", closeModal);
   closeBtn.addEventListener("click", closeModal);
};

serviceModal();