document.addEventListener("DOMContentLoaded", () => {

  // --- 1. Typing Animation Logic ---
  const textArray = ["Backend Developer.", "Software Engineer at Visa.", "Problem Solver."];
  let textIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing-text");

  function type() {
    if (charIndex < textArray[textIndex].length) {
      typingElement.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex++;
      if (textIndex >= textArray.length) textIndex = 0;
      setTimeout(type, 500);
    }
  }

  // Start the typing animation
  type();


  // --- 2. tsParticles (Network Background) Initialization ---
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#b388ff", /* Matches your purple accent */
      },
      links: {
        color: "#8b92b2", /* Muted lines */
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5, /* Slow, elegant movement */
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, /* Adjust for more/less dots */
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  });
  // --- 3. GitHub Calendar Initialization ---
    GitHubCalendar(".calendar", "kpandey15", {
      responsive: true,
      tooltips: true
    });
});