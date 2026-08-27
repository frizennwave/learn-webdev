import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

async function jalankanProgram() {
  const rl = readline.createInterface({input, output});

  // 1. If statement
  /* Mengevaluasi suatu kondisi di dalam kurung,
    * jika kondisi bernilai true, maka blok code akan dijalankan.
    * */
  
  let year = await rl.question("In which year was ECMAScript-2015 specification published? ");

  if (year == 2015) {
    console.log("You are right!\n");
  }


  // 2. Boolean conversion
  /* If statement mengevaluasi expression di dalam tanda kurungnya
    * dan mengubah hasilnya menjadi boolean.
    *
    * Angka 0, string kosong "", null, undefined dan NaN semuanya menjadi false.
    * Oleh karena itu , nilai-nilai ini disebut sebagai nilai falsy.
    * Nilai-nilai lainnya menjadi true, sehingga disebut truthy.
    */

  // code dibawah ini tidak akan pernah dijalankan
  if (0) {
    console.log("This is falsy");
  }

  // sebaliknya, code dibawah akan selalu dijalankan
  if (1) {
    console.log("This is truthy");
  }

  // bisa juga meneruskan nilai boolean yang sudah dievaluasi
  // ke dalam if
  let cond = (year == 2015);
  if (cond) {
    console.log("\nYou are right!");
  }

  // 3. The else clause
  // If statement dapat memuat blok opsional else.
  // Blok ini dieksekusi jika kondisi bernilai false.
  year = await rl.question("In which year was ECMAScript-2015 specification published? ");

  if (year == 2015) {
    console.log("\nYou guessed it right!");
  } else {
    console.log("\nHow can you be so wrong?")
  }

  // 4. Several conditions: "else if"
  // Menguji beberapa kondisi.
  year = await rl.question("In which year was ECMAScript-2015 specification published? ");

  if (year < 2015) {
    console.log("\nToo early...");
  } else if (year > 2015) {
    console.log("\nToo late");
  } else {
    console.log("\nExactly!");
  }

  // 5. Conditional operator "?"
  // Operator ini biasa disebut ternary, karena memiliki 3 operand.
  // let result = condition ? value1 : value2
  // Jika kondisi bernilai truthy, maka value1 ditetapkan,
  // sebaliknya value2.

  let age = 19;
  let accessAllowed = age > 18 ? true : false;
  console.log(accessAllowed);

  // 6. Multiple "?"
  // Serangkaian question mark operators dapat me-return
  // value yang bergantung pada lebih dari satu kondisi.
  age = await rl.question("Age? ");

  let message = (age < 3) ? "Hi, baby!" :
    (age < 18) ? "Hello" :
    (age < 100) ? "Greetings" :
    "What an unusual age!";

  console.log(message);

  // 7. Non-traditional use of "?"
  // Terkadang question mark digunakan sebagai pengganti if.
  let company = await rl.question("Which company created JavaScript? ");
  (company == 'Netscape') ?
    console.log("Right!") : console.log("Wrong.");

  rl.close();
}

jalankanProgram();




