/**
 * Get time now in human readable format.
 *
 * @returns {String}
 */
function getNewTime () {
    var dateNow = new Date();

    return dateNow.getHours() + ':' +
            dateNow.getMinutes() + ' ' +
            dateNow.getDate() + '/' +
            dateNow.getMonth() + '/' +
            dateNow.getFullYear() ;
}

/**
 * Main functions supporting index page
 *
 * @returns {void}
 */
function runIndexFunctions () {
        // Update clock every second.
        window.setInterval(function() {
            document.getElementById("clockLocation").innerHTML = getNewTime();
        }, 1000);


}

// Wait for window to load so DOM elements are present.
window.onload = runIndexFunctions;
