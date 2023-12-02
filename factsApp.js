//Fun facts about IT

const funFacts = [
    "The first computer mouse was made of wood.", 
    "The world's first computer programmer was Ada Lovelace, the daughter of a poet.", 
    "The first computer game was created in 1961 and was called Spacewar!", 
    "The programming language Python was named after Monty Python's Flying Circus, not after a snake.", 
    "In September, 1947, a team of computer scientists reported the world's first computer bug — a moth trapped in their computer at Harvard University.", 
    "There are over 700 different programming languages.", 
    "It took less code to send a man to the moon than to run a smartphone."
];

function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
  }
  console.log(getRandomFunFact());