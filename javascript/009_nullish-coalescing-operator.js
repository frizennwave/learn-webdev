
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
// Operator OR juga bisa melakukan hal yang sama seperti contoh diatas.
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

/* Perbedaan Nullish-coalescing operator dan operator OR adalah:
  * - || => Me-return nilai truthy pertama.
  * - ?? => Me-return nilai yang terdefinisi.
  */

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// 2. Precedence
/* Precedence dari (??) sama dengan (||). Keduanya memiliki nilai
  * precedence 3 dalam tabel MDN.
  * 
  * Artinya, sama seperti (||), nullish-coalescing operator
  * dijalankan sebelum (=) dan (?), namun setelah sebagian besar
  * operator lainnya seperti + dan *.
  *
  * Oleh karena, itu kita memerlukan tanda kurung pada ekspresi
  * seperti dibawah ini.
  *
  * Jika tidak, maka operasi * akan dijalankan terlebih dahulu
  * yang menyebabkan hasil yang salah.
  */

height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000

// without parentheses
height = null;
width = null;

area = height ?? 100 * width ?? 50;
console.log(area);

area = height ?? (100 * width) ?? 50;
console.log(area);

// 3. Using ?? with && or ||
/* Karena alasan keamanan, javascript melarang penggunaan
  * ?? bersamaan dengan operator && dan ||, kecuali prioritasnya
  * secara eksplisit ditentukan dengan tanda kurung.
  */

// let x = 1 && 2 ?? 3; // syntax error

let x = (1 && 2) ?? 3; // works
console.log(x); // 2
