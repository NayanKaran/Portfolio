function showTheMenu() {
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('overlay-bg').style.display = 'block';
}

function hideTheMenu() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('overlay-bg').style.display = 'none';
}

const navElement = document.getElementById('nav');
navElement.addEventListener('click', showTheMenu);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', hideTheMenu);

const menuLinks = document.getElementsByClassName('menu-link');
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideTheMenu);
}

let projectsDetails = [
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["html", "css", "javascript"],
    link_to_Source: "#",
    link_to_live_version: "#"
  },
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["html", "css", "javascript"],
    link_to_Source: "#",
    link_to_live_version: "#"
  },
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["html", "css", "javascript"],
    link_to_Source: "#",
    link_to_live_version: "#"
  },
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["html", "css", "javascript"],
    link_to_Source: "#",
    link_to_live_version: "#"
  }
]

for (let i = 0; i < projectsDetails.length; i += 1) {
  let projectSection = document.createElement('section');
  projectSection.classList.add('project');

  let projectTitle = document.createElement('h3');
  projectTitle.className = 'project-heading';
  projectTitle.textContent = projectsDetails[i].title;
  projectSection.appendChild(projectTitle);

  let projectInfo = document.createElement('ul');
  projectInfo.className = 'project-info';

  let projectName = document.createElement('li');
  projectName.className = 'project-name';
  projectName.textContent = projectsDetails[i].info[0];
  projectInfo.appendChild(projectName);

  let projectRole = document.createElement('li');
  projectRole.className = 'project-role';
  projectRole.textContent = projectsDetails[i].info[1];
  projectInfo.appendChild(projectRole);

  let projectYear = document.createElement('li');
  projectYear.className = 'project-year';
  projectYear.textContent = projectsDetails[i].info[2];
  projectInfo.appendChild(projectYear);

  projectSection.appendChild(projectInfo);

  let projectImage = document.createElement('img');
  projectImage.classList.add('project-snapshot');
  projectImage.src = projectsDetails[i].featured_image;
  projectImage.alt = "Project snapshot";
  if (i % 2 != 0) {
    projectImage.classList.add('right-aligned');
    projectSection.classList.add('right-aligned');
  }
  projectSection.appendChild(projectImage);

  let projectDescription = document.createElement('p');
  projectDescription.className = 'project-description';
  projectDescription.textContent = projectsDetails[i].description;
  projectSection.appendChild(projectDescription);

  let technologies = document.createElement('ul');
  technologies.className = 'project-languages';


  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    let technology = document.createElement('li');
    technology.textContent = projectsDetails[i].technologies[j];
    technologies.appendChild(technology);
  }
  projectSection.appendChild(technologies);


  let seeProjectButton = document.createElement('button');
  seeProjectButton.type = 'button';
  seeProjectButton.textContent = "See Project";
  seeProjectButton.classList.add('see-project-button');
  projectSection.appendChild(seeProjectButton);

  document.querySelector("#projects").appendChild(projectSection);
}

function hideProjectDetailsPopup() {
  document.querySelector("#popup-overlay").style.display = 'none';
  document.querySelector("#details-popup").style.display = 'none';
}

function showProjectDetailsPopup(i) {
   if(!!document.getElementById('popup-container') == true ){
      document.getElementById('popup-container').remove();
   }

  let projectDetailsPopupContainer = document.createElement('div');
  projectDetailsPopupContainer.id = 'popup-container';
  let projectDetailsPopupOverlay = document.createElement('div');
  projectDetailsPopupOverlay.id = 'popup-overlay';
  projectDetailsPopupOverlay.style.display = 'block';
  projectDetailsPopupContainer.appendChild(projectDetailsPopupOverlay);
  let projectDetailsPopup = document.createElement('div');
  projectDetailsPopup.id = "details-popup";
  projectDetailsPopup.style.display = 'flex';
  projectDetailsPopupContainer.appendChild(projectDetailsPopup);


  let popupHeader = document.createElement('div');

  let popupHeaderTitle = document.createElement('h3');
  popupHeaderTitle.textContent = projectsDetails[i].title;
  popupHeader.appendChild(popupHeaderTitle);

  let popupHeaderCloseButton = document.createElement('img');
  popupHeaderCloseButton.src = "./images/icons/close-icon-gray.svg";
  popupHeaderCloseButton.alt = "close popup window";

  popupHeader.appendChild(popupHeaderCloseButton);

  projectDetailsPopup.appendChild(popupHeader);

  let projectInfo = document.createElement('ul');
  projectInfo.className = 'project-info';

  let projectName = document.createElement('li');
  projectName.className = 'project-name';
  projectName.textContent = projectsDetails[i].info[0];
  projectInfo.appendChild(projectName);

  let projectRole = document.createElement('li');
  projectRole.className = 'project-role';
  projectRole.textContent = projectsDetails[i].info[1];
  projectInfo.appendChild(projectRole);

  let projectYear = document.createElement('li');
  projectYear.className = 'project-year';
  projectYear.textContent = projectsDetails[i].info[2];
  projectInfo.appendChild(projectYear);

  projectDetailsPopup.appendChild(projectInfo);


  let popupImage = document.createElement('img');
  popupImage.src = projectsDetails[i].featured_image;
  popupImage.alt = "Project snapshot";

  projectDetailsPopup.appendChild(popupImage);

  let popupDescription = document.createElement('div');


  let popupTextDescription = document.createElement('p');
  popupTextDescription.textContent = projectsDetails[i].description;
  popupDescription.appendChild(popupTextDescription);

  let popupDetails = document.createElement('div');

  let popupTechnologies = document.createElement('div');

  let technologies = document.createElement('ul');
  technologies.className = 'project-languages';

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    let technology = document.createElement('li');
    technology.textContent = projectsDetails[i].technologies[j];
    technologies.appendChild(technology);
  }
  popupTechnologies.appendChild(technologies);

  popupDetails.appendChild(popupTechnologies);

  let popupSeparator = document.createElement('hr');
  popupDetails.appendChild(popupSeparator);

  let popupButtons = document.createElement('div');

  let popupButton1 = document.createElement('button');
  popupButton1.textContent = "See live";
  let popupButton1Icon = document.createElement('i');
  popupButton1Icon.classList.add("link-icon");
  popupButton1.appendChild(popupButton1Icon);
  popupButtons.appendChild(popupButton1);

  let popupButton2 = document.createElement('button');
  popupButton2.textContent = "See Source";
  let popupButton2Icon = document.createElement('i');
  popupButton2Icon.classList.add("github-icon");
  popupButton2.appendChild(popupButton2Icon);
  popupButtons.appendChild(popupButton2);

  popupDetails.appendChild(popupButtons);

  popupDescription.appendChild(popupDetails);

  projectDetailsPopup.appendChild(popupDescription);

  document.body.appendChild(projectDetailsPopupContainer);
  popupHeaderCloseButton.addEventListener('click',hideProjectDetailsPopup);

}

const seeProjectButtons = document.getElementsByClassName('see-project-button');
for (let i = 0; i < seeProjectButtons.length; i += 1) {
  seeProjectButtons[i].addEventListener('click', function() {
    showProjectDetailsPopup(i);
  })
}
