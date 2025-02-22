document.addEventListener('DOMContentLoaded', () => {
    const smallBook = document.getElementById("smallBook");
    const mediumBook = document.getElementById("mediumBook");
    const largeBook = document.getElementById("largeBook");

    const red = document.getElementById("red");
    const orange = document.getElementById("orange");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const indigo = document.getElementById("indigo");
    const purple = document.getElementById("purple");
    const black = document.getElementById("black");
    const white = document.getElementById("default");

    const color = document.querySelectorAll(".colorDiv");

    const serif = document.getElementById("serif");
    const sansSerif = document.getElementById("sansSerif");
    const script = document.getElementById("script");
    const handwriting = document.getElementById("handwriting");
    const electronic = document.getElementById("electronic");

    const preview = document.getElementById("preview");

    //Change book size
    function changeBookSize(size) {
        switch(size) {
            case "small":
                preview.style.height = "100px";
                preview.style.width = "90px";
                break;
            case "medium":
                preview.style.height = "150px";
                preview.style.width = "140px";
                break;
            case "large":
                preview.style.height = "200px";
                preview.style.width = "190px";
                break;
            default:
                preview.style.height = "100px";
                preview.style.width = "90px"; 
                break;
        }
    }

    //Change book color
    function changeBookColor(color) {
        switch(color) {
            case "red":
                preview.style.background = 'linear-gradient(to bottom right, rgb(200, 1, 1), rgb(230, 2, 2), rgb(240, 2, 2), red, rgb(240, 2, 2), rgb(230, 2, 2), rgb(200, 1, 1))';
                break;
            case "orange":
                preview.style.background = 'linear-gradient(to bottom right, rgb(205, 134, 2), rgb(230, 138, 2), rgb(245, 160, 1), orange, rgb(245, 160, 1), rgb(230, 138, 2), rgb(205, 134, 2))';
                break;
            case "yellow":
                preview.style.background = 'linear-gradient(to bottom right, rgb(220, 220, 1), rgb(225, 225, 1), rgb(250, 250, 2), yellow, rgb(250, 250, 2), rgb(225, 225, 1) ,rgb(220, 220, 1))';
                break;
            case "green":
                preview.style.background = 'linear-gradient(to bottom right, rgb(0, 93, 0), rgb(1, 120, 1), rgb(1, 129, 1), green, rgb(1, 129, 1), rgb(1, 120, 1), rgb(0, 93, 0))';
                break;
            case "blue":
                preview.style.background = 'linear-gradient(to bottom right, rgb(1, 1, 198), rgb(1, 1, 223), rgb(1, 1, 238), blue, rgb(1, 1, 238), rgb(1, 1, 223), rgb(1, 1, 198))';
                break;
            case "indigo":
                preview.style.background = 'linear-gradient(to bottom right, rgb(68, 1, 116), rgb(64, 0, 110), rgb(73, 0, 125), indigo, rgb(73, 0, 125), rgb(64, 0, 110), rgb(68, 1, 116))';
                break;
            case "purple":
                preview.style.background = 'linear-gradient(to bottom right, rgb(92, 0, 92), rgb(116, 0, 116), rgb(125, 1, 125), purple, rgb(125, 0, 125),rgb(116, 0, 116), rgb(92, 0, 92))';
                break;
            case "pink":
                preview.style.background = 'linear-gradient(to bottom right, rgb(252, 139, 158), rgb(252, 152, 169), rgb(252, 173, 186), rgb(251, 180, 192), rgb(252, 173, 186), rgb(252, 152, 169), rgb(252, 139, 158))';
                break;
            case "black":
                preview.style.background = 'linear-gradient(to bottom right, rgb(0, 0, 0), rgb(15, 15, 15), rgb(25, 25, 25), rgb(30, 30, 30), rgb(25, 25, 25), rgb(15, 15, 15), rgb(0, 0, 0))';
                break;
            default:
                preview.style.background = 'linear-gradient(to bottom right, rgb(207, 207, 207), rgb(232, 231, 231), rgb(246, 245, 245), white, rgb(246, 245, 245),rgb(232, 231, 231), rgb(207, 207, 207))';
                break;
        }
    }
    
    //Change font
    function changeFont(font) {
        switch(font) {
            case "serif":
                preview.style.fontFamily = 'Georgia, "Times New Roman", Times, serif';
                break;
            case "sansSerif":
                preview.style.fontFamily = 'Arial, Helvetica, sans-serif';
                break;
            case "script":
                preview.style.fontFamily = '"Dancing Script", sans-serif';
                break;
            case "handwriting":
                preview.style.fontFamily = '"Indie Flower", sans-serif';
                break;
            case "electronic":
                preview.style.fontFamily = '"Orbitron", sans-serif';
                break;
            default:
                preview.style.fontFamily = 'serif';
                break;
        }
    }

    //Event Listeners for Book Size
    smallBook.addEventListener("click", () => changeBookSize("small"));
    mediumBook.addEventListener("click", () => changeBookSize("medium"));
    largeBook.addEventListener("click", () => changeBookSize("large"));

    //Event Listeners for Color
    red.addEventListener("click", () => changeBookColor("red"));
    orange.addEventListener("click", () => changeBookColor("orange"));
    yellow.addEventListener("click", () => changeBookColor("yellow"));
    green.addEventListener("click", () => changeBookColor("green"));
    blue.addEventListener("click", () => changeBookColor("blue"));
    indigo.addEventListener("click", () => changeBookColor("indigo"));
    purple.addEventListener("click", () => changeBookColor("purple"));
    pink.addEventListener("click", () => changeBookColor("pink"));
    black.addEventListener("click", () => changeBookColor("black"));
    white.addEventListener("click", () => changeBookColor("default"));
    
    //Add font change listeners
    serif.addEventListener("click", () => changeFont("serif"));
    sansSerif.addEventListener("click", () => changeFont("sansSerif"));
    script.addEventListener("click", () => changeFont("script"));
    handwriting.addEventListener("click", () => changeFont("handwriting"));
    electronic.addEventListener("click", () => changeFont("electronic"));
});
