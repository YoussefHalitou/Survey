document.getElementById("surveyForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the page from refreshing

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;

    const inputs = document.querySelectorAll("input[required], select[required]");
    let valid = true;

    inputs.forEach(input => {
        if (!input.value || (input.type === "radio" && !document.querySelector(`input[name="${input.name}"]:checked`))) {
            input.style.borderColor = "red";
            valid = false;
        } else {
            input.style.borderColor = "green";
        }
    });

    if (valid) {
        alert(`Thank you for completing the survey, ${name} from ${country}!`);
        window.location.href = 'thank-you.html'; // Redirect to thank-you page
    } else {
        alert("Please fill out all required fields.");
    }
});

// Progress Bar Logic (Simple Example)
const progress = document.querySelector(".progress");
const totalSteps = 4;
let currentStep = 1;

document.querySelectorAll("input, select").forEach(input => {
    input.addEventListener("change", () => {
        if (input.value) {
            currentStep = Math.min(totalSteps, currentStep + 1);
            progress.style.width = `${(currentStep / totalSteps) * 100}%`;
        }
    });
});
