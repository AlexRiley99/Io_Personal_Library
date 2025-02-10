document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById("icon"); 
    const searchBar = document.getElementById("searchBar");
    const title = document.querySelectorAll(".title"); 
    const searchMsg = document.getElementById("searchMsg");

    const logOutBtn = document.getElementById("logOutBtn");
    const addRefBtn = document.getElementById("addRefBtn");
    const manageRefsBtn = document.getElementById("manageRefsBtn");

    function makeSearch() {
        let searchTerm = searchBar.value.trim().toLowerCase(); //Get search term and convert it to lowercase

        //Clear search message if search term is empty
        if (searchTerm.length === 0) {
            searchMsg.textContent = ""; 
            return; 
        }

        let matches = []; //Array to hold matched titles

        //Loop through all titles and search for a match
        title.forEach((paragraph) => {
            const titleText = paragraph.textContent.toLowerCase(); //Get text content of the title and convert to lowercase

            //If the title contains the search term
            if (titleText.includes(searchTerm)) {
                matches.push(paragraph.textContent); //Add the matching title to the matches array
            }
        });

        //If matches were found, update the message
        if (matches.length > 0) {
            //If there's one match
            if (matches.length === 1) {
                searchMsg.textContent = `Match found! ${matches[0]}`; //Show the single match
            }
            //If there are multiple matches
            else {
                searchMsg.innerHTML = "Matches found: <ul>";
                matches.forEach(match => {
                    searchMsg.innerHTML += `<li>${match}</li>`; //Add each match as a list item
                });
                searchMsg.innerHTML += "</ul>";
            }

            //Make searchMsg clickable to scroll to first match (or first in the list if multiple matches)
            searchMsg.style.cursor = "pointer";

            //Add event listener to scroll to the first matched title (or first one in the list)
            searchMsg.addEventListener("click", () => {
                // Scroll to the first matching title
                const firstMatch = title[Array.from(title).findIndex((p) => p.textContent === matches[0])];
                firstMatch.scrollIntoView({ behavior: "smooth" });
            });
        }
        //If no matches are found
        else {
            searchMsg.textContent = "No match found."; 
            searchMsg.style.cursor = "default"; 
        }
    }

    //Add event listener for search icon click
    icon.addEventListener("click", makeSearch);

    //Trigger search when pressing "Enter" key in the search bar
    searchBar.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            makeSearch();
        }
    });
});
