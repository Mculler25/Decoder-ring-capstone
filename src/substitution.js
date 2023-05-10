// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input = "", alphabet = "", encode = true) {
    // put the alphabet into an array
    alphabet = alphabet.split("");
    // find out if there are repeating characters. if there are return false
    if (!alphabet || alphabet.length != 26) return false;

    const isThereRepeatingChar = result.filter((el) => {
      return alphabet.indexOf(el) !== alphabet.lastIndexOf(el);
    });
    if (isThereRepeatingChar.length > 0) return false;

    const alphabetForSub = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let userInput = input.toLowerCase();
    userInput = userInput.split("");
    //check if encode is true
    if (encode === true) {
      //put all of the indecies into an array
      const subsitutedIndex = userInput.map((el) => {
        return el != " " ? alphabetForSub.indexOf(el) : el;
      });
      //make an array by matching the indecies with the normal alphabet
      const subsitution = subsitutedIndex.map((el2) => {
        return el2 === " " ? " " : (el2 = alphabet[el2]);
      });
      return subsitution.join("");
    } else {
      //put all of the indecies into an array
      const subsitutedIndex = userInput.map((el) => {
        return el != " " ? alphabet.indexOf(el) : el;
      });
      //make an array by matching the indecies with the normal alphabet
      const subsitution = subsitutedIndex.map((el2) => {
        return el2 === " " ? " " : (el2 = alphabetForSub[el2]);
      });
      return subsitution.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
