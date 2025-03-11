// Predefined PINs and corresponding results
const results = {
    "123456": "Math: 80, English: 75, Science: 90",
    "654321": "Math: 85, English: 80, Science: 88",
    "112233": "Math: 78, English: 82, Science: 85"
};

document.getElementById("checkButton").addEventListener("click", function () {
    let pin = document.getElementById("pin").value.trim(); // Remove extra spaces
    let message = document.getElementById("message");
    let resultDiv = document.getElementById("result");
    let score = document.getElementById("score");

    if (pin === "") {
        message.innerText = "Please enter a PIN.";
        message.style.color = "red";
        resultDiv.classList.add("hidden");
        return;
    }

    if (results[pin]) {
        message.innerText = "PIN Verified!";
        message.style.color = "green";
        score.innerText = results[pin];
        resultDiv.classList.remove("hidden");
    } else {
        message.innerText = "Invalid PIN! Please try again.";
        message.style.color = "red";
        resultDiv.classList.add("hidden");
    }
});

// Allow "Enter" key to submit PIN
document.getElementById("pin").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("checkButton").click();
    }
});
