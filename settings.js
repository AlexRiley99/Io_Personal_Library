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
    function changeBookSize(){
        
    }

    //Change book color
    function changeBookColor(background, preview){
        switch(background){
            case "red":
            preview.css('background', 'linear-gradient(to bottom right, rgb(200, 1, 1), rgb(230, 2, 2), rgb(240, 2, 2), red, rgb(240, 2, 2), rgb(230, 2, 2), rgb(200, 1, 1));');
            break

            case orange:
                break
            
            case yellow:
                break

            case green:
                break

            case blue:
                break
            
            case indigo:
                break

            case purple:
                break

            case pink:
                break

            case black:
                break

            default:
                break
        }
            
    }
    //Change font
    function changeFont(){

    }


    //Event Listeners
});