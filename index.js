
var snippet = new Audio("./track.mp3");

document.querySelector(".music").addEventListener("click", function() {
    if (snippet.paused) {
        snippet.play();
    } else {
        snippet.pause();
        //snippet.currentTime = 0; // Optional: Reset to start
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "space") {
        if (snippet.paused) {
            snippet.play();
        } else {
            snippet.pause();
            snippet.currentTime = 0; // Optional: Reset to start
        }
    }
    if (event.key === "ArrowRight") {
        snippet.currentTime += 5;
    }
    if (event.key === "ArrowLeft") {
        snippet.currentTime -= 5;
    }
});