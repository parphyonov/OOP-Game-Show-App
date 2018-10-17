class Game {

  constructor(missed, phrases) {
    // tracks the number of missed guesses
    this.missed = missed;
    // an array that will hold formatted phrases
    this.phrases = [];
    // each phrase gets rid of all punctuation
    phrases.forEach(phrase => {
      phrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g, '');
      // and then get pushed to this.phrases
      this.phrases.push(phrase);
    });
  }

  getRandomPhrase() {
    // generates a random number from 0 to this.phrases length
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    // and returns a string with random phrase
    return this.phrases[randomIndex];
  }

  handleInteraction(letter) {
    // if the provided letter is in the phrase
    if (this.phrase.phrase.includes(letter)) {
      // the matched letter is shown in #phrase
      this.phrase.showMatchedLetter(letter);
    } else {
      // else one life is removed
      this.removeLife();
    };
    // checks if the player wins or loses
    this.checkForWin();
  }

  removeLife() {
    // increases the number of wrong guesses
    this.missed += 1;
    // removes a heart from the lives count (visually)
    $('.tries').eq(this.missed - 1).css('display', 'none');
  }

  checkForWin() {
    // the condition of winning
    const winning = $('.show').length === this.phrase.phrase.length;
    // the condition of losing
    const losing = this.missed === 5;
    // targeting #overlay for later use in this method
    const $overlay = $('#overlay');
    // color will update background color of the overlay depending on the result later
    let color;
    // irrespective of the outcome...
    if (winning || losing) {
      // ... the #overlay will be brought back
      $overlay.css('display', 'flex');
      // but messages differ depending on the outcome
      if (winning) {
        color = '#3a3f58';
        this.gameOver('You win!');
      } else if (losing) {
        color = '#e21221';
        this.gameOver('Sorry, try again next time!');
      }
      $overlay.css('backgroundColor', color);
    }
  }

  gameOver(message) {
    // #game-over-message message text is updated
    $('#game-over-message').text(message);
    // and the button's text is changed from 'Start Game' to 'Play Again'
    $('#btn__reset').text('Play Again');
  }

  startGame() {
    // the phrase object is instantiated
    this.phrase = new Phrase(this.getRandomPhrase());
    // the phrase is displayed to the #phrase
    this.phrase.addPhraseToDisplay();
    // the hearts/lives images are brought back in full amount
    $('.tries').css('display', 'inline');
    // all disabled keys are back to normal/operational state
    $('.key').removeClass('chosen').attr('disabled', false);

  }

}
