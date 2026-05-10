function showPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");

  if (num === 3) typeWriter("type1",
    "Thank you for always being there for me. You are my everything ❤️", 40);

  if (num === 4) typeWriter("type2",
    "I appreciate every single thing you do. I love you so much ❤️", 40);

  if (num === 5) finalScene();
}

function nextPage(num) {
  showPage(num);
}

/* OPEN BOX */
function openBox() {
  let box = document.getElementById("box");
  box.style.transform = "scale(0.8)";

  spawnHearts();

  setTimeout(() => {
    showPage(2);
  }, 2000);
}

/* HEARTS */
function spawnHearts() {
  for (let i = 0; i < 30; i++) {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 3000);
  }
}

/* TYPEWRITER */
function typeWriter(id, text, speed) {
  let i = 0;
  let el = document.getElementById(id);
  el.innerHTML = "";

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

/* FINAL */
function finalScene() {
  let heart = document.getElementById("heart");
  let text = document.getElementById("finalText");

  setTimeout(() => {
    heart.style.transform = "scale(1.5)";
  }, 1000);

  setTimeout(() => {
    heart.style.transform = "scale(0)";
    document.body.style.background = "red";
  }, 2500);

  setTimeout(() => {
    document.body.style.background = "#fff0f5";
    heart.style.transform = "scale(1)";
    text.innerHTML =
      "I LOVE YOUUUU ❤️✨<br>I HOPE U LIKED THISSS";
  }, 4000);
}
