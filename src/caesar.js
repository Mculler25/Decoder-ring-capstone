// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input = "", shift = 0, encode = true) {
    // return false if shift doesn't meet certain requirements
    if (shift === 0 || shift > 25 || shift < -25) return false;
    //make array with alphebet
    const result = [
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
    const special = "/. \|`~!@#$%^&*(),?<>;:[]{}-_=+"
    // make the input all lowercase
    const input1 = input.toLowerCase();
    // make an array to put new message in
    const codedMessage = [];
    //make input an array
    const userInput = input1.split("");
    if (encode === true) {
      //loop through userinput
      userInput.forEach((inputEl) => {
        // if element is a letter
        if (!special.includes(inputEl)) {
          let index = result.indexOf(inputEl);
          index = (index + shift) % result.length;
          // if index is negative got to the end of the array
          if (index < 0) {
            index += result.length;
            codedMessage.push(result[index]);
          }
          // if index is not negative just add it to they array
          else {
            codedMessage.push(result[index]);
          }
        }
        // if element isn't a letter just push it into array
        else {
          codedMessage.push(inputEl);
        }
      });
    } else {
      //map each letter to its encoded letter
      userInput.forEach((inputEl) => {
        if (!special.includes(inputEl)) {
          let index = result.indexOf(inputEl);
          index = (index - shift) % result.length;
          //if the index is left a remainder that is then
          //less than zero loop back around
          if (index < 0) {
            index += result.length;
            codedMessage.push(result[index]);
          } else {
            codedMessage.push(result[index]);
          }
        }  
        // if element isn't a letter just push it into array
        else {
          codedMessage.push(inputEl);
        }
      });
    }

    //make array a string
    return codedMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
