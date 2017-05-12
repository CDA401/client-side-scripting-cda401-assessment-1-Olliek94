/**
 *
 * Check each text form element is a text string longer than 0.
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

    // Counter
    var i;

    // Check address
    if (!validateFormElement(document.orderForm.address_first_line.value)) {
        validationResults.push('Address first line is needed');
    }

    // Check postcode
    if (!validateFormElement(document.orderForm.postcode.value)) {
        validationResults.push('Postcode is needed');
    }

    // Pizza base
    var pizzaBases = document.getElementsByName("base");
    var selectedBase = '';
    for (i=0; i< pizzaBases.length; i++) {
        if (pizzaBases[i].checked) {
            selectedBase = pizzaBases[i].value;
        }
    }
    // No checked value
    if (selectedBase.length === 0) {
        validationResults.push('Please select a pizza base');
    }

    // Pizza topping
    var pizzaToppings = document.getElementsByName("topping");
    var selectedTopping = '';
    for (i=0; i< pizzaToppings.length; i++) {
        if (pizzaToppings[i].checked) {
            selectedTopping = pizzaToppings[i].value;
        }
    }
    // No checked value
    if (selectedTopping.length === 0) {
        validationResults.push('Please select a pizza topping');
    }

    // Display the results.
    if (validationResults.length === 0) {
        document.getElementById('validationResults').innerHTML = '<em>Order is valid</em>';
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