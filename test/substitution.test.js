// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by Michael",()=>{
    describe("error handling written by Michael", ()=>{
        it("should return false if the alphabet isn't exactly 26 characters",()=>{
            const expected = false;
            const actual = substitution("message","shortend")
    
            expect(actual).to.equal(expected)
    
        });
        it("should return false if there is duplicate characters",()=>{
            const expected = false;
            const actual = substitution("thinkful","abcabcabc")
    
            expect(actual).to.equal(expected)
    
        });
        it("should return false if there isn't an alphabet and input given",()=>{
            const expected = false;
            const actual = substitution("thinkful")
    
            expect(actual).to.equal(expected)
    
        })

    });
    describe("encoding a message written by Michael", ()=>{
        it("should return a correct translation based on the alphabet given",()=>{
            const expected = 'jrufscpw';
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
            
            expect(actual).to.equal(expected)
        });
        it("should maintain spaces",()=>{
            const expected = 'elp xhm xf mbymwwmfj dne'
            const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")

            expect(actual).to.equal(expected)
        });
        it("should work if there are special characters",()=>{
            const expected = "y&ii$r&";
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")

            expect(actual).to.equal(expected)
        });
        it("should ignore capital letters",()=>{
            const expected = 'elp xhm xf mbymwwmfj dne'
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")

            expect(actual).to.equal(expected)
        });

    })

    describe("decoding a message written by Michael",()=>{
        it("should return a correct translation based on the alphabet given",()=>{
            const expected = "thinkful";
            const actual = substitution('jrufscpw', "xoyqmcgrukswaflnthdjpzibev",false)
            
            expect(actual).to.equal(expected)
        });
        it("should maintain spaces",()=>{
            const expected = "you are an excellent spy";
            const actual = substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev",false)

            expect(actual).to.equal(expected)
        });
        it("should work if there are special characters",()=>{
            const expected = "message";
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl",false)

            expect(actual).to.equal(expected)
        });
        it("should ignore capital letters",()=>{
            const expected = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev",false)
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev",false)

            expect(actual).to.equal(expected)
        });
    })
})
