// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const firstnameField = document.getElementById("firstname");
const firstnameError = document.getElementById("firstname-error");
const lastnameField = document.getElementById("lastname");
const lastnameError = document.getElementById("lastname-error");
const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");

// (2) Interaktionen festlegen
firstnameField.addEventListener("keyup", () => {
    onChangeField();
    onChangeFirstnameField();
});
lastnameField.addEventListener("keyup", () => {
    onChangeField();
    onChangeLastnameField();
});
emailField.addEventListener("keyup", () => {
  onChangeField();
  onChangeEmailField();
});
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// (3) Interaktionen Code
const onChangeFirstnameField = () => {
    // falls man etwas während der Eingabe prüfen möchte
};

const onChangeLastnameField = () => {
    // falls man etwas während der Eingabe prüfen möchte
};

const onChangeEmailField = () => {
    // falls man etwas während der Eingabe prüfen möchte
};

const onChangeField = () => {
  if (firstnameField.value === "" || lastnameField.value === "" || emailField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const onClickSubmit = async () => {
    let validForm = false;

    if (firstnameField.value.length <= 1) {
        validForm = false;
        firstnameError.innerHTML = "Der Vorname ist zu kurz.";
    } else {
        firstnameError. innerHTML = "";
        validForm = true;
    }
    
    if (lastnameField.value.length <= 1) {
        validForm = false;
        lastnameError.innerHTML = "Der Nachname ist zu kurz.";
    } else {
        lastnameError. innerHTML = "";
        validForm = true;
    }

    /*var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (emailField.value.match(validRegex)) {
        emailError.innerHTML = "";
        validForm = true;
    } else {
        validForm = false;
        emailError.innerHTML = "Bitte geben Sie eine gültige Email Adresse an.";
    }*/
    
    if (validForm) {
        // Daten aus dem Formular für die Datenbank bereitstellen
        const data = {
            group: "b8", // SQL Gruppen Namen
            pw: "228f03a3", // SQL Passwort
            tableName: "user", // Name der Tabelle in der SQL Datenbank

            columns: {
            // "email" Name der Spalte in der SQL Tabelle
            // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
            firstname: firstnameField.value,
            lastname: lastnameField.value,
            email: emailField.value,
            },
        };
        // Speichert die Daten in der Datenbank
        await databaseClient.insertInto(data);

        // Nach dem Speichern verschwindet das Formular, eine Dankeschön Nachricht erscheint
        formContainer.classList.add("hidden");
        thankYouContainer.classList.remove("hidden");
    }
};