console.log('Script has loaded');

// Target the button 

const themeBtn = document.querySelector('#themeToggle');
const lightMoon = '<i class="fa-regular fa-moon"></i>';
const darkMoon = '<i class="fa-solid fa-moon"></i>';

console.log(document.body.children);

// Set initial text content of themeBtn 

themeBtn.innerHTML = lightMoon;

// Set initial css of button

themeBtn.setAttribute('style', 'color: #121316; background-color: transparent; border: none; font-size: 25px; cursor: pointer;');

// On click check if light or dark and set to light or dark

function toggleTheme(event) {
    event.preventDefault();

    // Change button icon to light or dark 

    // set theme of body to light or dark
    if (themeBtn.innerHTML === lightMoon) {
        themeBtn.innerHTML = darkMoon;
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        themeBtn.innerHTML = lightMoon;
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }

}

themeBtn.addEventListener('click', toggleTheme);
