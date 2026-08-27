
/* Ada empat operator logika pada javascript:
  * - || (OR)
  * - && (AND)
  * - ! (NOT)
  * - ?? (Nullish Coalescing)
  *
  * Meski disebut operator logika, operator-operator ini
  * dapat diterapkan pada nilai dari tipe apapun, bukan hanya boolean.
  * Hasilnya pun bisa apa saja.
  */

// 1. || (OR)
// Direpresentasikan dengan dua simbol garis vertikal:
// result = a || b
console.log(true || true);    // true
console.log(false || true);   // true
console.log(true || false);   // true
console.log(false || false);  // true

/* Jika sebuah operand bukan nilai boolean, operand tersebut akan
  * dikonversi menjadi boolean untuk keperluan evaluasi.
  * Sebagai contoh angka 1 menjadi true, sedangkan 0 
  * dianggap sebagai false.
  */
if (1 || 0) { // works just like if (true || false)
  console.log("Truthy");
}

/* Umumnya operator OR (||) digunakan dalam if statement 
  * untuk memeriksa apakah salah satu dari kondisi yang diberikan
  * bernilai true.
  */
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("The office is closed"); // it is the weekend
}

// 2. OR "||" finds the first truthy value
// result = value1 || value2 || value3;

/* Operator OR:
  * - Mengevaluasi operand dari kiri ke kanan.
  * - Untuk setiap operand, mengubahnya menjadi boolean. Jika hasilnya
  *   true, proses berhenti dan me-return nilai asli operand tersebut.
  * - Jika semua operand telah dievaluasi (artinya semua bernilai false),
  *   maka operand terakhir yang di-return.
  * - Value di-return dalam bentuk aslinya, tanpa konversi.
  *
  * Dengan kata lain operator OR akan me-return nilai truthy pertama
  * atau nilai terakhir jika tidak ditemukan nilai truthy sama sekali.*/

console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 ( 1 is the first truthy value)
console.log(null || 0 || 1); // 1 (1 is the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, return the last value)

// Mendapatkan nilai truthy pertama dari daftar variabel atau ekspresi.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

// Short-circuit evaluation
/* Operator OR memproses argumen-argumennya hingga menemukan nilai
  * truthy pertama, lalu segera me-return nilai tersebut tanpa 
  * memproses argumen lainnya sama sekali.
  *
  * Pentingnya fitur ini menjadi jelas jika sebuah operand bukan sekedar nilai,
  * melainkan sebuah ekspresi yang memiliki efek samping, seperti variable assigntment
  * atau function call.*/

false || console.log("Not Printed");
true || console.log("Printed");

// 3. && (AND)
// Direpresentasikan dengan dua tanda ampersand (&&)
// result = a && b;

// AND menghasilkan nilai true jika kedua operand bernilai truthy.
console.log(true && true);    // true
console.log(false && true);   // false
console.log(true && false);   // false
console.log(false && false);  // false

// example with if
hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log("The time is 12:30");
}

// sama halnya dengan OR, nilai apapun diperbolehkan sebagai operand
if (1 && 0) { // evaluated as true && false
  console.log("won't work, because the result is falsy");
}

// 4. AND "&&" find the first falsy value
// 5. ! (NOT)
















