const model = document.querySelector('model-viewer');
const arrowRight = document.getElementById('arrowRight');
let heroTag = document.getElementById("heroTag");
let heroSec = document.getElementById("hero");
let waves = document.getElementById("wavesTop");
let cta = document.getElementById("heroCta");

let models = [
  "Models/JadeCalmAnimNewest.glb",
  "Models/Amber.glb",
  "Models/Velvet.glb",
  "Models/Crimson.glb"
];

let heroTaglines = [
  "Find stillness in every sip.",
  "Awaken your inner glow.",
  "Indulge in pure vitality.",
  "Energy  runs deep."
]

let heroColors = [
  "var(--heroBg1)",
  "var(--heroBg2)",
  "var(--heroBg3)",
  "var(--heroBg4)"
]

let TagColors = [
  "var(--hTextColor1)",
  "var(--hTextColor2)",
  "var(--hTextColor3)",
  "var(--hTextColor4)"
]

let wavesColors = [
  "var(--waves1)",
  "var(--waves2)",
  "var(--waves3)",
  "var(--waves4)"
]

let btnColors = [
  "var(--heroBtn1)",
  "var(--heroBtn2)",
  "var(--heroBtn3)",
  "var(--heroBtn4)"
]

let index = 0;

function waitForAnimationEnd(viewer) {
  return new Promise(resolve => {
    const handler = () => {
      viewer.removeEventListener('finished', handler);
      resolve();
    };
    viewer.addEventListener('finished', handler);
  });
}

arrowRight.addEventListener('click', async () => {

  //bottle changes

  model.play({ repetitions: 1 });


  await waitForAnimationEnd(model);

  index = (index + 1) % models.length;


  model.src = models[index];


  model.addEventListener(
    'load',
    () => model.play({ repetitions: 1 }),
    { once: true }
  );


  //text changes
  heroTag.innerHTML = heroTaglines[index];

  //color changes
  heroSec.style.backgroundColor = heroColors[index];
  heroTag.style.color = TagColors[index];
  waves.style.backgroundColor = wavesColors[index];
  cta.style.backgroundColor = btnColors[index];
  arrowRight.style.backgroundColor = btnColors[index];
});
