const adviceContainer = document.getElementById("advice");
const otherAdviceBtn = document.getElementById("other-advice-btn");

const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => showAdvice(data))
    .catch((err) => {
      adviceContainer.innerHTML = `<p class="error-advice">There was an error loading the advice</p>`;
    });
};

const showAdvice = (data) => {
  adviceContainer.innerHTML = `
    <p class="title">advice #${data.slip.id}</p>
    <div class="container-advice">
      <h1 class="h1-advice">“${data.slip.advice}”</h1>
    </div>
    `;
};

fetchAdvice();

otherAdviceBtn.addEventListener("click", fetchAdvice);
