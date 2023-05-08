// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input="", alphabet="", encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length != 26) return false;
    const result = alphabet.split("")
    const isThereRepeatingChar = result.filter((el)=>{
      return result.indexOf(el) !== result.lastIndexOf(el)
    })
    if(isThereRepeatingChar.length > 0) return false;
    const alphabetIndex = alphabet.split("");
    
    const alphabetSub = [
      "a",//0
      "b",//1
      "c",//2
      "d",//3
      "e",//4
      "f",//5
      "g",//6
      "h",//7
      "i",//8
      "j",//9
      "k",//10
      "l",//11
      "m",//12
      "n",//13
      "o",//14
      "p",//15
      "q",//16
      "r",//17
      "s",//18
      "t",//19
      "u",//20
      "v",//21
      "w",//22
      "x",//23
      "y",//24
      "z",//25
    ];
    const userInput = input.split("")

    if (encode === true) {

      const subsitutedIndex = userInput.map((el)=>{
        return el != " " ? alphabetSub.indexOf(el) : el;
      })
      
      
      const subsitution = subsitutedIndex.map((el2)=>{
        return  el2 === " " ? " " : el2 = alphabetIndex[el2]
      })
      return subsitution.join("")
    } else {
      const subsitutedIndex = userInput.map((el)=>{
        return el != " " ? alphabetIndex.indexOf(el) : el;
      })
      
      
      const subsitution = subsitutedIndex.map((el2)=>{
        return  el2 === " " ? " " : el2 = alphabetSub[el2]
      })
      return subsitution.join("")
    }
    
  
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

