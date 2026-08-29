import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rd = readline.createInterface({input, output});


async function main() {
  /* Seringkali kita perlu melakukan tindakan serupa di bagian
    * skrip lain. Sebagai contoh, kita perlu menampilkan pesan
    * yang menarik ketika user login, logout dan mungkin di bagian lain.
    *
    * Function merupakan main building blocks dalam program.
    * Function memungkinkan code dipanggil berkali-kali tanpa perlu
    * mengulang penulisan.
    *
    * Contoh function: console.log(message), Number(value), dll.
    * Namun, kita juga dapat membuat function sendiri.
    */

  // 1. Function declaration
  /* Untuk membuat function, kita harus mendeklarasikan function
    * terlebih dahulu.
    *
    * function name (parameter1, parameter2, ...parameterN) {
    *   // body.
    * }
    *
    * Function dapat dipanggil menggunakan namanya.
    *
    * Salah satu tujuan utama function adalah menghindari duplikasi code.
    * Jika kita perlu mengubah pesan atau cara penampilannya,
    * kita hanya perlu memodifikasi code di satu tempat saja yaitu
    * pada function yang menampilkan pesan tersebut.
    */

  function showMessage() {
    console.log("Hello everyone!");
  }

  showMessage();
  showMessage();

  // 2. Local variables
  /* variabel yang dideklarasikan di dalam function hanya dapat
    * diakses di dalam function tersebut.
    */

  function showMessage2() {
    let message = "Hello, I'm JavaScript!"; // local variable

    console.log(message);
  }

  showMessage2();

  // console.log(message); -> Error! The variable is local to the function

  // 3. Outer variables
  // Function juga dapat mengakses variabel luar.
  let userName = "John";

  function showMessage3() {
    let message = "Hello, " + userName;
    console.log(message);
  }

  showMessage3(); // Hello, John

  /* Function tersebut memiliki akses penuh ke variabel luar.
    * Function juga dapat memodifikasinya.
    */

  userName = "John";

  function showMessage4() {
    userName = "Bob"; // (1) changed the outer variable

    let message = "Hello, " + userName;
    console.log(message);
  }

  console.log(userName); // John. before the function call

  showMessage4();

  console.log(userName); // Bob. the value was modified by the function

  /* Outer variable hanya digunakan jika tidak ada variabel lokal.
    * Jika variabel dengan nama yang sama dideklarasikan
    * di dalam function, maka variabel tersebut akan menutupi
    * variabel luar. Sebagai contoh, dalam code di bawah ini,
    * function menggunakan userName lokal. outer variable diabaikan.
    */

  userName = "John";

  function showMessage5() {
    let userName = "Bob"; // declare a local variable

    let message = "Hello, " + userName;
    console.log(message);
  }

  // the function call will create and use its own userName
  showMessage5();

  console.log(userName); // John, unchanged, the function did not access the outer variable

  /* Global variable => variabel yang dideklarasikan di luar function manapun.
    * Global variable dapat diakses dari function manapun (kecuali
    * jika tertutupi oleh variabel lokal).
    *
    * Praktik yang baik adalah meminimalkan penggunaan global variable.
    * code modern cenderung memiliki sedikit atau bahkan tidak sama sekali
    * global variable. Sebagian besar variabel berada di dalam function-nya
    * masing-masing. Namun, terkadang global variable berguna untuk menyimpan
    * data tingkat proyek.
    */

  // 4. Parameters
  /* Kita dapat mengirimkan data sembarang ke function
    * menggunakan parameter.
    * Pada contoh di bawah, function memiliki 2 parameter
    * yaitu from dan text.
    */

  function showMessage6(from, text) {
    console.log(from + ": " + text);
  }

  showMessage6("Ann", "Hello!");    // Ann: Hello (*)
  showMessage6("Ann", "What's up?") // Ann: What's up? (**)

  /* Saat function dipanggil di baris (*) dan (**), nilai-nilai
    * yang diberikan dicopy ke dalam variabel lokal from dan text.
    * kemudian function tersebut menggunakannya.
    */

  function showMessage7(from, text) {
    from = "*" + from + "*"; // make "from" look nicer

    console.log(from + ": " + text);
  }

  let from = "Ann";
  showMessage7(from, "Hello"); // *Ann*: Hello

  // the value of "from" is the same, the function modified a local copy
  console.log(from); // Ann

  /* Parameter => variabel yang tercantum di dalam tanda kurung pada
    *             deklarasi function
    *
    * Argument => nilai yang diberikan ke function saat function tersebut
    *             dipanggil.
    */

  // 5. Default values
  /* Jika suatu function dipanggil, tetapi argument tidak diberikan
    * maka nilai menjadi undefined.
    */

  showMessage7("Ann"); // *Ann*: undefined

  /* Kita dapat menentukan nilai default untuk suatu parameter
    * pada function menggunakan (=)
    */

  function showMessage8(from, text = "no text given") {
    console.log(from + ": " + text);
  }

  showMessage8("Ann"); // Ann: no text given

  /* Disini, "no text given" adalah sebuah string, namun bisa
    * juga berupa ekspresi yang lebih kompleks, yang hanya akan
    * dievaluasi dan ditetapkan nilainya jika parameternya tidak ada.
    *
    * function showMessage(from, text = anotherFunction()) {
    *   anotherFunction() only executed if no text given
    *   its result becomes the value of text
    * }
    */

  // 6. Returning a value
  /* Suatu function dapat me-return value ke code pemanggil
    * sebagai hasilnya.
    */

  function sum(a, b) {
    return a + b;
  }

  let result = sum(1, 2);
  console.log(result); // 3

  // sebuh function bisa saja memuat lebih dari satu perintah return
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }

  let age = await rd.question("How old are you? ");

  if (checkAge(age)) {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }

  // Kita juga dapat menggunakan return tanpa nilai.
  // Hal ini menyebabkan function langsung berhenti (keluar).
  function showMovie(age) {
    if (!checkAge(age)) {
      return;
    }

    console.log("Showing you movie..."); // (*)
  }

  showMovie(age);

  // Function dengan return kosong atau tanpa return akan me-return undefined
  function doNothing() { /* empty */ }
  console.log(doNothing() === undefined) // true

  function doNothing2() {
    return;
  }

  console.log(doNothing2() === undefined) // true

  /* Jangan pernah menyisipkan baris baru di antara return dan nilainya.
    * return
    *   (some + long + expression + or + whatever * f(a) + f(b))
    *
    * Cara itu tidak berhasil, karena javascript menganggap ada titik koma
    * setelah return. Hal itu akan berakibat sama seperti:
    *
    * return;
    * (some + long + expression + or + whatever * f(a) + f(b))
    *
    * Jika kita ingin ekspresi yang dikembalikan tersebut mencakup beberapa baris,
    * kita sebaiknya memulainya di baris yang sama dengan return.
    * Atau setidaknya, letakkan tanda kurung pembuka di baris tersebut.
    *
    * return (
    *   some + long + expression
    *   + or + whatever
    *   * f(a) + f(b)
    * )
    */

  // 7. Naming a function
  /* Function adalah sebuah tindakan. Oleh karena itu, namanya biasanya
    * berupa kata kerja. Nama tersebut sebaiknya singkat, seakurat mungkin
    * dan mendeskripsikan apa yang dilakukan function tersebut, sehingga
    * siapapun yang membaca code dapat memahami kegunaan function itu.
    *
    * Contoh:
    * - "show..."   => menampilkan sesuatu
    * - "get..."    => return value
    * - "calc..."   => menghitung sesuatu
    * - "create..." => membuat sesuatu
    * - "check..."  => memeriksa sesuatu
    *
    * */

  // 8. Functions == comments
  /* Function sebaiknya ringkas dan hanya melakukan satu tugas spesifik.
    * Jika tugas tergolong besar, ada baiknya memecah function itu menjadi
    * beberapa function yang lebih kecil.
    *
    * Function yang terpisah tidak hanya lebih mudah di uji dan di debug,
    * tetapi keberadaanya sendiri sudah menjadi komentar yang sangat jelas.
    */
  
  // Contoh 1 menggunakan label
  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {

      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }

      console.log(i); // a prime
    }
  }

  showPrimes(10);

  // Contoh 2 menggunakan function terpisah
  function showPrimes2(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;

      console.log(i); // a prime
    } 
  }

  function isPrime(n) {

    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }

    return true;
  }

  showPrimes2(10);

  rd.close();
}

main();
