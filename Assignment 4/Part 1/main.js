// Define the story templates
const storyTemplates = [
    "It was 94 fahrenheit outside, so {name} decided to go for a walk. When they got to {place}, they stared in horror for a few moments, then {action}. Bob saw the whole thing, but was not surprised — {bob_opinion}.",
    "It was 34 degrees celcius outside, so {name} decided to go for a walk. When they got to {place}, they stared in horror for a few moments, then {action}. Bob saw the whole thing, but was not surprised — {bob_opinion}.",
    "Just as {name} was about to {action}, they heard a loud {noise} behind them. Turning around, they saw a {scary_thing}. {name} ran away as quickly as they could, and Bob was left to deal with the mess.",
  ];
  
  // Function to generate a random story
  function generateStory() {
    // Get the user's name and location preference
    const customName = document.getElementById("customname").value || "Bob";
    const isMetric = document.getElementById("uk").checked;
  
    // Choose a random story template
    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    let story = storyTemplates[randomIndex];
  
    // Replace the placeholders in the story template
    story = story.replace("{name}", customName);
    story = story.replace("{place}", isMetric ? "the Brig" : "the park");
    story = story.replace("{action}", getRandomAction());
    story = story.replace("{bob_opinion}", getRandomBobOpinion());
    story = story.replace("{noise}", getRandomNoise());
    story = story.replace("{scary_thing}", getRandomScarything());
  
    // Display the story
    const storyElement = document.querySelector(".story");
    storyElement.style.visibility = "visible";
    storyElement.textContent = story;
  }
  
  // Helper functions to get random values for the story
  function getRandomAction() {
    const actions = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
    return actions[Math.floor(Math.random() * actions.length)];
  }
  
  function getRandomBobOpinion() {
    const opinions = ["This was not the first time this has happened.", "Bob will be telling this story to his grandchildren.", "Bob decided it was too early for this"];
    return opinions[Math.floor(Math.random() * opinions.length)];
  }
  
  function getRandomNoise() {
    const noises = ["a loud boom", "a sizzling sound", "a peculiar gurgling noise"];
    return noises[Math.floor(Math.random() * noises.length)];
  }
  
  function getRandomScarything() {
    const scarythings = ["a giant spider", "a screaming banshee", "a rabid raccoon"];
    return scarythings[Math.floor(Math.random() * scarythings.length)];
  }
  
  // Add an event listener to the "Generate random story" button
  document.querySelector(".randomize").addEventListener("click", generateStory);