const areFieldsNotEmpty = (name, email, goal) => name.trim() !== '' && email.trim() !== '' && goal.trim() !== '';

// Function to generate a meal plan based on user input
function generateMealPlan() {
    // Retrieve user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const mealInput = {
        breakfast: document.getElementById('breakfast').value,
        snack1: document.getElementById('snack1').value,
        lunch: document.getElementById('lunch').value,
        snack2: document.getElementById('snack2').value,
        dinner: document.getElementById('dinner').value,
    };

    if (!areFieldsNotEmpty(name, email, goal)) {
        alert('Please fill out all required fields.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let mealPlanContent = '';

    for (const day of daysOfWeek) {
        mealPlanContent += `
            <li id="day-of-week"><strong>${day}</strong></li>
            <li><strong>breakfast</strong> ${mealInput.breakfast}</li>
            <li><strong>Snack 1</strong> ${mealInput.snack1}</li>
            <li><strong>Lunch</strong> ${mealInput.lunch}</li>
            <li><strong>Snack 2</strong> ${mealInput.snack2}</li>
            <li><strong>Dinner</strong> ${mealInput.dinner}</li>
            <br><br>
        `;
    }

    const newPageContent = `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Meal Plan for ${name}</title>
                <link rel="stylesheet" href="styles.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </head>
            <body>
                <div class="banner">
                    <div class="imgban" id="imgban1"></div>
                    <h1>Weekly Meal Plan for ${name}</h1>
                </div>
                <div class="user-info">
                    <p><strong>Email:</strong> ${email}</p>
                </div>
                <div class="user-goal">
                    <p><strong>Weekly Goal:</strong> ${goal}</p>
                </div>
                <div class="schedule">
                    <div class="day">
                        <ul>
                            ${mealPlanContent}
                        </ul>
                    </div>
                </div>
                <a href="mealPlanContent" download="meal_plan.html" class="download-btn">
                    <button type="button">
                        Download
                        <i class="fa fa-download"></i>
                    </button>
                </a>
                <button id="print-button" type="button" class="btn"><i class="fas fa-print"></i>Print Page</button>


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
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



const printButton = document.getElementById('print-button');

const printPage = () => {
    const printFrame = document.createElement('iframe');
    printFrame.style.display = 'none';
    
    
    printFrame.src = "./finalProject.html"


    document.body.appendChild(printFrame);

    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();

};

printButton.addEventListener('click', () => {
    printPage();
});
