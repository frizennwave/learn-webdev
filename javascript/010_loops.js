import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";


async function main() {
  const rd = readline.createInterface({input, output});

  /* Loops adalah cara untuk menjalankan code yang sama
    * berulang kali.*/

  // 1. while loop
  /* Syntax:
    * while (condition) {
    *   code
    *   so-called "loop-body"
    * } 
    *
    * Selama kondisi bernilai true, code dalam loop
    * akan dieksekusi.
    *
    * Misalnya loop dibawah ini menghasilkan output i while i < 3.
    */

  let i = 0;
  while (i < 3) { // shows 0, then 1, then 2.
    console.log(i);
    i++;
  }

  /* Satu kali eksekusi loop body disebut sebagai iterasi.
    * Loop pada contoh diatas melakukan 3 iterasi.
    * Jika i++ tidak disertakan dalam contoh diatas, loop
    * tersebut secara teoritis akan berjalan terus-menerus (infinite loop).
    * 
    * Variabel atau ekspresi apapun dapat menjadi kondisi loop,
    * bukan hanya perbandingan. kondisi tersebut akan dievaluasi
    * dan dikonversi oleh while menjadi nilai boolean.
    *
    * Contoh cara yang lebih singkat untuk menulis while (i != 0) adalah
    * while (i):
    */

  i = 3;
  while (i) {
    console.log(i);
    i--;
  }

  console.log("=================================================");

  // 2. do.. while loop
  /* Pemeriksaan kondisi dapat dipindahkan ke bawah loop body 
    * menggunakan do.. while.
    * 
    * do {
    *   loop body
    * } while (condition); 
    *
    * Loop pertama-tama mengeksekusi loop body, kemudian memeriksa
    * kondisi, dan selama kondisi benar (truthy), maka akan dieksekusi
    * seterusnya.
    */

  i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 3);

  // 3. for loop
  /* For loop lebih kompleks, namun juga merupakan loop 
    * yang paling sering digunakan.
    *
    * for (begin; condition; step) {
    *   loop body
    * }
    */

  for (let i = 0; i < 3; i++) {
    console.log(i);
  }

  // kita bisa menghilangkan part jika tidak diperlukan.
  i = 0;

  for (; i < 3; i++) {
    console.log(i);
  }

  i = 0;

  for (; i < 3;) {
    console.log(i++);
  }

  /*
    * for (;;) {
    *   // repeat without limits
    * }
    */

  console.log("=================================================");

  // 4. breaking the loop
  /* Biasanya sebuah perulangan akan berhenti ketika kondisinya
    * menjadi false. Namun kita dapat memaksa penghentian kapan saja
    * menggunakan perintah khusus break.
    */

  let sum = 0;

  while (true) {
    let value = await rd.question("Enter a number: ");

    if (!value) break; // (*)

    sum += Number(value);
  }

  console.log(`Sum: ${sum}`);

  /* Perintah break diaktifkan pada baris (*), jika pengguna
    * memasukkan input kosong.
    */

  console.log("=================================================");

  // 5. continue to the next iteration
  // Digunakan untuk melewati iterasi.
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;

    console.log(i);
  }

  // 6. labels for break/continue
  /* Terkadang kita perlu keluar dari multiple nested loops sekaligus.
    * 
    * Sebagai contoh code di bawah ini melakukan perulangan terhadap
    * i dan j, serta meminta input koordinat (i, j) mulai dari (0, 0)
    * hingga (2, 2)
    *
    * for (let i = 0; i < 3; i++) {
    *   for (let j = 0; j < 3; j++) {
    *    let input = rd.question(`Value at coords (${i}, ${j}): `);
    *
    *     // what if we wan't to exit from here to Done (below)?
    *   }
    * }
    * 
    * console.log("Done!");
    * 
    * Kita memerlukan cara untuk menghentikan proses jika pengguna
    * membatalkan input. Perintah break biasa setelah input hanya akan
    * menghentikan perulangan bagian dalam. Disinilah peran label.
    *
    * Label adalah sebuah pengenal (identifier) yang diikuti tanda
    * titik dua dan ditempatkan sebelum perulangan.
    *
    * labelName: for (...) {
    *   ...
    * }
    */

  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = await rd.question(`Value at coords (${i}, ${j}): `);

      // if an empty string of canceled, then break out of both loops
      
      if (!input) break outer; // (*)

      // do something with the value...
    }
  }

  console.log("Done!");

  /* Perintah continue juga dapat digunakan bersama label. Dalam hal ini
    * eksekusi code melompat ke iterasi berikutnya dari perulangan
    * yang diberi label tersebut.
    */
  
  rd.close();
}

main();






