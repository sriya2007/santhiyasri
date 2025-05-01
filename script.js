const words = ["java", "python", "ruby", "swift", "perl", "kotlin"];
let word = "", guessed = [];

function showPage(page) {
  document.querySelectorAll('.card').forEach(card => card.classList.add("hidden"));
  document.getElementById(page + "Page").classList.remove("hidden");

  if (page === "game") startGame();
}

function startGame() {
  word = words[Math.floor(Math.random() * words.length)];
  guessed = [];
  document.getElementById("feedback").textContent = "";
  document.getElementById("letter").value = "";
  updateDisplay();
}

function guess() {
  const input = document.getElementById("letter");
  const letter = input.value.toLowerCase();
  input.value = "";

  if (!letter || guessed.includes(letter)) return;

  guessed.push(letter);

  if (word.includes(letter)) {
    document.getElementById("feedback").textContent = "Correct!";
  } else {
    document.getElementById("feedback").textContent = "Wrong!";
  }

  let allGuessed = updateDisplay();
  if (allGuessed) {
    document.getElementById("gamePage").classList.add("hidden");
    document.getElementById("congratsPage").classList.remove("hidden");
  }
}

function updateDisplay() {
  let display = "", complete = true;
  for (let ch of word) {
    if (guessed.includes(ch)) {
      display += ch + " ";
    } else {
      display += "_ ";
      complete = false;
    }
  }
  document.getElementById("displayWord").textContent = display.trim();
  return complete;
}

showPage("home");