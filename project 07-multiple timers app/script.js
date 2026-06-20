const setBtn = document.getElementById("setBtn");
const emptyMsg = document.getElementById("emptyMsg");
const timerContainer = document.getElementById("timerContainer");


setBtn.addEventListener("click", () => {
  let hrs = Number(document.getElementById("hours").value) || 0;
  if (hrs > 23) hrs = 23;
  let mins = Number(document.getElementById("minutes").value) || 0;
  if (mins > 59) mins = 59;
  let secs = Number(document.getElementById("seconds").value) || 0;
  if (secs > 59) secs = 59;
  let totalSeconds = hrs * 3600 + mins * 60 + secs;

  if (totalSeconds <= 0) {
    alert("Please enter valid time");
    return;
  }

  createTimer(totalSeconds);

  document.querySelector("#hours").value = "";
  document.querySelector("#minutes").value = "";
  document.querySelector("#seconds").value = "";
});

function createTimer(totalSeconds) {
  emptyMsg.style.display = "none";

  const timerCard = document.createElement("div");
  timerCard.classList.add("timer-card");

  timerCard.innerHTML = `
      <span>Time Left :</span>
      <div class="time" id="time"></div>
      <button class="delete-btn">Delete</button>
  `;

  timerContainer.appendChild(timerCard);

  const timeElement = timerCard.querySelector("#time");
  const deleteBtn = timerCard.querySelector(".delete-btn");

  function updateDisplay() {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    timeElement.textContent =
      `${String(h).padStart(2, "0")} : ` +
      `${String(m).padStart(2, "0")} : ` +
      `${String(s).padStart(2, "0")}`;
  }

  updateDisplay();

  const interval = setInterval(() => {
    totalSeconds--;

    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(interval);

      timerCard.classList.add("finished");

      timerCard.innerHTML = `
        <h3>Timer Is Up !</h3>
        <button class="delete-btn2">delete</button>
      `;

      timerCard.querySelector(".delete-btn2").addEventListener("click", () => {
        timerCard.remove();

        if (timerContainer.children.length === 0) {
          emptyMsg.style.display = "block";
        }
      });
    }
  }, 1000);

  deleteBtn.addEventListener("click", () => {
    clearInterval(interval);
    timerCard.remove();

    if (timerContainer.children.length === 0) {
      emptyMsg.style.display = "block";
    }
  });
}
