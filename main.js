const randomDiv = document.querySelector("div");
const button = document.querySelector("button");

function getRandomNum() {
  const randomNum = Math.random();
  randomDiv.innerText = randomNum;
}

button.addEventListener("click", getRandomNum);