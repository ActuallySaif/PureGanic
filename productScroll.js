let drinksModel = document.getElementById("bottleReveal");
let yogurtsModel = document.getElementById("yogurtReveal");

drinksModel.addEventListener('load', () => {

    drinksModel.animationName = "BottleReveal";

    let animDuration = 1;

    window.addEventListener('scroll', () => {

        let drinksSec = document.getElementById("prodBlockId");
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

        let drinksSec = document.getElementById("prodBlockId");
        const rect = drinksSec.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - (rect.bottom / ((windowHeight ) + rect.height));
        progress = Math.min(Math.max(progress, 0), 1);

        yogurtsModel.currentTime = progress * animDuration;

    });

});