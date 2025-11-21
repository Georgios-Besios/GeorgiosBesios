// Πάρε τρέχον αριθμό επισκέψεων από LocalStorage
let visits = localStorage.getItem("visitCount");

// Αν δεν υπάρχει, ξεκίνα από το 0
if (visits === null) {
    visits = 0;
}

// Αύξησε τον αριθμό κατά 1
visits++;

// Αποθήκευσέ τον ξανά
localStorage.setItem("visitCount", visits);

// Εμφάνισε τον στη σελίδα
document.getElementById("visitCount").textContent = visits;
