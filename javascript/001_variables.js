"use strict";

/* Deklarasi variabel pada javascript menggunakan keyword:
  * - var : tidak direkomendasikan
  * - let : wajib digunakan
  * - const : digunakan untuk konstanta (variabel bernilai tetap) */

let nama;
nama = "budi";

// Declare + Assign
let umur = 19;

// Declare + Assign Multiple Variable
let alamat = "wakanda", profesi = "black panther";

console.log(`Nama saya ${nama}, umur saya ${umur} tahun. \nsaya tinggal di ${alamat}, sebagai ${profesi}.`);

// Constant
const MyBirthday = '18.04.1982';

// MyBirthday = '01.01.2001'; // error, can't reassign the constant!

// Constant biasa ditulis dengan menggunakan uppercase.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";

let color = COLOR_RED;
console.log(color);



