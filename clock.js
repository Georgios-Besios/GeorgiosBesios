// clock.js
window.addEventListener('DOMContentLoaded', () => {
    // Δημιουργία container αν δεν υπάρχει
    let clockDiv = document.getElementById('digitalClock');
    if (!clockDiv) {
        clockDiv = document.createElement('div');
        clockDiv.id = 'digitalClock';
        document.body.appendChild(clockDiv);
    }

    // Στυλ για το ρολόι
    clockDiv.style.position = 'fixed';
    clockDiv.style.top = '20px';
    clockDiv.style.right = '20px';
    clockDiv.style.fontFamily = 'Arial, sans-serif';
    clockDiv.style.fontSize = '28px';
    clockDiv.style.fontWeight = 'bold';
    clockDiv.style.color = '#ffffff';
    clockDiv.style.backgroundColor = '#004d4d';
    clockDiv.style.padding = '10px 20px';
    clockDiv.style.borderRadius = '10px';
    clockDiv.style.zIndex = '1000';
    clockDiv.style.textAlign = 'center';

    function updateClock() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // οι μήνες είναι 0-indexed
        const year = now.getFullYear();

        const timeString = `${hours}:${minutes}:${seconds}`;
        const dateString = `${day}/${month}/${year}`;

        clockDiv.innerHTML = `${timeString} <br> ${dateString}`;
    }

    // Ενημέρωση κάθε δευτερόλεπτο
    setInterval(updateClock, 1000);
    // Αρχική εκτέλεση
    updateClock();
});
