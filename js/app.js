// Variable to store an instance of Game
let game;

// List of phrases
const phrases = [
  'Ada Lovelace',
  'Niklaus Wirth',
  'Bill Gates',
  'James Gosling',
  'Guido van Rossum',
  'Ken Thompson',
  'Donald Knuth',
  'Brian Kernighan',
  'Tim Berners-Lee',
  'Bjarne Stroustrup',
  'Linus Torvalds',
  'Dennis Ritchie'
];

// Function to hide the overlay
const resetDisplay = () => $('#overlay').css('display', 'none');

const markButton = (event) => {
  // we target the pressed key
  const key = event.target;
  // add class 'chosen'
  key.classList.add('chosen');
  // and disable the key
  key.setAttribute('disabled', true);
  // get grasp of the key's text
  const letter = key.textContent;
  // to pass it to the the Game's handleInteraction method
  game.handleInteraction(letter);

};

// On clicking the button
$('#btn__reset').on('click', () => {
  // overlay hides
  resetDisplay();
  // new game object is created and stored to the global variable
  game = new Game(0, phrases);
  // We also start the game by adding new elements to the page (see this method in Game.js)
  game.startGame();
});

// Firefox feature off
$('.key').attr('autocomplete', 'off');

// binds markButton method to click event on keys
$('.key').on('click', markButton);

document.addEventListener('keypress', event => {
  const character = event.key;
  if ($('#overlay').css('display') === 'none' && character.match(/[a-z]/i)) {
    game.handleInteraction(character);
  }
});
