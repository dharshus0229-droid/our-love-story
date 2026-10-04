const slideOne = document.getElementById("slideOne");
const slideTwo = document.getElementById("slideTwo");

const envelope = document.getElementById("envelope");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const passwordInput = document.getElementById("passwordInput");
const openBtn = document.getElementById("openBtn");

const celebration = document.getElementById("celebration");
const memories = document.getElementById("memories");

const error = document.getElementById("error");

const bgMusic = document.getElementById("bgMusic");


/* =====================================
   NO BUTTON RUNS AWAY
===================================== */

function moveNoButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    const randomX = Math.max(
        20,
        Math.random() * maxX
    );

    const randomY = Math.max(
        20,
        Math.random() * maxY
    );

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);


/* =====================================
   YES → OPEN LETTER + START MUSIC
===================================== */

yesBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    // Start music when letter opens
    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => {
        console.log("Music could not start.");
    });


    setTimeout(() => {

        // Fade out first slide
        slideOne.style.opacity = "0";

        setTimeout(() => {

            // Hide first slide
            slideOne.style.display = "none";

            // Show password slide
            slideTwo.style.display = "flex";
            slideTwo.style.opacity = "0";
            slideTwo.style.transform = "translateY(30px)";

            setTimeout(() => {

                slideTwo.style.opacity = "1";
                slideTwo.style.transform = "translateY(0)";

            }, 50);

        }, 800);

    }, 1200);

});


/* =====================================
   PASSWORD CHECK
===================================== */

function checkPassword() {

    const password = passwordInput.value.trim();


    /* CORRECT PASSWORD */

    if (password === "05/10/2025") {

        error.style.display = "none";


        // Fade password slide
        slideTwo.style.opacity = "0";
        slideTwo.style.transform = "translateY(-30px)";


        setTimeout(() => {

            // Hide password slide
            slideTwo.style.display = "none";

            // Show celebration
            celebration.style.display = "flex";

            setTimeout(() => {

                celebration.classList.add("show");

            }, 50);

        }, 900);


        /* =====================================
           CELEBRATION → MEMORIES
        ===================================== */

        setTimeout(() => {

            celebration.classList.remove("show");


            setTimeout(() => {

                celebration.style.display = "none";

                // Show memories
                memories.style.display = "block";

                setTimeout(() => {

                    memories.classList.add("show");

                }, 50);

            }, 1000);

        }, 6500);


    }


    /* WRONG PASSWORD */

    else {

        error.style.display = "block";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* =====================================
   OPEN BUTTON → PASSWORD CHECK
===================================== */

openBtn.addEventListener("click", () => {

    checkPassword();

});


/* =====================================
   ENTER KEY → OPEN
===================================== */

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        checkPassword();

    }

});
