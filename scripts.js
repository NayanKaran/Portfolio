function showTheMenu() {
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('overlay-bg').style.display = 'block';
  document.getElementById('header').style.filter = 'blur(7px)';
  document.getElementById('profile').style.filter = 'blur(7px)';
  document.getElementById('projects').style.filter = 'blur(7px)';
}

function hideTheMenu() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('overlay-bg').style.display = 'none';
  document.getElementById('header').style.filter = 'blur(0px)';
  document.getElementById('profile').style.filter = 'blur(0px)';
  document.getElementById('projects').style.filter = 'blur(0px)';
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
    title : "Tonic",
    info : ["CANOPY", "Back End Dev", "2015"],
    featured_image : "./images/project-snapshots/project1.png",
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies : ["html", "css", "javascript"],
    link_to_Source : "#",
    link_to_live_version : "#"
  },
  {
    title : "Tonic",
    info : ["CANOPY", "Back End Dev", "2015"],
    featured_image : "./images/project-snapshots/project1.png",
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies : ["html", "css", "javascript"],
    link_to_Source : "#",
    link_to_live_version : "#"
  },
  {
    title : "Tonic",
    info : ["CANOPY", "Back End Dev", "2015"],
    featured_image : "./images/project-snapshots/project1.png",
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies : ["html", "css", "javascript"],
    link_to_Source : "#",
    link_to_live_version : "#"
  },
  {
    title : "Tonic",
    info : ["CANOPY", "Back End Dev", "2015"],
    featured_image : "./images/project-snapshots/project1.png",
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies : ["html", "css", "javascript"],
    link_to_Source : "#",
    link_to_live_version : "#"
  }
]

for (let i=0; i<projectsDetails.length; i+=1) {
  let projectSection = document.createElement('section');
  projectSection.className = 'project';

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
  
  
/*
<section class="project">
        <img class="project-snapshot" src="./images/project-snapshots/project1.png" alt="project snapshot">
        <p class="project-description">
          A daily selection of privately personalized reads; no accounts or
          sign-ups required.
        </p>
        <ul class="project-languages">
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
        </ul>
        <button type="button">See Project</button>
      </section>
*/


document.querySelector("#projects").appendChild(projectSection);


} 

