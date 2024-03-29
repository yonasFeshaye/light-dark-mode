// const toggleSwitch = document.querySelector('input[type="checkbox"]');
// const nav = document.getElementById('nav');
// const toggleIcon = document.getElementById('toggle-icon');
// const image1 = document.getElementById('image1');
// const image2 = document.getElementById('image2');
// const image3 = document.getElementById('image3');
// const textBox = document.getElementById('text-box');

// // Dark or Lighe Images
// function imageMode(color) {
//     image1.src = `img/undraw_design_notes_${color}.svg`
//     image2.src = `img/undraw_programming_re_${color}.svg`
//     image3.src = `img/undraw_feeling_proud_${color}.svg`

// }

// // Dark Mode Styles
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     imageMode('dark')
// }

// // Light Mode Styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('light')
// }

// // Switch Theme Dynamically
// function switchTheme(event) {
//     if (event.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         darkMode();
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         lightMode();
//     }
// }

// // Event Listnner
// toggleSwitch.addEventListener("change", switchTheme);

// GPT Result .

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function setImageMode(color) {
    image1.src = `img/undraw_design_notes_${color}.svg`;
    image2.src = `img/undraw_programming_re_${color}.svg`;
    image3.src = `img/undraw_feeling_proud_${color}.svg`;
}

function setStyles(backgroundColor, modeText, replaceClass) {
    nav.style.backgroundColor = `rgb(${backgroundColor} / 50%)`;
    textBox.style.backgroundColor = `rgb(${replaceClass === 'fa-moon' ? '0 0 0' : '255 255 255'} / 50%)`;
    toggleIcon.children[0].textContent = `${modeText} Mode`;
    toggleIcon.children[1].classList.replace(replaceClass, replaceClass === 'fa-moon' ? 'fa-sun' : 'fa-moon');
    setImageMode(replaceClass === 'fa-moon' ? 'dark' : 'light');
}

function switchTheme(event) {
    const isDarkMode = event.target.checked;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    setStyles(isDarkMode ? '0 0 0' : '255 255 255', isDarkMode ? 'Dark' : 'Light', isDarkMode ? 'fa-sun' : 'fa-moon');
}

toggleSwitch.addEventListener("change", switchTheme);