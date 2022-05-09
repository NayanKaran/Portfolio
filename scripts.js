const element = document.getElementById("nav");
element.addEventListener("click", showTheMenu);

function showTheMenu() {
    document.getElementById("overlay").style.display = "block";
  }