// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
const submitButton = document.getElementById("submit");
submitButton.disabled = true; //macht, dass der Button vom Anfang an deaktiviert ist
const firstnameField = document.getElementById("firstname");
const firstnameError = document.getElementById("firstname-error");
const lastnameField = document.getElementById("lastname");
const lastnameError = document.getElementById("lastname-error");
const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");

// (2) Interaktionen festlegen
firstnameField.addEventListener("keyup", () => { //wird jedesmal bei Drücken einer Taste im Vornamefeld ausgelöst (keyup)
    onChangeField(); //löst die onChangeField Funktion aus
});
lastnameField.addEventListener("keyup", () => { //wird jedesmal bei Drücken einer Taste im Nachnamenfeld ausgelöst (keyup)
    onChangeField(); //löst die onChangeField Funktion aus
});
emailField.addEventListener("keyup", () => { //wird jedesmal bei Drücken einer Taste im Emailfeld ausgelöst (keyup)
  onChangeField(); //löst die onChangeField Funktion aus
});
submitButton.addEventListener("click", async (event) => { //wird beim Drücken des Submitbuttons ausgelöst
  event.preventDefault(); //nicht selber geschrieben
  onClickSubmit(); //löst die Funktion aus
});


const onChangeField = () => {
  if (firstnameField.value === "" || lastnameField.value === "" || emailField.value === "") { //testet, ob in allen Felder etwas ist
    submitButton.disabled = true; //macht, dass man den Submitbutton drücken kann
  } else {
    submitButton.disabled = false;
  }
};

const onClickSubmit = async () => {
    let validForm = false; //standardmässig auf false, damit man nicht leer abschicken kann

    if (firstnameField.value.length <= 1) { //schaut, ob der Vorname mehr als 1 Zeichen hat
        validForm = false; //damit es keine Fehler gibt immer wieder auf false setzen, wenn es Fehler gibt
        firstnameError.innerHTML = "Der Vorname ist zu kurz."; //sagt dem User, dass der Vorname zu kurz ist
    } else {
        firstnameError. innerHTML = "";
        validForm = true; //sagt, dass bis jetzt das Formular okay ist
    }
    
    if (lastnameField.value.length <= 1) { //schaut, ob der Nachname mehr als 1 Zeichen hat
        validForm = false; //damit es keine Fehler gibt immer wieder auf false setzen, wenn es Fehler gibt
        lastnameError.innerHTML = "Der Nachname ist zu kurz."; //sagt dem User, dass der Nachname zu kurz ist
    } else {
        lastnameError. innerHTML = "";
        validForm = true; //sagt, dass bis jetzt das Formular okay ist
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Format der Email wird hier definiert
    
    if (emailField.value.match(validRegex)) { //testet, ob die Email dem Format entspricht
        emailError.innerHTML = "";
        validForm = true; //sagt, dass bis jetzt das Formular okay ist
    } else {
        validForm = false;
        emailError.innerHTML = "Bitte geben Sie eine gültige Email Adresse an.";
    }
    
    if (validForm) { //wenn alles stimmt wird dier Codeblock ausgeführt
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
        formContainer.classList.add("hidden"); //lässt das Formular verschwinden
        thankYouContainer.classList.remove("hidden"); //lässt die Dankesnachricht erscheinen
    }
};