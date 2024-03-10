console.log('Script has loaded');

import { projects } from "../utils/projects.js";

// Target the button 
const bodyEl = document.body;
const projectGrid = document.querySelector('#projectGrid');
const themeBtn = document.querySelector('#themeToggle');
const lightMoon = '<i class="fa-solid fa-circle"></i>';
const darkMoon = '<i class="fa-regular fa-circle"></i>';



function displayProjects() {

  for (const project of projects) {
    console.log(projects.length);

      let divEl = document.createElement("div");
      divEl.setAttribute('id',project.id);
      divEl.className = 'project';
      divEl.innerHTML = `
      <img src=${project.imgUrl} class="projectImg">
      <div class="viewMore">
      <a href=${project.projectUrl} target="_blank" alt=${project.title}><i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <div class="project-information heading">
      ${project.title}
      <div class="tags">
      <ul>
      ${project.tags.map(tag => `<li>${tag}</li>`).join('')}
      </ul>
      </div>
      </div>
      `;
     
      projectGrid.append(divEl);
  }
  
}


// On click check if light or dark and set to light or dark

let isDark = true; // Check if this should be set to true or false initially
themeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log('isDark before toggle:', isDark);
    isDark = !isDark;
    // console.log('isDark after toggle:', isDark);
    if (isDark) {
        bodyEl.classList.remove("light");
        bodyEl.classList.add("dark"); 
        themeBtn.innerHTML = darkMoon;
        localStorage.setItem("darkMode", "Active");
    } else {
        bodyEl.classList.remove("dark");
        bodyEl.classList.add("light"); 
        themeBtn.innerHTML = lightMoon;
        localStorage.setItem("darkMode", "Inactive");
    }
});

const darkMode = localStorage.getItem("darkMode");

if (darkMode === 'Active') {
    isDark = true;
    bodyEl.classList.remove("light");
    bodyEl.classList.add("dark");
    themeBtn.innerHTML = darkMoon;
} else {
    isDark = false;
    bodyEl.classList.remove("dark");
    bodyEl.classList.add("light");
    themeBtn.innerHTML = lightMoon;
}

// Set initial text content of themeBtn 

// Set initial css of button
displayProjects();

themeBtn.setAttribute('style', 'color: #121316; background-color: transparent; border: none; font-size: 25px; cursor: pointer;');
