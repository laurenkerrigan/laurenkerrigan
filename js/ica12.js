// Define API endpoint
const apiEndpoint = "https://catfact.ninja/fact";

// Function to fetch a random cat fact
function getFact() {
    console.log("Button clicked! Attempting to fetch a cat fact...");
    
    fetch(apiEndpoint)
        .then(response => {
            console.log("Response received:", response);
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            console.log("Cat fact fetched:", data.fact);
            displayRes(data.fact); // Display fetched fact
        })
        .catch(error => {
            console.error("Fetch error:", error);
            alert("Error fetching cat fact. Please try again.");
        });
}

// Function to display the fetched cat fact in the paragraph
function displayRes(fact) {
    document.getElementById("quote").textContent = fact;
}

// Event listener to check for button click
document.getElementById("fetchQuote").addEventListener("click", getFact);

// Automatically fetch a cat fact on page load
window.addEventListener("load", getFact);