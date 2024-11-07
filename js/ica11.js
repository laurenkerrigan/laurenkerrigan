function tellFortune(numChildren, partnerName, location, jobTitle) {
    // Create the fortune message
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    
    // Output the fortune to the webpage
    const fortunesDiv = document.getElementById('fortunes');
    const fortuneParagraph = document.createElement('p');
    fortuneParagraph.textContent = fortune;
    fortunesDiv.appendChild(fortuneParagraph);
}

// Call the function three times with different values
tellFortune(2, "Alex", "New York", "Software Engineer");
tellFortune(3, "Jordan", "London", "Artist");
tellFortune(1, "Taylor", "Tokyo", "Chef");

// Function to calculate dog age
function calculateDogAge(humanAge) {
    const dogAge = humanAge * 7;
    return `Your doggie is ${dogAge} years old in dog years!`;
}

// Function to handle user input and display the result
function getDogAge() {
    const input = document.getElementById('dog-age').value;
    const resultDiv = document.getElementById('dog-age-result');

    // Ensure the input is a valid number
    if (input && input > 0) {
        const result = calculateDogAge(input);
        resultDiv.textContent = result;
    } else {
        resultDiv.textContent = "Please enter a valid age!";
    }
}

// Call the function with different test values
document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('dog-age-result');

    resultDiv.textContent = calculateDogAge(2);
    resultDiv.appendChild(document.createElement("br"));
    resultDiv.append(calculateDogAge(5));
    resultDiv.appendChild(document.createElement("br"));
    resultDiv.append(calculateDogAge(10));
});

// Function to reverse a number
function reverseNumber(num) {
    // Convert the number to a string, split it into an array, reverse the array, and join it back
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return reversed;
}

// Function to display the reversed numbers on the page
function displayReversedNumbers() {
    const reversedNumbersDiv = document.getElementById('reversed-numbers');

    // Test the reverseNumber function with two different values
    const num1 = 32243;
    const num2 = 987654;

    // Call reverseNumber and store the results
    const reversed1 = reverseNumber(num1);
    const reversed2 = reverseNumber(num2);

    // Display the results
    reversedNumbersDiv.innerHTML = `
        <p>Original: ${num1}, Reversed: ${reversed1}</p>
        <p>Original: ${num2}, Reversed: ${reversed2}</p>
    `;
}

// Call displayReversedNumbers after the page loads
document.addEventListener('DOMContentLoaded', displayReversedNumbers);

// Function to sort the letters of a string in alphabetical order
function alphabetizeString(str) {
    // Convert the string to lowercase, split into an array, sort the array, and join it back into a string
    const sorted = str.toLowerCase().split('').sort().join('');
    return sorted;
}

// Function to display sorted strings on the page
function displaySortedStrings() {
    const sortedStringsDiv = document.getElementById('sorted-strings');

    // Test the alphabetizeString function with two different values
    const str1 = 'webmaster';
    const str2 = 'javascript';

    // Call alphabetizeString and store the results
    const sorted1 = alphabetizeString(str1);
    const sorted2 = alphabetizeString(str2);

    // Display the results
    sortedStringsDiv.innerHTML = `
        <p>Original: ${str1}, Alphabetical Order: ${sorted1}</p>
        <p>Original: ${str2}, Alphabetical Order: ${sorted2}</p>
    `;
}

// Call displaySortedStrings after the page loads
document.addEventListener('DOMContentLoaded', displaySortedStrings);

