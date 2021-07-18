const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let data = {
    nome,
    email,
  };

  console.log(data);

  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);

  let content = document.getElementById("content");

  let carregando = `<p class="aviso">carregando...</p>`;
  let pronto = `<p class="aviso">Pronto... em breve vc receber nossas promoções.</p>`;

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = pronto;
  }, 2000);
});
