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
    } else if (input == "Thank you") {
        return "Glad to be of assistance 👍";
    }
    else if (input == "medicine") {
        return "which kind";
    }
    //please use this includes, which avoids being direct and error-prone
    else if (input.includes("medicine")) {
        return "which medication";
    }
    else if (input.includes("I would like to book an appointment")) {
        return "Go to the appointment page";
    } else if (input == "I would like telephone assistance") {
        return "Great we will transfer you to a reliable consultant!";
    }
    else {
        return "Try asking something else!";
    }
   
}
