## Caesar Function

The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

The caeser function takes an three arguments:
- Input = A input that will get encoded or decoded.
- Shift = How much each letter should "shift" through the alphabet(if shift is 3 then "a" would become "d").
- Encode = If true, your input will be encoded. If false, your input will be decoded. This will be set to true by default.

It will then take your input and then will "shift" it and return a new encoded or decoded input. For example, it will take an input of "thinkful", a shift of 3, and then return 'wklqnixo' as the encoded message.

### Examples

```js
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
```

### Errors

You will receive an error if:
- You give no input
- You give no shift
- If shift is zero
- If shift is greater than 25
- If shift is less than -25

```js
caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
```


## Polybius Function

Polybius square
   |   | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| 1 | A | B | C | D | E |
| 2 | F | G | H | I/J | K |
| 3 | L | M | N | O | P |
| 4 | Q | R | S | T | U |
| 5 | V | W | X | Y | Z |


The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter B would be represented by the numerical pair 21.

The polybius function takes in two arguments:
- Input = A input that will get encoded or decoded.
- Encode = If true, your input will be encoded. If false, your input will be decoded. This will be set to true by default.

It will then take your input, match it to the table and return either an encoded message with the number values, or if your input in already encoded it will return the letters from the numbers given. When decoding the value "42" will be translated to "(i/j)"

### Example

```js
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
```

### Errors

You will recieve an error if:
- there is no input given
- if when decoding the input given has a odd amount of numbers

```js
polybius() //> false
polybius("44324233521254134", false); //> false
```

## Substitution Function

The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the substitution alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.


The substitution function takes in two arguments:
- Input = A input that will get encoded or decoded.
- Alphebet = The subsitution alphabet that will be used to translate your input.
- Encode = If true, your input will be encoded. If false, your input will be decoded. This will be set to true by default.

It will take your input and the alphabet given and then take the input and swap them with the corresponding element.

### Examples

```js
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
```

### Errors

You will recieve an error if:
- the given alphabet is not exactly 26 characters long
- there are duplicate characters in the given alphabet
- no input or alphabet is given

```js
substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
substitution(); //> false
```