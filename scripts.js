const element = document.getElementById("nav");
element.addEventListener("click", showTheMenu);

function showTheMenu() {
    document.getElementById("overlay").style.display = "flex";
  }

  const close_button = document.getElementById("close-button");
  close_button.addEventListener("click", hideTheMenu);
  function hideTheMenu() {
      document.getElementById("overlay").style.display = "none";
    }


  const menu_links = document.getElementsByClassName("menu-link");
    for(let i=0;i < menu_links.length ;i++){
      menu_links[i].addEventListener("click", hideTheMenu);
    }
