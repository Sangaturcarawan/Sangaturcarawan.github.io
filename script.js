console.log("Welcome to my portfolio!");

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});