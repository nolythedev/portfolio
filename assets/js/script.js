console.log('Script has loaded');

// Target the button 
const bodyEl = document.body;
const traitsEl = document.querySelector('#traits');
const themeBtn = document.querySelector('#themeToggle');
const lightMoon = '<i class="fa-regular fa-sun"></i>';
const darkMoon = '<i class="fa-solid fa-moon"></i>';

let isDark = true; // Check if this should be set to true or false initially

// On click check if light or dark and set to light or dark

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

themeBtn.setAttribute('style', 'color: #121316; background-color: transparent; border: none; font-size: 25px; cursor: pointer;');
