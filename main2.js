const comPic = document.querySelector(".comPic");
const myPicR = document.querySelector(".myPicR");
const myPicS = document.querySelector(".myPicS");
const myPicP = document.querySelector(".myPicP");
const resultUl = document.querySelector("ul");

const RSP = ["묵", "찌", "빠"];
const caseR = { 묵: "비겼다", 찌: "이겼다", 빠: "졌다" };
const caseS = { 묵: "졌다", 찌: "비겼다", 빠: "이겼다" };
const caseP = { 묵: "이겼다", 찌: "졌다", 빠: "비겼다" };

function randomPic() {
  const randomNum = Math.floor(Math.random() * 3);
  const randomRSP = RSP[randomNum];
  return randomRSP;
}

function addLi(resultText1, resultText2) {
  const resultLi = document.createElement("li");
  resultLi.innerHTML = `${resultText1}</br>${resultText2}`;
  resultUl.appendChild(resultLi);
}

function mainFunction(pic) {
  const randomRSP = randomPic();
  comPic.innerText = randomRSP;
  if (pic == "묵") {
    const result = caseR[randomRSP];
    addLi(`나:${pic} 퓨터:${randomRSP}`, `이번판은 ${result}!`);
  } else if (pic == "찌") {
    const result = caseS[randomRSP];
    addLi(`나:${pic} 퓨터:${randomRSP}`, `이번판은 ${result}!`);
  } else {
    const result = caseP[randomRSP];
    addLi(`나:${pic} 퓨터:${randomRSP}`, `이번판은 ${result}!`);
  }
}

myPicR.addEventListener("click", function () {
  mainFunction("묵");
});
myPicS.addEventListener("click", function () {
  mainFunction("찌");
});
myPicP.addEventListener("click", function () {
  mainFunction("빠");
});
