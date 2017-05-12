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
    }
    if (!validateFormElement(document.contactForm.last_name.value)) {
        validationResults.push('Last name is needed');
    }
    if (!validateFormElement(document.contactForm.email.value)) {
        validationResults.push('Email is needed');
    }
    if (!validateFormElement(document.contactForm.phone.value)) {
        validationResults.push('Phone number is needed');
    }
    if (!validateFormElement(document.contactForm.message.value)) {
        validationResults.push('Please enter a message');
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