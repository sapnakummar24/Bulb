const bulb = document.querySelector("#bulb");
const btn = document.querySelector("#toggle-btn");
let isOn = false; // Tracks the bulb state

btn.addEventListener("click", () => {
    isOn = !isOn; // Toggle the state
    if (isOn) {
        bulb.classList.add("on");
        btn.textContent = "Turn OFF"; // Update button text
    } else {
        bulb.classList.remove("on");
        btn.textContent = "Turn ON"; // Update button text
    }
});

// Additional Fun: Auto-turn OFF after 10 seconds
let timeout;
btn.addEventListener("click", () => {
    if (timeout) clearTimeout(timeout); // Reset the timer if bulb toggled
    if (isOn) {
        timeout = setTimeout(() => {
            bulb.classList.remove("on");
            btn.textContent = "Turn ON";
            isOn = false;
        }, 10000); // 10 seconds
    }
});
