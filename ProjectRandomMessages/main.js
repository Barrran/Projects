
//Declare variables
let dice = 0;
let secondPhraseDice = 0;
let thirdPhraseDice = 0;

let phrase1A = "chased by dogs";
let phrase2A = "attacked by cats";
let phrase3A = "eaten by fish";

let phrase1A2 = "given an award";
let phrase2A2 = "touched by an angel";
let phrase3A2 = "taken to mars";

let phrase1B = "during a full moon";
let phrase2B = "while reading a book";
let phrase3B = "during your lunch break";

let phrase1C = "at your workplace!";
let phrase2C = "at your mom's house";
let phrase3C = "at the mall";

let firstPhrase = "";
let secondPhrase = "";
let thirdPhrase = "";

//Generate Intro
console.log("Welcome, to the one and only future fortune teller!!!")
console.log("This message was picked at random for you, and only you!")
console.log("I will roll a special pair of die for you...")

//Main Logic of Program
dice = Math.floor(Math.random() * 10) + 1;
secondPhraseDice = Math.floor(Math.random() * 10) + 1;
thirdPhraseDice = Math.floor(Math.random() * 10) + 1;

if (secondPhraseDice > 5) {
    secondPhrase = phrase1B; 
} else if (secondPhraseDice = 5) {
    secondPhrase = phrase2B;
} else {
    secondPhrase = phrase3B;
};

if (thirdPhraseDice > 5) {
    thirdPhrase = phrase1C
} else if (thirdPhraseDice = 5) {
    thirdPhrase = phrase2C 
} else {
    thirdPhrase = phrase3C
}

if (dice < 5) {
    console.log("Ahhh, it was an unlucky roll for you this time!")
    let x = Math.floor(Math.random() * 10) + 1;
    if (x > 5) {
        firstPhrase = phrase1A;
    } else if (x = 5) {
        firstPhrase = phrase2A; 
    } else {
        firstPhrase = phrase3A;
    };

} else {
    console.log("Ohhh, it's your lucky day!")
    let y = Math.floor(Math.random() * 10) + 1;
    if (y > 5) {
        firstPhrase = phrase1A2;
    } else if (y = 5) {
        firstPhrase = phrase2A2;
    } else {
        firstPhrase = phrase3A2;
    };
};

//Main Program Output
console.log("You will be " + firstPhrase + " " + secondPhrase + " " + thirdPhrase + "!")

