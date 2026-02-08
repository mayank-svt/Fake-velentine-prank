document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const letterBox = document.getElementById("letterBox");
  const heartsContainer = document.querySelector(".hearts");

  /* SAFETY CHECK */
  if (!envelope || !letterBox) {
    console.error("Required elements not found");
    return;
  }

  /* HEART RAIN */
  function createHeart() {
    const heart = document.createElement("span");
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 600);

  /* OPEN LETTER */
  envelope.addEventListener("click", () => {
    envelopeContainer.style.display = "none";
    letterBox.style.display = "flex";
  });
});    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 200);
}
