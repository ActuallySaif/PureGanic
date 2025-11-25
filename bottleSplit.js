const prodCta = document.getElementById("prodCta");
const model = document.getElementById("prodBottle");

let totalDuration = 0;
let animationFrameId = null;

// Set totalDuration once the model loads
model.addEventListener("load", () => {
  totalDuration = model.duration;
});

function pauseAt(targetTime) {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  function check() {
    if (model.currentTime >= targetTime) {
      model.pause();
      model.currentTime = targetTime; // clamp exactly
    } else {
      animationFrameId = requestAnimationFrame(check);
    }
  }
  check();
}

prodCta.addEventListener("mouseenter", () => {
  if (totalDuration === 0) return;
  model.currentTime = 0;
  model.play();
  pauseAt(totalDuration * 0.5);
});

prodCta.addEventListener("mouseleave", () => {
  if (totalDuration === 0) return;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  model.currentTime = totalDuration * 0.5;
  // Play remainder; only play once so it stops at the end!
  model.play({ repetitions: 1 });
});
