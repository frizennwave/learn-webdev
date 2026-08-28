
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
// 4. breaking the loop
// 5. continue to the next iteration
// 6. labels for break/continue









