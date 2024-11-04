const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was too young of a day, so :insertx: did the griddy. When it got to :inserty:, they doubled over in anguish for a few fortnights, then :insertz:. Lame saw the whole thing, but was not surprised — :insertx: weighs 23 pounds, and it was a hot day.";
let insertX = ["Chris Rock", "Billy the Puppet", "Jigsaw"];
let insertY = ["Hello Amanda", "I want to play a game", "You don't know me, but I know you"];
let insertZ = ["Nick Cage", "Maika Monroe", "MOMMYYYYYYYYY DADDYYYYYYYYYY SAVE ME FROM THE LAND OF LIVINGGGGGGGGGG"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    // Get random items for each placeholder
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // Replace placeholders with random values
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    // Check if a custom name is provided and replace "Bob" with that name
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace(/Bob/g, name); // Replace Bob with the custom name
    }

    // If UK option is checked, convert weight and temperature
    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14) + ' stone'; // Convert 300 pounds to stones
        const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade'; // Convert 94 Fahrenheit to centigrade

        // Replace '300 pounds' and '94 fahrenheit' in the story with the converted values
        newStory = newStory.replace(/300 pounds/g, weight); // Update weight in the story
        newStory = newStory.replace(/94 fahrenheit/g, temperature); // Update temperature in the story
    }

    // Update the story text and make it visible
    story.textContent = newStory; // Set the text of the story element to the updated story
    story.style.visibility = 'visible'; // Make the story visible
}