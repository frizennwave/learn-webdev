
/*  - Operand   => elemen yang dioperasikan oleh operator.
  *                 contoh: 5 * 2. maka 5 dan 2 merupakan operand.
  *
  * - Operator  => disebut unary jika operator memiliki satu operand.
  *                 contoh: operator negasi unary (-) membalikkan tanda bilangan.
  *                disebut binary jika operator memiliki dua operand.
  * */

// 1. Maths
console.log(1 + 1);   // addition
console.log(2 - 1);   // subtraction
console.log(3 * 3);   // multiplication
console.log(10 / 2);  // division
console.log(5 % 2);   // remainder
console.log(2**2);    // exponentiation

// 2. String concatenation with binary +
let str = "my" + "string";
console.log(str); // mystring

console.log(2 * 2 + "4"); // "44"

// Hanya berlaku pada binary +
console.log(6 - "2"); // 4
console.log("6" / 2); // 3

// 3. Numeric conversion, unary +
/* plus memiliki 2 bentuk, yaitu binary dan unary.
  * unary tidak mengubah nilai angka, namun jika operand
  * bukan angka, plus unary akan mengubahnya menjadi angka.*/

// No effect on numbers
let x = 1;
console.log(+1) // 1

let y = -2;
console.log(+y) // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

// Contoh Penggunaan
let apples = "2";
let oranges = "3";

console.log(apples + oranges); // 23
console.log(+apples + +oranges); // => console.log(Number(apples) + Number(oranges));
  
// 4. Operator precedence
// Prioritas operasi.
const precedence = [
  { Precedence: 14, Name: 'unary plus', Sign: '+' },
  { Precedence: 14, Name: 'unary negation', Sign: '-' },
  { Precedence: 13, Name: 'exponentiation', Sign: '**' },
  { Precedence: 12, Name: 'multiplication', Sign: '*' },
  { Precedence: 12, Name: 'division', Sign: '/' },
  { Precedence: 11, Name: 'addition', Sign: '+' },
  { Precedence: 11, Name: 'subtraction', Sign: '-' },
  { Precedence: 2, Name: 'assignment', Sign: '=' },
];

console.table(precedence);

// 5. Assignment
let a = 1;
let b = 2;

let c = 3 - (a = b + 1); // Assignment = returns a value.

console.log(a); // 3
console.log(c); // 0

// Chaining assignment
let d, e, f;

d = e = f = 2 + 2;

console.log(d); // 4
console.log(e); // 4
console.log(f); // 4

// sama dengan
g = 2 + 2;
h = g;
i = g;

// 6. Modify-in-place
// 7. Increment/Decrement
// 8. Bitwise operators
// 9. Comma






