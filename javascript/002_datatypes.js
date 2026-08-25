
// 1. Number
let n = 123;
n = 12.0;
console.log(`${n} is a Number`);

/* Tipe data number merepresentasikan angka integer dan floating point.
  * Operasi pada tipe data number:
  * - Multiplication (*)
  * - Division (/)
  * - Addition (+)
  * - Substraction (-). 
  *
  * Selain angka biasa, terdapat apa yang disebut sebagai 
  * "Special Numeric Value" yaitu:
  * - Infinity
  * - -Infinity
  * - Nan
*/

// - Infinity => Representasi Mathematical Infinity.
console.log(1 / 0);
console.log(Infinity);

// - NaN => Representasi Computational Error.
console.log("not a number" / 2);
console.log(NaN + 1);
console.log(3 * NaN);
console.log("not a number" / 2 - 1);


// 2. BigInt
/* BigInt digunakan untuk menyimpan angka yang lebih besar.
  * tipe ini dibuat dengan menambahkan huruf n diakhir. */
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// 3. String
/* String pada javascript harus diapit oleh tanda kutip. */
let str = "Double quote";
let str2 = 'Single quote';
let phrase = `Can embed another ${str}`; // Memasukkan variable dan expression pada string.

let username = "John";
console.log(`Hello, ${username}`);

console.log(`the result is ${2 * 10}`);

// 4. Boolean (Logical Type)
// Hanya memiliki 2 nilai yaitu true dan false.
let nameFieldChecked = true;
let ageFieldChecked = false;

// Dari comparisons:
let isGreater = 4 > 1;
console.log(isGreater);

// 5. Null Value
// nilai untuk menyatakan kosong/tidak ada apa-apa/nilai tidak diketahui.
let age = null;

// 6. Undefined Value
// Undefined = nilai belum di definisikan.
// Variabel yang di deklarasikan namun belum (tidak) diberi value,
// Maka variabel tersebut value-nya undefined.
let adress;
console.log(adress);

// 7. Objects and Symbols
/* Object adalah tipe data yang istimewa.
  * Semua tipe data sebelumnya disebut tipe data primitif,
  * karena hanya memuat satu hal saja (baik itu string, angka, dan lain-lain)
  * Sedangkan Object dapat menyimpan kumpulan data dan entitas yang lebih kompleks. 
  *
  * Symbol digunakan untuk membuat pengenal (identifier) unik bagi object.
  * */

// 8. Typeoff Operator
// me-return tipe dari operand. Digunakan untuk mengetahui tipe data.
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol('id'));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);



