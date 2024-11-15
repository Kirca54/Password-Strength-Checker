# Password Strength Checker

This web app allows users to check the strength of their password based on several criteria. The app evaluates the password's length, complexity, and overall security, providing feedback and suggestions for improvement.

## Features

- **Length Check**: Passwords must be at least 8 characters long to meet the minimum length requirement.
- **Complexity Check**: Passwords must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.
- **Common Password Check**: The app checks if the password contains common passwords or patterns (e.g., "password", "12345").
- **Uniqueness Check**: The password should not be the same as the username, if provided.
- **Scoring System**: The app provides a score based on how well the password meets the security criteria. A higher score represents a stronger password.
- **Feedback**: The app gives detailed feedback on what criteria the password passes or fails, and suggests improvements.

## Scoring System

The password strength is scored from 0 to 10 based on the following criteria:

- **Base Score**: 
  - 1 point for at least 8 characters.
  - 1 point for at least one lowercase letter.
  - 1 point for at least one uppercase letter.
  - 1 point for at least one digit.
  - 1 point for at least one special character.
- **Length Bonus**: 
  - +1 point for passwords with 12 or more characters.
  - +2 points for passwords with 14 or more characters.
- **Feedback**:
  - **Weak**: Score 0-4
  - **Moderate**: Score 5-7
  - **Strong**: Score 8-9
  - **Very Strong**: Score 10

## How to Use

1. **Enter your username** (optional) in the provided field.
2. **Enter your password** in the password field.
3. **Click the "Check Password Strength" button**.
4. The app will display the strength score along with suggestions for improvement and an overall strength level (Weak, Moderate, Strong, Very Strong).

## Technologies Used

- **HTML5** for the structure.
- **CSS3** for styling, ensuring responsiveness on mobile devices.
- **JavaScript** for logic, including password validation and scoring.

## Responsiveness

The app is designed to be mobile-friendly, adapting to smaller screen sizes using responsive CSS. It works well on both desktop and mobile devices.

## Example

For example, the password `MyP@ssw0rd` will receive:

- **Password Strength**: Strong
- **Score**: 8/10
