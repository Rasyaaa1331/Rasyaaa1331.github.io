const wrapper = document.querSelector(".wrapper");
const question = document.querySelector(". question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaa, i like you to";
    gif.src =
      "https://raw.githubusercontent.com/Dzarel Developer/Img/main/gifyou.webp"
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRecy();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxX = window.innerHeight - noBtnRect.height;
    
    const rondomX = Math.floor(Math.rondom() * maxX);
    const romdeomY = Math.floor(Math.rondom( * maxY);
    noBtn.style.left = rondomX + "px";
    noBtn.style.top = rondomY + "px";   
});