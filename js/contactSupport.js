/**
 *
 * Check each form element is a text string longer than 0.
 *
 * @param {string} formValue
 * @returns {Boolean}
 */
function validateFormElement(formValue) {
    if ((typeof formValue === 'string') && formValue.length > 0) {
        return true;
    }
    return false;
}

function validateForm() {

    // Array for storing validation failures.
    var validationResults = [];

    if (!validateFormElement(document.contactForm.first_name.value)) {
        validationResults.push('First name is needed');
        document.getElementById("first_name").style.backgroundColor = "red";
        document.getElementById("first_name_valid").style.display = "none";
        document.getElementById("first_name_invalid").style.display = "inline";
    } else {
        document.getElementById("first_name").style.backgroundColor = "";
        document.getElementById("first_name_valid").style.display = "inline";
        document.getElementById("first_name_invalid").style.display = "none";
    }

    if (!validateFormElement(document.contactForm.last_name.value)) {
        validationResults.push('Last name is needed');
        document.getElementById("last_name").style.backgroundColor = "red";
        document.getElementById("last_name_valid").style.display = "none";
        document.getElementById("last_name_invalid").style.display = "inline";
    }  else {
        document.getElementById("last_name").style.backgroundColor = "";
        document.getElementById("last_name_valid").style.display = "inline";
        document.getElementById("last_name_invalid").style.display = "none";
    }

    if (!validateFormElement(document.contactForm.email.value)) {
        validationResults.push('Email is needed');
        document.getElementById("email").style.backgroundColor = "red";
        document.getElementById("email_valid").style.display = "none";
        document.getElementById("email_invalid").style.display = "inline";
    } else {
        document.getElementById("email").style.backgroundColor = "";
        document.getElementById("email_valid").style.display = "inline";
        document.getElementById("email_invalid").style.display = "none";
    }

    if (!validateFormElement(document.contactForm.message.value)) {
        validationResults.push('Please enter a message');
        document.getElementById("message").style.backgroundColor = "red";
        document.getElementById("message_valid").style.display = "none";
        document.getElementById("message_invalid").style.display = "inline";
    } else {
        document.getElementById("message").style.backgroundColor = "";
        document.getElementById("message_valid").style.display = "inline";
        document.getElementById("message_invalid").style.display = "none";
    }

    // Display the results.
    if (validationResults.length === 0) {
        document.getElementById('validationResults').innerHTML = '<em>Form is valid</em>';
    } else {
        // Clear the results area.
        document.getElementById('validationResults').innerHTML = 'Please resubmit with the following information:-';
        for (var i=0; i < validationResults.length; i += 1) {
            var docList = document.createElement('ul')
            document.getElementById('validationResults').appendChild(docList);
            var feedback = document.createElement('li');
            feedback.innerHTML = validationResults[i];
            docList.appendChild(feedback);
        }
    }
    return false;
}