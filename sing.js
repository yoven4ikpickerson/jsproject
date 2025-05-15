document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.querySelector(".webinar-form");
  const wrapper = document.querySelector(".wrapper");

  const setupFormTriggers = () => {
    const close_button = formSection.querySelector(".close_button");
    const buttons = document.querySelectorAll(".right_button");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        // wrapper.style.display = "none";
        formSection.style.display = "block";
      });
    });

    if (close_button) {
      close_button.addEventListener("click", () => {
        formSection.style.display = "none";
        wrapper.style.display = "block";
      });
    }
  };

  // 1. Викликаємо відразу
  setupFormTriggers();

  // 2. Повторно викликаємо після додавання бургер-меню
  const observer = new MutationObserver(() => {
    const mobileButton = document.querySelector(".mobile-menu .right_button");
    if (mobileButton) {
      setupFormTriggers();
      observer.disconnect(); // Зупинити спостереження після ініціалізації
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

// intlTelInput + перевірка
window.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#phone");
  if (input) {
    window.intlTelInput(input, {
      initialCountry: "ua",
      preferredCountries: ["ua", "pl", "us"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });
  }

  const button = document.querySelector(".btn.contact");
  const nameInput = document.querySelector("#name");
  const phoneInput = document.querySelector("#phone");

  if (button && nameInput && phoneInput) {
    button.addEventListener("click", function (e) {
      let hasError = false;

      if (!nameInput.value.trim()) {
        nameInput.style.border = "2px solid red";
        hasError = true;
      } else {
        nameInput.style.border = "";
      }

      if (!phoneInput.value.trim()) {
        phoneInput.style.border = "2px solid red";
        hasError = true;
      } else {
        phoneInput.style.border = "";
      }

      if (hasError) {
        e.preventDefault();
      }
    });
  }
});
