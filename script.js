let noCount = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const emotionText = document.getElementById("emotionText");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

yesBtn.addEventListener("click", yesClicked);

function moveNo() {
  noCount++;

  if (noCount >= 3 && noCount < 6) {
    emotionText.innerText = "Pleaseeee 🥺💗";
    emotionText.style.display = "block";
  }

  if (noCount >= 6) {
    emotionText.innerText = "Okay… last chance 😭💔";
    emotionText.style.display = "block";
  }

  const card = document.querySelector(".card");
  const maxX = card.clientWidth - noBtn.clientWidth;
  const maxY = 120;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
  noBtn.style.transform = "none";
}

function yesClicked() {
  document.body.classList.add("rainbow");
  message.style.display = "block";
  emotionText.style.display = "none";
  startHearts();
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 200);
}