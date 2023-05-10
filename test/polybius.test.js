// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("polybius() submission tests written by Michael",()=>{
    describe("error handling written by Michael", ()=>{
        it("should return false if the length of the input number when decoding is odd",()=>{
            const expected = false;
            const actual = polybius("1345267",false)
    
           expect(actual).to.equal(expected)
    
        });
        it("should return false if there us no input given",()=>{
            const expected = false;
            const actual = polybius()
    
           expect(actual).to.equal(expected)
    
        });
        it("should return false if there us no input given when decoding",()=>{
            const expected = false;
            const actual = polybius(false)
    
           expect(actual).to.equal(expected)
    
        });

    });
    describe("encoding a message written by Michael", ()=>{
        it("should return a message the is encoded with translated pairs",()=>{
            const expected = "4432423352125413";
            const actual = polybius("thinkful")
            
           expect(actual).to.equal(expected)
        });
        it("should ignore capital letters",()=>{
            const expected = polybius("Thinkful");
            const actual = polybius("thinkful")

           expect(actual).to.equal(expected)
        });
        it("should translate both i and j to 42",()=>{
            const expected = "4242"
            const actual = polybius("ij");

           expect(actual).to.equal(expected);
        });
        it("should maintain spaces and other nonalphabetic symbols in the message",()=>{
            const expected = '3251131343 2543241341'
            const actual = polybius("Hello world")

           expect(actual).to.equal(expected)
        });
    })

    describe("decoding a message written by Michael",()=>{
        it("should return a message the is decoded by translating each pair",()=>{
            const expected = "th(i/j)nkful";
            const actual = polybius("4432423352125413", false)
            
           expect(actual).to.equal(expected)
        });
        it("should translate 42 to (i/j)",()=>{
            const expected = "(i/j)"
            const actual = polybius("42",false);

           expect(actual).to.equal(expected);
        });
        it("should maintain spaces and other nonalphabetic symbols in the message",()=>{
            const expected = "hello world"
            const actual = polybius('3251131343 2543241341',false)

           expect(actual).to.equal(expected)
        });
   
    })

})
