

// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2) {
    if (num1 > num2) {
        return num1
    } else
        return num2
}
  
  

console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if 
        (num2 > num1 && num2 > num3) {
        return num2
    } else
        return num3
}
  

console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------

function isVowel(str) {
    if (str == a || str == e || str == i || str == o || str == u) {
        return true
    } else
        return false
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------

var consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
];

function Rovarspraket(str) {
    for (i = 0; i < str.length; i++) {
        if (cosonants.indexOf(str[i])) {
            str[i] + 'o' + str[i]
    } return
}
        

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------

function reverse(str) {
    var backwards = ""
    for (i = str.length - 1; i >= 0; i--) {
        backwards = str[i] 
    } return
}


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")