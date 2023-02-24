let homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function(){
  window.location.href = "myportfolio.html";
});

const gridContainer = document.getElementById("grid-container");
const sidebar = document.getElementById("sidebar");

function checkWidth() {
    if (window.innerWidth <= 600) {
        gridContainer.style.gridTemplateColumns = "1fr";
        gridContainer.style.gridTemplateRows = "repeat(4, 1fr)";
        gridContainer.style.gridTemplateAreas = `"name"
                                                  "mypic"
                                                  "welcome"
                                                  "contact"`;
        sidebar.style.display = "none";
    } else if (window.innerWidth <= 900) {
        gridContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
        gridContainer.style.gridTemplateRows = "repeat(3, 1fr)";
        gridContainer.style.gridTemplateAreas = `"name mypic"
                                                  "welcome welcome"
                                                  "contact contact"`;
        sidebar.style.display = "block";
    } else {
        gridContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
        gridContainer.style.gridTemplateRows = "repeat(3, 1fr)";
        gridContainer.style.gridTemplateAreas = `"name name name"
                                                  "mypic welcome welcome"
                                                  "contact contact contact"`;
        sidebar.style.display = "block";
    }
}

window.onresize = checkWidth;
checkWidth();
