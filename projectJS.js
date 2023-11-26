function generateMealPlan() {
    // Get user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const breakfast = document.getElementById('breakfast').value;
    const snack1 = document.getElementById('snack1').value;
    const lunch = document.getElementById('lunch').value;
    const snack2 = document.getElementById('snack2').value;
    const dinner = document.getElementById('dinner').value;

    // Validate email address
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Generate new page content
    const newPageContent = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meal Plan for ${name}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1>Meal Plan for ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Weekly Goal:</strong> ${goal}</p>
            <h2>Weekly Meal Plan</h2>
        </body>
        </html>
    `;

    // Open a new window and write the content
    const newWindow = window.open();
    newWindow.document.write(newPageContent);
}

function clearForm() {
    document.getElementById('mealPlanForm').reset();
}
function isValidEmail(email) {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

