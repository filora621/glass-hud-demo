function formatNow() {
  const d = new Date();
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const dayName = days[d.getDay()];
  const day = d.getDate();
  const month = months[d.getMonth()];
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");

  return `${dayName} ${day} ${month} ${hh}:${mm}`;
}

function initClock() {
  const el = document.getElementById("timePill");
  if (!el) return;
  el.textContent = formatNow();
  setInterval(() => { el.textContent = formatNow(); }, 30_000);
}

function initHoverFocus() {
  // Adds a subtle “active” class for keyboard focus too
  document.querySelectorAll(".hover-grow").forEach((p) => {
    p.tabIndex = 0;
    p.addEventListener("focus", () => p.classList.add("is-active"));
    p.addEventListener("blur", () => p.classList.remove("is-active"));
  });
}

initClock();
initHoverFocus();
