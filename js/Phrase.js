class Phrase {

  // we need to supply a string to it in order to use it with class's methods
  constructor(phrase) {
    // in whatever register the string is supplied, it is all turned lowercase
    this.phrase = phrase.toLowerCase();
  }

  // this method will form HTML list items to be added to the corresponding section in the existing HTML code
  addPhraseToDisplay() {
    // we make an array of characters which make the phrase
    const letters = this.phrase.split('');
    // this variable will hold the HTML
    let phraseHTML = '';
    // we take each letter in the array to produce valid HTML code based on the example
    letters.forEach(letter => {
      if (letter !== ' ') {
        // if a character/letter is not a blank space, list item will have one set of classes
        phraseHTML += `<li class="hide letter ${letter}">${letter}</li>\n`;
      } else {
        // else it will have a different set of classes
        phraseHTML += `<li class="hide space"> </li>\n`;
      }
    });
    // and here we use jQuery to append the produced HTML to the corresponding div
    $('#phrase ul').html(phraseHTML);
  }

  // this method will check if the phrase includes a letter supplied by a method or a user
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  // this method will change the classes in HTML to open the letter if it is in the phrase
  showMatchedLetter(letter) {
    // we call checkLetter method on our object
    if (this.checkLetter(letter)) {
      // target all list items with the class equal to the letter
      const $letterClass = $(`.${letter}`);
      // then removes hide class
      $letterClass.removeClass('hide');
      // and adds show class
      $letterClass.addClass('show');
    }
  }

}
