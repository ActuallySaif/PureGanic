const model = document.querySelector('model-viewer');
const arrowRight = document.getElementById('arrowRight');

// Wait for the model to load
model.addEventListener('load', () => {

  arrowRight.addEventListener('click', async () => {
    model.play({ repetitions: 1 });

  });
});