// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Michael",()=>{
    describe("error handling written by Michael", ()=>{
        it("should return false if the shift value is equal to 0",()=>{
            const expected = false;
            const actual = caesar("thinkful",0)
    
            expect(actual).to.equal(expected)
    
        });
        it("should return false if the shift value is less than -25",()=>{
            const expected = false;
            const actual = caesar("thinkful",-26,)
    
            expect(actual).to.equal(expected)
    
        });
        it("should return false if the shift value is greater than 25",()=>{
            const expected = false;
            const actual = caesar("thinkful",26)
    
            expect(actual).to.equal(expected)
    
        })
        it("should return false if there is no shift value given",()=>{
            const expected = false;
            const actual = caesar("thinkful")
    
            expect(actual).to.equal(expected)
    
        })

    });
    describe("encoding a message written by Michael", ()=>{
        it("should return a message the is encoded each letter by shifting the letters",()=>{
            const expected = 'wklqnixo';
            const actual = caesar("thinkful",3)
            
            expect(actual).to.equal(expected)
        });
        it("should allow for a negative shift",()=>{
            const expected = 'qefkhcri';
            const actual = caesar("thinkful",-3)

            expect(actual).to.equal(expected)
        });
        it("should ignore capital letters",()=>{
            const expected = caesar("Thinkful",3);
            const actual = caesar("thinkful",3)

            expect(actual).to.equal(expected)
        });
        it("should be able to handle a shift that goes past the end of the alphabet",()=>{
            const expected = "cheud"
            const actual = caesar("zebra",3);

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces and other nonalphabetic symbols in the message",()=>{
            const expected = "d phvvdjh."
            const actual = caesar("a message.",3)

            expect(actual).to.equal(expected)
        });
    })

    describe("decoding a message written by Michael",()=>{
        it("should return a message the is decoded each letter by shifting the letters",()=>{
            const expected = "thinkful";
            const actual = caesar('wklqnixo',3,false)
            
            expect(actual).to.equal(expected)
        });
        it("should allow for a negative shift",()=>{
            const expected = "thinkful";
            const actual = caesar('qefkhcri',-3,false)

            expect(actual).to.equal(expected)
        });
        it("should ignore capital letters",()=>{
            const expected = caesar('wkLqNixo',3,false);
            const actual = caesar('wklqnixo',3,false)
            
            expect(actual).to.equal(expected)
        });
        it("should be able to handle a shift that goes past the end of the alphabet",()=>{
            const expected = caesar("Thinkful",3,false);
            const actual = caesar("thinkful",3,false);

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces and other nonalphabetic symbols in the message",()=>{
            const expected = "a message.";
            const actual = caesar("d phvvdjh.",3,false)

            expect(actual).to.equal(expected)
        })
    })
})
