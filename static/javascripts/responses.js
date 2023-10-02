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
    else if (input == "I need medical assistance") {
        return "which kind";
    }
    //please use this includes, which avoids being direct and error-prone
    else if (input.includes("medicine")) {
        return "which medication";
    }
    else if (input.includes("I would like to book an appointment")) {
        return "Follow the appointment link";
    } else if (input == "I would like direct assistance") {
        return "Great we will transfer you to a reliable consultant!";
    }
    else {
        return "Try asking something else!";
    }
   
}
