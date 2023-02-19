"use strict";

const form = () => {
   const form = document.querySelector("form");

   const statusBlock = document.createElement("div");
   const loadText = "Идет отправка...";
   const errorText = "Ошибка...";
   const successText = "Отправлено";

   const name = form.querySelector("input[name=fio]");
   const phone = form.querySelector("input[name=tel]");

   const submit = form.querySelector(".button");

   const sendData = (data) => {
      return fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json",
         },
      }).then((res) => res.json());
   };

   const validate = (list) => {
      let success = true;

      if (name.value.length === 0) {
         success = false;
         // Имя должно содержать не менее 1 символа!
         statusBlock.textContent = errorText;
         submit.value = "Отправить";
      }

      if (phone.value.match(/[^0-9\+]/g, "")) {
         success = false;
         // Номер телефона не должен содержать данные символы
         statusBlock.textContent = errorText;
         submit.value = "Отправить";
      } else if (phone.value.length < 11) {
         success = false;
         // Номер телефона должен содержать не менее 11 цифр!;
         statusBlock.textContent = errorText;
         submit.value = "Отправить";
      }

      return success;
   };

   const submitForm = () => {
      const formElements = form.querySelectorAll("input");
      const formData = new FormData(form);
      const formBody = {};

      statusBlock.textContent = loadText;
      form.append(statusBlock);
      submit.value = "Отправить";

      formData.forEach((val, key) => {
         formBody[key] = val;
      });

      //проверка на заполненность полей в форме
      if (validate(formElements)) {
         sendData(formBody)
            .then((data) => {
               statusBlock.textContent = successText;
               submit.value = "Отправить";
               setTimeout(() => {
                  statusBlock.textContent = "";
               }, 3000);

               formElements.forEach((input) => {
                  input.value = "";
                  submit.value = "Отправить";
               });
            })
            .catch((error) => {
               statusBlock.textContent = errorText;
               submit.value = "Отправить";
            });
      }
   };

   try {
      if (!form) {
         throw new Error("Верните форму на место!");
      }

      form.addEventListener("submit", (e) => {
         e.preventDefault();

         submitForm();
      });
   } catch (error) {
      console.log(error.message);
   }
};

form();