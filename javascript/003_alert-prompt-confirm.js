
// 1. Alert
// Menampilkan jendela modal yang hanya berisi pesan
// dan satu tombol ok.
alert("Hello");

// 2. Prompt
// Menampilkan jendela modal berisi pesan, kolom input
// serta tombol ok/batal.

// result = prompt("title", [default]);

/*  - title => text untuk ditampilkan pada modal.
  * - default => nilai awal untuk kolom input (opsional).*/
let age = prompt("How old are you?", 100);

alert(`You are ${age} years old!`);

// 3. Confirm
// Menampilkan jendela modal berisi pertanyaan
// dan dua tombol ok dan batal.

// result = confirm(question);

let isBoss = confirm("Are you a boss?");
alert(isBoss);
