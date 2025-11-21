// snow.js
window.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snowflakes';
    document.body.appendChild(snowContainer);

    const snowflakeCount = 80; //Πυκνότητα νυφάδων

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄'; // μπορείς να αλλάξεις σε ❅ ή ❆

        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.fontSize = (10 + Math.random() * 20) + 'px';
        snowflake.style.animationDuration = (5 + Math.random() * 10) + 's';
        snowflake.style.animationDelay = (Math.random() * 5) + 's';

        snowContainer.appendChild(snowflake);
    }
});