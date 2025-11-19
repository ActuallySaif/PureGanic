let rotateBtn = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");
let rotateValue = 0;
let model = document.getElementById("bottle3dElement");


arrowRight.addEventListener("click", () => {

  model.play({
    repetitions: 1
  });

  

});