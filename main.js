var main = document.getElementById("main");

function react() {
    main.style.height = window.innerHeight - (71 + 79);
    console.log(main.style.height);
    console.log(window.innerHeight);
};
        
document.addEventListener("DOMContentLoaded", () => {
        react();
    });