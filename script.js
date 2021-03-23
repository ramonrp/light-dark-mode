const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleText = document.querySelector(".toggle-text");
const iconMode = document.querySelector(".fas");
const textBox = document.querySelector(".text-box");
const images = document.querySelectorAll("img");
const nav = document.querySelector("nav");
const memoryDarkMode = localStorage.getItem("theme");

function darkMode() {
    document.body.dataset.theme = "dark";
    toggleText.innerText = "Dark Mode"
    iconMode.classList.replace("fa-sun", "fa-moon");
    nav.style.backgroundColor = "black"
    textBox.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    for (let img of images) {
        let text = img.getAttribute("src");
        text = text.replace("light", "dark");
        img.src = text;
    }
    localStorage.setItem("theme", "dark");
}

function lightMode() {
    document.body.dataset.theme = "";
    toggleText.innerText = "Light Mode"
    iconMode.classList.replace("fa-moon", "fa-sun");
    nav.style.backgroundColor = ""
    for (let img of images) {
        let text = img.getAttribute("src");
        text = text.replace("dark", "light");
        img.src = text;
    }
    localStorage.setItem("theme", "light");
}

//Check if user set previously a theme. 
if (memoryDarkMode) {
    if (memoryDarkMode == "dark") {
        darkMode();
        toggleSwitch.checked = true;
    } else {
        lightMode();
        console.log("haha!")
        toggleSwitch.checked = false;
    }
}


//switch between modes. 
function switchDarkMode(event) {
    if (event.target.checked) {
        darkMode();
    } else {
        lightMode();
    }
}

//add event listener
toggleSwitch.addEventListener("change", switchDarkMode)