
/* Comparison operator:
  * - lebih besar/lebih kecil dari        => a > b, a < b
  * - lebih besar/lebih kecil sama dengan => a >= b, a <= b
  * - sama dengan                         => a == b
  * - tidak sama dengan                   => a != b
  */

// 1. Boolean is the result
// Comparison operator me-return boolean value.
// Hasil perbandingan dapat ditetapkan ke dalam variabel.
console.log(2 > 1);   // true
console.log(2 == 1);  // false
console.log(2 != 1);  // true

let result = 5 > 4; // assign result of the comparison
console.log(result); // true

// 2. String comparison
// Untuk menentukan apakah suatu string lebih besar dari string lainnya,
// javascript menggunakan "dictionary" atau "lexicographical" order.
// Dengan kata lain, membandingkan string huruf demi huruf.
console.log("Z" > "A") // true
console.log("Glow" > "Glee") // true
console.log("Bee" > "Be") // true

/* Huruf kapital A != huruf kecil a.
  * Jika dibandingkan, huruf kecil a lebih besar,
  * karena karakter huruf kecil memiliki indeks
  * yang lebih besar dalam internal encoding table
  * yang digunakan javascript (unicode).
  */

// 3. Comparison of different types
// Ketika membandingkan value dengan tipe yang berbeda
// javascript mengonversi values tersebut menjadi numbers.

console.log("2" > 1);   // true, string "2" becomes a number 2
console.log("01" == 1); // true, string "01" becomes a number 1

// Untuk boolean values, true = 1, false = 0.
console.log(true == 1); // true
console.log(false == 0) // true

/* Ada kemungkinan bahwa pada saat yang sama:
  * - kedua values bernilai sama.
  * - Salah satunya bernilai true sebagai boolean,
  *   sedangkan yang lain bernilai false sebagai boolean.
  */

let a = 0;
console.log(Boolean(a));  // false

let b = "0";
console.log(Boolean(b));  // true

console.log(a == b);      // true

// 4. Strict equality
// Regular equality check (==) memiliki masalah.
// Operator ini tidak bisa membedakan 0 dan false,
// hal yang sama juga terjadi pada string '' dan false.
console.log(0 == false); // true
console.log('' == false); // true

/* Strict equality operator (===), memeriksa equality
  * tanpa convert tipe data. Dengan kata lain,
  * jika a dan b memiliki tipe data yang berbeda,
  * maka a === b akan langsung bernilai false.
  *
  * Terdapat juga Strict non-equality operator (!==)
  * yang serupa dengan !=
  */
console.log(0 === false);   // false
console.log('' === false);  // false
console.log(0 != false);    // false
console.log(0 !== false);   // true

// 5. Comparison with null and undefined
console.log(null === undefined);  // false
console.log(null == undefined);   // true

// Karena:
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* Ini terjadi karena comparison (>, <, >=, <=) dan equality check (==) 
  * memiliki aturan yang berbeda. Comparison merubah null menjadi number,
  * memperlakukannya sebagai 0. Itulah kenapa null > 0 dan null >= 0
  * bernilai false.
  *
  * sedangkan equality check memiliki aturan khusus:
  * null == undefined => true
  * null == selain null/undefined => false
  *
  * Itulah sebabnya null == 0 bernilai false.
  */

console.log(undefined > 0);   // false (1)
console.log(undefined < 0);   // false (2)
console.log(undefined == 0);  // false (3)

/* Perbandingan (1) dan (2) bernilai false karena comparison
  * mengkonversi undefined menjadi NaN.
  * perbandingan (3) false karena undefined hanya == null/undefined
  */





