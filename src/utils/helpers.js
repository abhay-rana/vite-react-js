// helpers.js

/**
 * Formats a date object into a readable string.
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

/**
 * Generates a random string of specified length.
 * @param {number} length - The length of the random string.
 * @returns {string} - The generated random string.
 */
export const generateRandomString = (length) => {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let index = 0; index < length; index++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return result;
};

/**
 * Debounces a function, ensuring it is only called once within a specified time frame.
 * @param {Function} function_ - The function to debounce.
 * @param {number} wait - The debounce time in milliseconds.
 * @returns {Function} - The debounced function.
 */
export const debounce = (function_, wait) => {
    let timeout;
    return (...arguments_) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => function_.apply(this, arguments_), wait);
    };
};

export function getQueryParameters() {
    let query_parameters = {};

    if (!!window.location.search) {
        const urlSearchParameters = new URLSearchParams(window.location.search);
        query_parameters = Object.fromEntries(urlSearchParameters.entries());
    }
    return query_parameters;
}

export function truncateSummary(summary, maxLength) {
    if (!summary) return ''; // If summary is undefined or null, return an empty string

    // Check if the length of the summary is greater than the maximum length
    if (summary.length > maxLength) {
        // If it is, truncate the summary and append "..." at the end
        return summary.substring(0, maxLength) + '...';
    } else {
        // Otherwise, return the original summary
        return summary;
    }
}
