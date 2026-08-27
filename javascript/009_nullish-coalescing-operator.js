
/* Nullish-coalescing operator ditulis sebagai dua question marks (??).
  *
  * Hasil dari a ?? b adalah:
  * - Jika a defined, maka hasilnya adalah a.
  * - Jika a undefined, maka hasilnya adalah b.
  *
  * Dengan kata lain, operator ini me-return argumen pertama jika nilainya
  * bukan null atau undefined. Jika tidak ia me-return argumen kedua.
  */

// Bentuk lain dari a ?? b
let a = 10;
let result = (a !== null && a !== undefined) ? a : b;

console.log(result); // 10

/* Digunakan untuk memberikan nilai default.
  * Contoh: - Tampilkan user jika nilainya bukan null atau undefined.
  *         - Atau tampilkan "Anonymous" jika sebaliknya.
  */

// user undefined.
let user;
console.log(user ?? "Anonymous"); // Anonymous

// user defined.
user = "John";
console.log(user ?? "Anonymous"); // John

/* Kita juga bisa menggunakan rangkaian operator ?? untuk memilih
  * nilai pertama dari sebuah daftar yang tidak bernilai null atau undefined.
  */

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// 1. Comparison with ||
// 2. Precedence











