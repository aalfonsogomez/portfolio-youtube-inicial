const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColor = document.getElementById('toggle-color');

const rootStyles = document.documentElement.style;

const flags = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async lang => {
    const requestJson = await fetch(`./languages/${lang}.json`);
    const texts = await requestJson.json();

    for (const text of textsToChange) {
        const section = text.dataset.section;
        const value = text.dataset.value;
        text.innerHTML = texts[section][value];
    }
};

toggleTheme.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src='assets/icons/sun.svg';
        toggleText.textContent = "Light Mode";
    } else {
        toggleIcon.src='assets/icons/moon.svg';
        toggleText.textContent = "Dark Mode";
    }
});

toggleColor.addEventListener('click', (e)=> {
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
});

flags.addEventListener('click', (e)=> {
    changeLanguage(e.target.parentElement.dataset.language);
});