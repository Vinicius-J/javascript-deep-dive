//* funcionalidades utilizadas somente no navegador

const info = window.document.querySelector(".info");
info.textContent = "Example Web API";

const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  alert("Button clicked");

  const title = document.querySelector("#title");

  title.style.color = "red";
});
