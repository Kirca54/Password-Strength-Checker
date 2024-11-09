function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    // Criteria checks
    const lengthCriteria = password.length >= 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isCommonPassword = checkCommonPassword(password);
    const isSameAsUsername = username && password.toLowerCase() === username.toLowerCase();
    const hasSimplePattern = checkSimplePattern(password);

    let score = 3;  // Base score

    // Add 1 point for each met criterion
    if (lengthCriteria) score += 1;
    if (hasLowerCase) score += 1;
    if (hasUpperCase) score += 1;
    if (hasDigit) score += 1;
    if (hasSpecialChar) score += 1;

    // Apply penalties for missing criterion
    if (!hasLowerCase) score -= 0.5;
    if (!hasUpperCase) score -= 0.5;
    if (!hasDigit) score -= 0.5;
    if (!hasSpecialChar) score -= 0.5;

    // Apply penalty for common password
    if (isCommonPassword) score -= 2;

    // Apply penalty for password matching the username
    if (isSameAsUsername) score -= 2;

    // Apply penalty for simple patterns (e.g., "aaaaa", "12345")
    if (hasSimplePattern) score -= 1;

    // Add length bonus points
    const passwordLength = password.length;
    if (passwordLength >= 12 && passwordLength < 14) {
        score += 1;  // Add 1 point for 12 characters
    } else if (passwordLength >= 16) {
        score += 2;  // Add 2 points for 16+ characters
    }

    // Ensure score is between 0 and 10
    score = Math.max(0, Math.min(score, 10));

    // Display the results
    displayResults(score, {
        lengthCriteria,
        hasLowerCase,
        hasUpperCase,
        hasDigit,
        hasSpecialChar,
        isCommonPassword,
        isSameAsUsername,
        hasSimplePattern
    });
}

function checkCommonPassword(password) {
    const commonPasswords = [
        'password', '1234', '12345', 'qwerty', 'admin', 'letmein', 'welcome', '123456789'
    ];
    return commonPasswords.includes(password.toLowerCase());
}

// Detect simple patterns
function checkSimplePattern(password) {
    const simplePatterns = /^(.)\1{4,}$|1234|abcd|qwerty/;
    return simplePatterns.test(password);
}

function displayResults(score, criteria) {
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const strengthElement = document.getElementById('strength');
    const feedbackElement = document.getElementById('feedback');

    // Display specific feedback
    let feedbackMessages = [];
    if (!criteria.lengthCriteria) feedbackMessages.push('Add more characters.');
    if (!criteria.hasLowerCase) feedbackMessages.push('Add a lowercase letter.');
    if (!criteria.hasUpperCase) feedbackMessages.push('Add an uppercase letter.');
    if (!criteria.hasDigit) feedbackMessages.push('Add a number.');
    if (!criteria.hasSpecialChar) feedbackMessages.push('Add a special character.');
    if (criteria.isCommonPassword) feedbackMessages.push('Avoid common passwords.');
    if (criteria.isSameAsUsername) feedbackMessages.push("Don't use your username as the password.");
    if (criteria.hasSimplePattern) feedbackMessages.push('Avoid simple patterns.');

    // Determine strength label based on score
    let strengthLabel = '';
    if (score <= 4) {
        strengthLabel = 'Weak';
    } else if (score <= 7) {
        strengthLabel = 'Moderate';
    } else if (score <= 9) {
        strengthLabel = 'Strong';
    } else {
        strengthLabel = 'Very Strong';
    }

    strengthElement.textContent = `Password Strength: ${strengthLabel}`;
    scoreElement.textContent = `Score: ${score}/10`;
    feedbackElement.innerHTML = feedbackMessages.join('<br>'); // Display each feedback on a new line
    resultElement.style.display = 'block';
}

