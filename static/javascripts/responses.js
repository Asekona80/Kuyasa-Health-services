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
    if (input.includes("hello")) {
        return "How can I be of assistance?.";
    } else if (input.includes("Thank you")) {
        return "Glad to be of assistance 👍";
    }
    else if (input.includes("how are you?")) {
        return "How can I be of assistance?";
    }
    else if (input.includes("I need medical assistance")) {
        return "which kind";
    }
    //please use this includes, which avoids being direct and error-prone
    else if (input.includes("medicine")) {
        return "Which medication would you like information about?";
    }
    else if (input.includes("book an appointment")) {
        return "Sure, we can help you with that. Please provide your name, preferred date, and reason for the appointment.";
    }
    else if (input.includes("direct assistance")) {
        return "Great, we're here to help. What do you need assistance with?";
    }
    else if (input.includes("emergency")) {
        return "If this is a medical emergency, please dial 10111 immediately.";
    }
    else if (input.includes("doctor")) {
        return "Do you have a specific doctor in mind, or would you like us to recommend one?";
    }
    else if (input.includes("hospital location")) {
        return "Our hospital is located at [Address].";
    }
    else if (input.includes("visiting hours")) {
        return "Our visiting hours are [Monday and Wednesday at 15:00 - 19:00].";
    }
    else if (input.includes("insurance")) {
        return "We accept various insurance plans. Please provide your insurance information for verification.";
    }
    else if (input.includes("prescription refill")) {
        return "To request a prescription refill, please provide your patient ID and the medication name.";
    }

    else if (input.includes("laboratory services")) {
        return "Our laboratory offers a wide range of tests. Do you have a specific test in mind?";
    }
    else if (input.includes("radiology services")) {
        return "We provide various radiology services, including X-rays, MRIs, and CT scans. What type of imaging are you looking for?";
    }
    else if (input.includes("surgery scheduling")) {
        return "If you need to schedule a surgery, please provide your patient information, the type of surgery, and preferred dates.";
    }
    else if (input.includes("billing and payments")) {
        return "For billing and payment inquiries, please contact our billing department at [Contact Information].";
    }
    else if (input.includes("patient records")) {
        return "To access your patient records, please provide your patient ID or date of birth for verification.";
    }
    else if (input.includes("COVID-19 information")) {
        return "For the latest COVID-19 updates and information, visit our website or contact our COVID-19 hotline at [Hotline Number].";
    }
    else if (input.includes("visitor policy")) {
        return "Our current visitor policy allows [Visitor Policy Details]. Please note that policies may change due to COVID-19.";
    }
    else if (input.includes("feedback or complaints")) {
        return "We value your feedback. To submit a complaint or provide feedback, please visit our website's 'Contact Us' page.";
    }

    else if (input.includes("South African hospital services")) {
        return "Our hospital in South Africa offers a wide range of services, including emergency care, specialized medical care, and more. How can we assist you today?";
    }
    else if (input.includes("South African hospital locations")) {
        return "We have multiple hospital locations across South Africa, including [Location 1], [Location 2], and [Location 3]. Which location are you interested in?";
    }
    else if (input.includes("South African hospital languages")) {
        return "We provide services in multiple languages, including English, Afrikaans, Zulu, and Xhosa. In which language do you prefer assistance?";
    }
    else if (input.includes("South African healthcare system")) {
        return "The South African healthcare system consists of public and private healthcare sectors. We are a private hospital. How can we help you navigate the system?";
    }
    else if (input.includes("South African medical insurance")) {
        return "We accept various South African medical insurance plans. Please provide your insurance information for verification.";
    }
    else if (input.includes("South African COVID-19 guidelines")) {
        return "To stay updated on the latest COVID-19 guidelines and regulations in South Africa, visit the official South African government website or contact the Department of Health.";
    }
    else if (input.includes("South African cultural services")) {
        return "We respect and celebrate the diverse cultures of South Africa. If you have specific cultural needs, please let us know, and we will do our best to accommodate them.";
    }
// You can add more 'else if' statements specific to South African healthcare, culture, and services.
    else {
        return "I'm sorry, I couldn't understand your request. How can I assist you further with South African hospital-related queries?";
    }

    // You can add more 'else if' statements for specific services, departments, or FAQs.
else {
        return "I'm sorry, I couldn't understand your request. How can I assist you further?";
    }
}
