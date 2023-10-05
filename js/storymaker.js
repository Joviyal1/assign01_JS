// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const n1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjButton = document.getElementById("adjective");
const n2Button = document.getElementById("noun2");
const settButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const pbButton = document.getElementById("playback");
const rButton = document.getElementById("random");
const storyOutput = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My Teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "worm"];
const settings = ["on the moon", "on the chair", "in my sphagetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    chosenNoun1.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
    // if-else to change count setting
}

function verb_on_click() {
    chosenVerb.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    chosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    chosenNoun2.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    chosenSetting.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}`;
    storyOutput.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomStory = `${getRandomElement(nouns1)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(nouns2)} ${getRandomElement(settings)}`;
    storyOutput.textContent = randomStory
}
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
// Add your student id/name dynamically
document.getElementById("studentId").textContent = "Joviyal Joy (200536540)";

/* Event Listeners
-------------------------------------------------- */
n1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjButton.addEventListener("click", adjective_on_click);
n2Button.addEventListener("click", noun2_on_click);
settButton.addEventListener("click", setting_on_click);
pbButton.addEventListener("click", playback_on_click);
rButton.addEventListener("click", random_on_click);
