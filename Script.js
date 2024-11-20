// List of all countries
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
    "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)",
    "Korea (South)", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


// DOM elements
let form = document.getElementById("surveyForm");
let countryInput = document.getElementById("countryInput");
let suggestions = document.getElementById("countrySuggestions");

// Function to filter countries based on input
function filterCountries(input) {
    return countries.filter(country => 
        country.toLowerCase().includes(input.toLowerCase())
    );
}

// Function to display autocomplete suggestions
function showSuggestions(filteredCountries) {
    suggestions.innerHTML = ""; // Clear previous suggestions
    filteredCountries.forEach(country => {
        const li = document.createElement("li");
        li.textContent = country;
        li.addEventListener("click", () => {
            countryInput.value = country; // Set selected country
            suggestions.innerHTML = "";  // Clear suggestions
        });
        suggestions.appendChild(li);
    });
}

// Add input event listener to country input
countryInput.addEventListener("input", (event) => {
    const input = event.target.value; // Get the user's input
    const filteredCountries = filterCountries(input); // Filter country list
    showSuggestions(filteredCountries); // Display suggestions
});

// Add click listener to close suggestions when clicking outside
document.addEventListener("click", (event) => {
    if (!countryInput.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.innerHTML = ""; // Clear suggestions
    }
});

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload on submit

    // Collect form data
    const name = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;
    const country = countryInput.value;
    const useStreaming = document.querySelector('input[name="useStreaming"]:checked')?.value;
    const streamingServices = Array.from(
        document.querySelectorAll('input[name="streamingServices"]:checked')
    ).map(service => service.value);
    const timeSpent = document.querySelector('input[name="timeSpent"]:checked')?.value;

    // Output data to console
    console.log({
        name,
        birthday,
        country,
        useStreaming,
        streamingServices,
        timeSpent
    });

    // Show thank-you message
    alert("Thank you for completing the survey!");
});

// Clear suggestions on page load
window.addEventListener("load", () => {
    suggestions.innerHTML = "";
});
