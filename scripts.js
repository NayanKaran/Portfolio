function showTheMenu() {
  if (window.screen.width >= 768) {
    return;
  }
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

const projectsDetails = [
  {
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2015'],
    featured_image: './images/project-snapshots/project1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    long_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    link_to_Source: '#',
    link_to_live_version: '#',
  },
  {
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2016'],
    featured_image: './images/project-snapshots/project1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    long_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    link_to_Source: '#',
    link_to_live_version: '#',
  },
  {
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2017'],
    featured_image: './images/project-snapshots/project1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    long_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    link_to_Source: '#',
    link_to_live_version: '#',
  },
  {
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2018'],
    featured_image: './images/project-snapshots/project1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    long_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    link_to_Source: '#',
    link_to_live_version: '#',
  },
];

for (let i = 0; i < projectsDetails.length; i += 1) {
  const projectSection = document.createElement('section');
  projectSection.classList.add('project');

  const projectTitle = document.createElement('h3');
  projectTitle.className = 'project-heading';
  projectTitle.textContent = projectsDetails[i].title;
  projectSection.appendChild(projectTitle);

  const projectInfo = document.createElement('ul');
  projectInfo.className = 'project-info';

  const [projectNameA, projectRoleA, projectYearA] = projectsDetails[i].info;

  const projectName = document.createElement('li');
  projectName.className = 'project-name';
  projectName.textContent = projectNameA;
  projectInfo.appendChild(projectName);

  const projectRole = document.createElement('li');
  projectRole.className = 'project-role';
  projectRole.textContent = projectRoleA;
  projectInfo.appendChild(projectRole);

  const projectYear = document.createElement('li');
  projectYear.className = 'project-year';
  projectYear.textContent = projectYearA;
  projectInfo.appendChild(projectYear);

  projectSection.appendChild(projectInfo);

  const projectImage = document.createElement('img');
  projectImage.classList.add('project-snapshot');
  projectImage.src = projectsDetails[i].featured_image;
  projectImage.alt = 'Project snapshot';
  if (i % 2 !== 0) {
    projectImage.classList.add('right-aligned');
    projectSection.classList.add('right-aligned');
  }
  projectSection.appendChild(projectImage);

  const projectDescription = document.createElement('p');
  projectDescription.className = 'project-description';
  projectDescription.textContent = projectsDetails[i].description;
  projectSection.appendChild(projectDescription);

  const technologies = document.createElement('ul');
  technologies.className = 'project-languages';

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    const technology = document.createElement('li');
    technology.textContent = projectsDetails[i].technologies[j];
    technologies.appendChild(technology);
  }
  projectSection.appendChild(technologies);

  const seeProjectButton = document.createElement('button');
  seeProjectButton.type = 'button';
  seeProjectButton.textContent = 'See Project';
  seeProjectButton.classList.add('see-project-button');
  projectSection.appendChild(seeProjectButton);

  document.querySelector('#projects').appendChild(projectSection);
}

function hideProjectDetailsPopup() {
  document.querySelector('#popup-overlay').style.display = 'none';
  document.querySelector('#details-popup').style.display = 'none';
}

function showProjectDetailsPopup(i) {
  if (!!document.getElementById('popup-container') === true) {
    document.getElementById('popup-container').remove();
  }

  const projectDetailsPopupContainer = document.createElement('div');
  projectDetailsPopupContainer.id = 'popup-container';

  const projectDetailsPopupOverlay = document.createElement('div');
  projectDetailsPopupOverlay.id = 'popup-overlay';
  projectDetailsPopupOverlay.style.display = 'block';
  projectDetailsPopupContainer.appendChild(projectDetailsPopupOverlay);

  const projectDetailsPopup = document.createElement('div');
  projectDetailsPopup.id = 'details-popup';
  projectDetailsPopup.style.display = 'flex';
  projectDetailsPopup.style.top = `${window.pageYOffset}px`;
  projectDetailsPopupContainer.appendChild(projectDetailsPopup);

  const popupHeader = document.createElement('div');
  popupHeader.id = 'popup-header';

  const popupHeaderTitle = document.createElement('h3');
  popupHeaderTitle.id = 'popup-header-title';
  popupHeaderTitle.textContent = projectsDetails[i].title;
  popupHeader.appendChild(popupHeaderTitle);

  const popupHeaderCloseButton = document.createElement('img');
  popupHeaderCloseButton.id = 'popup-header-close-icon';
  popupHeaderCloseButton.src = './images/icons/close-icon-gray.svg';
  popupHeaderCloseButton.alt = 'close popup window';

  popupHeader.appendChild(popupHeaderCloseButton);

  projectDetailsPopup.appendChild(popupHeader);

  const projectInfo = document.createElement('ul');
  projectInfo.id = 'popup-project-info-list';
  projectInfo.className = 'project-info';

  const [projectNameA, projectRoleA, projectYearA] = projectsDetails[i].info;

  const projectName = document.createElement('li');
  projectName.className = 'project-name';
  projectName.textContent = projectNameA;
  projectInfo.appendChild(projectName);

  const projectRole = document.createElement('li');
  projectRole.className = 'project-role';
  projectRole.textContent = projectRoleA;
  projectInfo.appendChild(projectRole);

  const projectYear = document.createElement('li');
  projectYear.className = 'project-year';
  projectYear.textContent = projectYearA;
  projectInfo.appendChild(projectYear);

  projectDetailsPopup.appendChild(projectInfo);

  const popupImage = document.createElement('img');
  popupImage.id = 'popup-image';
  popupImage.src = projectsDetails[i].featured_image;
  popupImage.alt = 'Project snapshot';

  projectDetailsPopup.appendChild(popupImage);

  const popupDescription = document.createElement('div');
  popupDescription.id = 'popup-description-container';

  const popupTextDescription = document.createElement('p');
  popupTextDescription.id = 'popup-description-text';
  popupTextDescription.textContent = projectsDetails[i].long_description;
  popupDescription.appendChild(popupTextDescription);

  const popupDetails = document.createElement('div');
  popupDetails.id = 'additional-project-details';

  const popupTechnologies = document.createElement('div');
  popupTechnologies.id = 'project-technologies-container';

  const technologies = document.createElement('ul');
  technologies.id = 'project-technologies-list';
  technologies.className = 'project-languages';

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    const technology = document.createElement('li');
    technology.textContent = projectsDetails[i].technologies[j];
    technologies.appendChild(technology);
  }
  popupTechnologies.appendChild(technologies);

  popupDetails.appendChild(popupTechnologies);

  const popupSeparator = document.createElement('hr');
  popupSeparator.classList.add('popup-hr');
  popupDetails.appendChild(popupSeparator);

  const popupButtons = document.createElement('div');
  popupButtons.id = 'popup-buttons-container';

  const popupButton1 = document.createElement('button');
  popupButton1.id = 'see-live-button';
  popupButton1.textContent = 'See live';
  const popupButton1Icon = document.createElement('i');
  popupButton1Icon.classList.add('link-icon');
  popupButton1.appendChild(popupButton1Icon);
  popupButtons.appendChild(popupButton1);

  const popupButton2 = document.createElement('button');
  popupButton2.id = 'see-source-button';
  popupButton2.textContent = 'See Source';
  const popupButton2Icon = document.createElement('i');
  popupButton2Icon.classList.add('github-icon');
  popupButton2.appendChild(popupButton2Icon);
  popupButtons.appendChild(popupButton2);

  popupDetails.appendChild(popupButtons);

  popupDescription.appendChild(popupDetails);

  projectDetailsPopup.appendChild(popupDescription);

  document.body.appendChild(projectDetailsPopupContainer);
  popupHeaderCloseButton.addEventListener('click', hideProjectDetailsPopup);
}

const seeProjectButtons = document.getElementsByClassName('see-project-button');
for (let i = 0; i < seeProjectButtons.length; i += 1) {
  seeProjectButtons[i].addEventListener('click', () => {
    showProjectDetailsPopup(i);
  });
}
