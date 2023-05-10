// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input = "", encode = true) {
    // if there is no input given return false
    if(!input || input === false) return false;
    const cypherValues = [
      { a: 11 },
      { b: 21 },
      { c: 31 },
      { d: 41 },
      { e: 51 },
      { f: 12 },
      { g: 22 },
      { h: 32 },
      { i: 42 },
      { j: 42 },
      { k: 52 },
      { l: 13 },
      { m: 23 },
      { n: 33 },
      { o: 43 },
      { p: 53 },
      { q: 14 },
      { r: 24 },
      { s: 34 },
      { t: 44 },
      { u: 54 },
      { v: 15 },
      { w: 25 },
      { x: 35 },
      { y: 45 },
      { z: 55 },
    ];
    // make the input all lowercase
    const input1 = input.toLowerCase();
    // make an array to put new message in
    const codedMessage = [];
    //make input an array
    //see if encode is true
    if (encode === true) {
      //make userinput an array that we can loop through
      const userInput = input1.split("");
      userInput.forEach((el) => {
        if (el === " ") {
          codedMessage.push(" ");
        }
        cypherValues.forEach((el2, idx) => {
          const keys = Object.keys(el2);
          keys.forEach((el3) => {
            if (el === el3) {
              codedMessage.push(Object.values(cypherValues[idx]));
            }
          });
        });
      });
    } else {
      //counting the numbers given
      let counter = 0;
      for (let i = 0; i < input.length; i++) {
        if (input[i] != " ") {
          counter += 1;
        }
      }
      //if numbers given is odd then return false
      if (counter % 2 != 0) return false;
      //get number value while ignoring spaces
      userInput = [];
      for (let i = 0; i < input.length; i++) {
        let char = input.charAt(i);
        if (char === " ") {
          userInput.push(" ");
        } else if (Number.isInteger(parseInt(char))) {
          let num = parseInt(char);
          if (Number.isInteger(parseInt(input.charAt(i + 1)))) {
            num = num * 10 + parseInt(input.charAt(i + 1));
            i++; // skip the next character
          }
          userInput.push(num);
        }
      }
      //eliminate j becuase 42 will come back as "(i/j)"
      cypherValues.splice(9, 1);
      //loop through userinput
      userInput.forEach((el) => {
        if (el === " ") {
          codedMessage.push(" ");
        }
        //loop through cypherValues
        cypherValues.forEach((el2, idx) => {
          //get the values from cypherValues
          const values = Object.values(el2);
          //loop through the values
          values.forEach((el3) => {
            //if element matches element from the userinput array push into an array
            if (el === el3) {
              if (el === 42) {
                codedMessage.push("(i/j)");
              } else {
                codedMessage.push(Object.keys(cypherValues[idx]));
              }
            }
          });
        });
      });
    }
    //return encoded or decoded string
    return codedMessage.join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
