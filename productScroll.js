let drinksModel = document.getElementById("bottleReveal");
let yogurtsModel = document.getElementById("yogurtReveal");
let canModel = document.getElementById("canReveal");
let appleModel = document.getElementById("appleReveal");

drinksModel.addEventListener('load', () => {

    drinksModel.animationName = "BottleReveal";

    let animDuration = 1;

    window.addEventListener('scroll', () => {

        let drinksSec = document.getElementById("prodBlockId1");
        const rect = drinksSec.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - (rect.bottom / ((windowHeight ) + rect.height));
        progress = Math.min(Math.max(progress, 0), 1);

        drinksModel.currentTime = progress * animDuration;

    });

});

yogurtsModel.addEventListener('load', () => {

    yogurtsModel.animationName = "YogurtReveal";

    let animDuration = 1;

    window.addEventListener('scroll', () => {

        let yogurtSec = document.getElementById("prodBlockId2");
        const rect = yogurtSec.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - (rect.bottom / (windowHeight + rect.height));
        progress = Math.min(Math.max(progress, 0), 1);

        yogurtsModel.currentTime = progress * animDuration;

    });

});


canModel.addEventListener('load', () => {

    canModel.animationName = "CanReveal";

    let animDuration = 1;

    window.addEventListener('scroll', () => {

        let canSec = document.getElementById("prodBlockId3");
        const rect = canSec.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - (rect.bottom / ((windowHeight ) + rect.height));
        progress = Math.min(Math.max(progress, 0), 1);

        canModel.currentTime = progress * animDuration;

    });

});

appleModel.addEventListener('load', () => {

    appleModel.animationName = "AppleReveal";

    let animDuration = 1;

    window.addEventListener('scroll', () => {

        let appleSec = document.getElementById("prodBlockId4");
        const rect = appleSec.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - (rect.bottom / ((windowHeight ) + rect.height));
        progress = Math.min(Math.max(progress, 0), 1);

        appleModel.currentTime = progress * animDuration;

    });

});