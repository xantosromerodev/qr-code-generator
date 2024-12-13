// Variables
const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");
let preValue;

const errorMessage = document.getElementById("error-message");

//
generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();

  if (qrValue === "") {
    errorMessage.style.display = "block";

    // Mostrar borde rojo campo de entrada
    qrInput.classList.add("error");

    // Eliminar borde rojo después de 1 segundo (1000 ms)
    setTimeout(() => {
      qrInput.classList.remove("error");
      errorMessage.style.display = "none";
    }, 1000); // Después de 1 segundo
  }
  
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generando código QR...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generar QR";
  });
});

//
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});
