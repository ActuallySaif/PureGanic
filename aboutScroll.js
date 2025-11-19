let yogurts3d = document.getElementById("yogurts3d");

yogurts3d.addEventListener('load', () => {

    yogurts3d.animationName = "CupSpinAnim";

    let animDuration = 1;

    window.addEventListener('scroll', () => {

        let aboutSec = document.getElementById("about");
        const rect = aboutSec.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - (rect.bottom / (windowHeight + rect.height));
        progress = Math.min(Math.max(progress, 0), 1);

        yogurts3d.currentTime = progress * animDuration

    });

});