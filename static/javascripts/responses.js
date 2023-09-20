function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "How can I be of assistance?.";
    } else if (input == "Thank you!") {
        return "Glad to be of assistance";
    }
    else if (input == "medicine") {
        return "which kind";
    }
    //please use this includes, which avoids being direct and error-prone
    else if (input.includes("medicine")) {
        return "which medication";
    } else {
        return "Try asking something else!";
    }
}