/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 50; // Example cost per day
var numberOfDaysSelected = 0;
var totalPrice = 0;

// Elements on the screen
var daySelectors = document.querySelectorAll('.day-selectors li');
var clearDaysButton = document.querySelector('.clear-days-button');
var totalPriceElement = document.getElementById('total-price');

// Function to update total price
function updateTotalPrice() {
    totalPrice = numberOfDaysSelected * costPerDay;
    totalPriceElement.textContent = totalPrice.toFixed(2); // Update total price display
}

// Function to handle click on day selector
function handleClick() {
    if (!this.classList.contains('clicked')) {
        numberOfDaysSelected++;
    } else {
        numberOfDaysSelected--;
    }
    updateTotalPrice(); // Update total price
    this.classList.toggle('clicked'); // Toggle "clicked" class
}

// Function to handle click on clear days button
function clearDays() {
    daySelectors.forEach(function(daySelector) {
        daySelector.classList.remove('clicked'); // Deselect all day selectors
    });
    numberOfDaysSelected = 0; // Reset number of days selected
    totalPrice = 0; // Reset total price
    totalPriceElement.textContent = totalPrice.toFixed(2); // Update total price display
}

// Initialization (when the page is loaded)
window.onload = function() {
    // Add click event listeners to day selectors
    daySelectors.forEach(function(daySelector) {
        daySelector.addEventListener('click', handleClick);
    });

    // Add click event listener to clear days button
    clearDaysButton.addEventListener('click', clearDays);
};



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var costPerDay = 50; // Example cost per day
var totalCost = 0;
var selectedDays = [];

// Elements on the screen
var dayButtons = document.querySelectorAll('.day-selectors li');
var clearDaysButton = document.querySelector('.clear-days-button');
var totalCostElement = document.getElementById('total-price');

// Function to update total cost
function updateTotalCost() {
    totalCost = selectedDays.length * costPerDay;
    totalCostElement.textContent = totalCost.toFixed(2); // Update total cost display
}

// Function to handle click on day button
function handleClick() {
    if (!this.classList.contains('clicked')) {
        // Check if the day is not already selected
        if (!selectedDays.includes(this.textContent)) {
            selectedDays.push(this.textContent); // Add day to selectedDays array
            totalCost += costPerDay; // Increment total cost
            updateTotalCost(); // Update total cost
        }
        this.classList.add('clicked'); // Apply "clicked" class
    } else {
        // Remove day from selectedDays array
        selectedDays = selectedDays.filter(function(day) {
            return day !== this.textContent;
        }, this);
        totalCost -= costPerDay; // Decrement total cost
        updateTotalCost(); // Update total cost
        this.classList.remove('clicked'); // Remove "clicked" class
    }
}

// Function to handle click on clear days button
function clearDays() {
    // Deselect all day buttons
    dayButtons.forEach(function(dayButton) {
        dayButton.classList.remove('clicked');
    });
    // Reset selectedDays array and total cost
    selectedDays = [];
    totalCost = 0;
    updateTotalCost(); // Update total cost
}

// Initialization (when the page is loaded)
window.onload = function() {
    // Add click event listeners to day buttons
    dayButtons.forEach(function(dayButton) {
        dayButton.addEventListener('click', handleClick);
    });

    // Add click event listener to clear days button
    clearDaysButton.addEventListener('click', clearDays);
};



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var costPerDay = 50; // Example cost per day
var totalCost = 0;
var selectedDays = [];

// Elements on the screen
var dayButtons = document.querySelectorAll('.day-selectors li');
var clearDaysButton = document.querySelector('.clear-days-button');
var totalCostElement = document.getElementById('total-price');

// Function to update total cost
function updateTotalCost() {
    totalCost = selectedDays.length * costPerDay;
    totalCostElement.textContent = totalCost.toFixed(2); // Update total cost display
}

// Function to handle click on day button
function handleClick(event) {
    var clickedDay = event.target.textContent;
    if (!event.target.classList.contains('clicked')) {
        selectedDays.push(clickedDay); // Add day to selectedDays array
        totalCost += costPerDay; // Increment total cost
    } else {
        selectedDays = selectedDays.filter(function(day) {
            return day !== clickedDay;
        });
        totalCost -= costPerDay; // Decrement total cost
    }
    event.target.classList.toggle('clicked'); // Toggle "clicked" class
    updateTotalCost(); // Update total cost
}

// Function to handle click on clear days button
function clearDays() {
    selectedDays = []; // Reset selectedDays array
    totalCost = 0; // Reset total cost
    dayButtons.forEach(function(dayButton) {
        if (dayButton.classList.contains('clicked')) {
            dayButton.classList.remove('clicked'); // Deselect all day buttons
        }
    });
    updateTotalCost(); // Update total cost
}

// Initialization (when the page is loaded)
window.onload = function() {
    // Add click event listeners to day buttons
    dayButtons.forEach(function(dayButton) {
        dayButton.addEventListener('click', handleClick);
    });

    // Add click event listener to clear days button
    clearDaysButton.addEventListener('click', clearDays);
};




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var costPerFullDay = 50; // Full day rate
var costPerHalfDay = 25; // Half day rate
var totalCost = 0;
var selectedDays = [];
var isHalfDay = false; // Tracks whether half-day option is selected

// Elements on the screen
var dayButtons = document.querySelectorAll('.day-selectors li');
var clearDaysButton = document.querySelector('.clear-days-button');
var halfDayButton = document.querySelector('.half');
var totalCostElement = document.getElementById('total-price');

// Function to update total cost
function updateTotalCost() {
    var costPerDay = isHalfDay ? costPerHalfDay : costPerFullDay; // Set rate based on half-day option
    totalCost = selectedDays.length * costPerDay;
    totalCostElement.textContent = totalCost.toFixed(2); // Update total cost display
}

// Function to handle click on day button
function handleClick(event) {
    var clickedDay = event.target.textContent;
    if (!event.target.classList.contains('clicked')) {
        selectedDays.push(clickedDay); // Add day to selectedDays array
    } else {
        selectedDays = selectedDays.filter(function(day) {
            return day !== clickedDay;
        });
    }
    event.target.classList.toggle('clicked'); // Toggle "clicked" class
    updateTotalCost(); // Update total cost
}

// Function to handle click on clear days button
function clearDays() {
    selectedDays = []; // Reset selectedDays array
    dayButtons.forEach(function(dayButton) {
        if (dayButton.classList.contains('clicked')) {
            dayButton.classList.remove('clicked'); // Deselect all day buttons
        }
    });
    updateTotalCost(); // Update total cost
}

// Function to handle click on half-day button
function selectHalfDay() {
    isHalfDay = true;
    halfDayButton.classList.add('clicked'); // Apply "clicked" class to half-day button
    document.querySelector('.full').classList.remove('clicked'); // Remove "clicked" class from full-day button
    updateTotalCost(); // Update total cost
}

// Initialization (when the page is loaded)
window.onload = function() {
    // Add click event listeners to day buttons
    dayButtons.forEach(function(dayButton) {
        dayButton.addEventListener('click', handleClick);
    });

    // Add click event listener to clear days button
    clearDaysButton.addEventListener('click', clearDays);

    // Add click event listener to half-day button
    halfDayButton.addEventListener('click', selectHalfDay);
};



// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var costPerFullDay = 40; // Full day rate
var costPerHalfDay = 25; // Half day rate
var totalCost = 0;
var selectedDays = [];
var isHalfDay = false; // Tracks whether half-day option is selected

// Elements on the screen
var dayButtons = document.querySelectorAll('.day-selectors li');
var clearDaysButton = document.querySelector('.clear-days-button');
var fullDayButton = document.querySelector('.full');
var totalCostElement = document.getElementById('total-price');

// Function to update total cost
function updateTotalCost() {
    var costPerDay = isHalfDay ? costPerHalfDay : costPerFullDay; // Set rate based on half-day option
    totalCost = selectedDays.length * costPerDay;
    totalCostElement.textContent = totalCost.toFixed(2); // Update total cost display
}

// Function to handle click on day button
function handleClick(event) {
    var clickedDay = event.target.textContent;
    if (!event.target.classList.contains('clicked')) {
        selectedDays.push(clickedDay); // Add day to selectedDays array
    } else {
        selectedDays = selectedDays.filter(function(day) {
            return day !== clickedDay;
        });
    }
    event.target.classList.toggle('clicked'); // Toggle "clicked" class
    updateTotalCost(); // Update total cost
}

// Function to handle click on clear days button
function clearDays() {
    selectedDays = []; // Reset selectedDays array
    dayButtons.forEach(function(dayButton) {
        if (dayButton.classList.contains('clicked')) {
            dayButton.classList.remove('clicked'); // Deselect all day buttons
        }
    });
    updateTotalCost(); // Update total cost
}

// Function to handle click on full-day button
function selectFullDay() {
    isHalfDay = false;
    fullDayButton.classList.add('clicked'); // Apply "clicked" class to full-day button
    document.querySelector('.half').classList.remove('clicked'); // Remove "clicked" class from half-day button
    updateTotalCost(); // Update total cost
}

// Initialization (when the page is loaded)
window.onload = function() {
    // Add click event listeners to day buttons
    dayButtons.forEach(function(dayButton) {
        dayButton.addEventListener('click', handleClick);
    });

    // Add click event listener to clear days button
    clearDaysButton.addEventListener('click', clearDays);

    // Add click event listener to full-day button
    fullDayButton.addEventListener('click', selectFullDay);
};



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


var calculatedCostElement = document.getElementById('calculated-cost');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');

// Function to perform calculation
function performCalculation() {
    var value1 = parseFloat(input1.value);
    var value2 = parseFloat(input2.value);
    var result = value1 * value2; // Example calculation
    calculatedCostElement.innerHTML = result.toFixed(2); // Set innerHTML to the calculated result
}

// Initialization (when the page is loaded)
window.onload = function() {
    // Add event listeners to input fields
    input1.addEventListener('input', performCalculation);
    input2.addEventListener('input', performCalculation);
};

