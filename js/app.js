// Variable to store an instance of Game
let game;
// this array will hold the keyboard characters already used by the user
let usedCharacters = [];

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
  usedCharacters = [];
});

// Firefox feature off
$('.key').attr('autocomplete', 'off');

// binds markButton method to click event on keys
$('.key').on('click', markButton);

// On pressing the keyboard key
document.addEventListener('keypress', event => {
  // taking grasp of the key pressed
  const character = event.key;
  // I will target the .key button by its value in order to disable it
  const $keys = $('.keyrow button');
  // and thus I iterate over jQuery elements collection
  $keys.each(function() {
    // and if the character of the pressed key is equal to .key button text value
    // and if overlay's display is hidden (in order not to console errors while #phrase list items are not generated and displayed)
    // and if the global array of usedCharacters does not already include this character
    if ($(this).text() === character && $('#overlay').css('display') === 'none' && !usedCharacters.includes(character)) {
      // the .key button gets chosen class
      $(this).addClass('chosen');
      // and gets disabled
      $(this).attr('disabled', true);
      // the character is added to the array of the used characters
      usedCharacters.push(character);
      // and the game handles interaction by the provided character
      game.handleInteraction(character);
    }
  });
});
