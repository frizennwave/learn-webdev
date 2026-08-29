import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rd = readline.createInterface({input, output});

async function main() {
  // Switch statement dapat menggantikan multiple if.

  // 1. The syntax
  /* Switch statement memiliki satu atau lebih blok case
    * dan nilai default opsional.
    *
    * switch (x) {
    *   case 'value1':
    *     ...
    *     [break]
    *   case 'value2':
    *     ...
    *     [break]
    *   default:
    *     ...
    *     [break]
    * }
    *
    * - Nilai x diperiksa apakah sama persis dengan nilai
    *   dari case pertama (value1), kemudian dengan case
    *   kedua (value2), dan seterusnya.
    *
    * - Jika kesamaan ditemukan, switch mulai mengeksekusi
    *   code mulai dari case yang sesuai, hingga break terdekat
    *   atau hingga akhir switch.
    *
    * - Jika tidak ada case yang cocok, maka code default
    *   akan dieksekusi (jika ada).
    */

  // 2. An example
  let a = 2 + 2;

  switch (a) {
    case 3:
      console.log("Too small");
      break;
    case 4:
      console.log("Exactly");
      break;
    case 5:
      console.log("Too big");
      break
    default:
      console.log("I don't know such values");
  }

  /* Tanpa break code akan dieksekusi mulai dari case
    * yang sesuai hingga akhir switch.
    */

  a = 2 + 2;

  switch (a) {
    case 3:
      console.log("Too small");
    case 4:
      console.log("Exactly");
    case 5:
      console.log("Too big");
    default:
      console.log("I don't know such values");
  }

  /* Ekspresi apapun dapat menjadi argumen switch/case.
    * Baik switch maupun case mengizinkan penggunaan ekspresi
    * sembarang.
    *
    * Sebagai contoh disini +a menghasilkan 1; nilai ini dibandingkan
    * dengan b + 1 pada case, lalu code yang bersesuaian akan dieksekusi.
    */

  a = "1";
  let b = 0;

  switch (+a) {
    case b + 1:
      console.log("this runs, because +a is 1, exactly equals b + 1");
      break;
    default:
      console.log("this doesn't run");
  }

  // 3. Grouping of "case"
  /* Beberapa varian case yang menggunakan code yang sama
    * dapat dikelompokkan. Sebagai contoh jika kita ingin 
    * code yang sama dieksekusi untuk case 3 dan case 5:
    */

  a = 3;

  switch (a) {
    case 4:
      console.log("Right!");
    case 3: // (*) grouped two cases
    case 5:
      console.log("Wrong!");
      console.log("Why don't you take a math class?");
      break;
    default:
      console.log("The result is strange. Really.");
  }

  /* Kemampuan untuk mengelompokkan case merupakan konsekuensi
    * dari cara kerja switch/case tanpa break. Dalam hal ini,
    * eksekusi case 3 dimulai dari baris (*) dan berlanjut hingga
    * melewati case 5 karena tidak adanya break.*/

  // 4. Type matters
  /* Equality check selalu bersifat ketat (strict).
    * Nilai-nilainya harus memiliki tipe yang sama agar
    * dianggap cocok.
    *
    * Sebagai contoh pada code berikut:
    * - Untuk nilai 0 dan 1, console.log pertama yang dijalankan.
    * - Untuk nilai 2, console.log kedua yang dijalankan.
    * - Namun untuk nilai 3, hasil dari readline adalah string "3",
    *   yang tidak sama secara ketat (===) dengan angka 3.
    *   Jadi kita memiliki dead code pada case 3! bagian default lah
    *   yang dijalankan.
    */

  let arg = await rd.question("Enter a value: ");
  
  switch (arg) {
    case "0":
    case "1":
      console.log("One or zero");
      break;
    case "2":
      console.log("Two");
      break;
    case 3:
      console.log("Never executes!");
      break;
    default:
      console.log("An unknown value");
  }

  rd.close();
}

main();
