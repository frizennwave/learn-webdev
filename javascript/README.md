# Belajar JavaScript 🚀

Repository ini adalah catatan dan perjalanan belajarku dalam memahami pemrograman JavaScript. Materi pembelajaran dalam repository ini sepenuhnya mengikuti kurikulum dari situs terpercaya [javascript.info](https://javascript.info/).

Setiap file JavaScript di dalam repository ini dirancang sebagai catatan interaktif lengkap dengan penjelasan dalam bahasa Indonesia serta latihan/tugas (*task*) yang ada pada kurikulum tersebut.

---

## 📚 Kurikulum Pembelajaran

Di bawah ini adalah peta jalan (*roadmap*) pembelajaran berdasarkan struktur materi di javascript.info beserta status progresnya:

### Part 1: The JavaScript Language

#### **JavaScript Fundamentals**
- [x] Hello, world!
- [x] Code structure
- [x] The modern mode, "use strict"
- [x] Variables (`001_variables.js`)
- [x] Data types (`002_datatypes.js`)
- [x] Interaction: alert, prompt, confirm (`003_alertpromptconfirm.js`)
- [x] Type Conversions (`004_typeconvertions.js`)
- [x] Basic operators, maths
- [ ] Comparisons
- [ ] Conditional branching: if, '?'
- [ ] Logical operators
- [ ] Nullish coalescing operator '??'
- [ ] Loops: while and for
- [ ] The "switch" statement
- [ ] Functions
- [ ] Function expressions
- [ ] Arrow functions, the basics
- [ ] JavaScript specials

#### **Code quality**
- [ ] Debugging in the browser
- [ ] Coding Style
- [ ] Comments
- [ ] Ninja code
- [ ] Automated testing with Mocha
- [ ] Polyfills and transpilers

#### **Objects: the basics**
- [ ] Objects
- [ ] Object references and copying
- [ ] Garbage collection
- [ ] Object methods, "this"
- [ ] Constructor, operator "new"
- [ ] Optional chaining '?.'
- [ ] Symbol type
- [ ] Object to primitive conversion

#### **Data types**
- [ ] Methods of primitives
- [ ] Numbers
- [ ] Strings
- [ ] Arrays
- [ ] Array methods
- [ ] Iterables
- [ ] Map and Set
- [ ] WeakMap and WeakSet
- [ ] Object.keys, values, entries
- [ ] Destructuring assignment
- [ ] Date and time
- [ ] JSON methods, toJSON

#### **Advanced working with functions**
- [ ] Recursion and stack
- [ ] Rest parameters and spread syntax
- [ ] Variable scope, closure
- [ ] The old "var"
- [ ] Global object
- [ ] Function object, NFE
- [ ] The "new Function" syntax
- [ ] Scheduling: setTimeout and setInterval
- [ ] Decorators and forwarding, call/apply
- [ ] Function binding
- [ ] Arrow functions revisited

#### **Object properties configuration**
- [ ] Property flags and descriptors
- [ ] Property getters and setters

#### **Prototypes, inheritance**
- [ ] Prototypal inheritance
- [ ] F.prototype
- [ ] Native prototypes
- [ ] Prototype methods, objects without __proto__

#### **Classes**
- [ ] Class basic syntax
- [ ] Class inheritance
- [ ] Static properties and methods
- [ ] Private and protected properties and methods
- [ ] Extending built-in classes
- [ ] Class checking: "instanceof"
- [ ] Mixins

#### **Error handling**
- [ ] Error handling, "try...catch"
- [ ] Custom errors, extending Error

#### **Promises, async/await**
- [ ] Introduction: callbacks
- [ ] Promise
- [ ] Promises chaining
- [ ] Error handling with promises
- [ ] Promise API
- [ ] Promisification
- [ ] Microtasks
- [ ] Async/await

#### **Generators, advanced iteration**
- [ ] Generators
- [ ] Async iteration and generators

#### **Modules**
- [ ] Modules, introduction
- [ ] Export and Import
- [ ] Dynamic imports

#### **Miscellaneous**
- [ ] Proxy and Reflect
- [ ] Eval: run a code string
- [ ] Currying
- [ ] Reference Type
- [ ] BigInt
- [ ] Unicode, String internals
- [ ] WeakRef and FinalizationRegistry

---

### Part 2: Browser: Document, Events, Interfaces

#### **Document**
- [ ] Browser environment, specs
- [ ] DOM tree
- [ ] Walking the DOM
- [ ] Searching: getElement*, querySelector*
- [ ] Node properties: type, tag and contents
- [ ] Attributes and properties
- [ ] Modifying the document
- [ ] Styles and classes
- [ ] Element size and scrolling
- [ ] Window sizes and scrolling
- [ ] Coordinates

#### **Introduction to Events**
- [ ] Introduction to browser events
- [ ] Bubbling and capturing
- [ ] Event delegation
- [ ] Browser default actions
- [ ] Dispatching custom events

#### **UI Events**
- [ ] Mouse events
- [ ] Moving the mouse: mouseover/out, mouseenter/leave
- [ ] Drag'n'Drop with mouse events
- [ ] Pointer events
- [ ] Keyboard: keydown and keyup
- [ ] Scrolling

#### **Forms, controls**
- [ ] Form properties and methods
- [ ] Focusing: focus/blur
- [ ] Events: change, input, cut, copy, paste
- [ ] Forms: event and method submit

#### **Document and resource loading**
- [ ] Page: DOMContentLoaded, load, beforeunload, unload
- [ ] Scripts: async, defer
- [ ] Resource loading: onload and onerror

#### **Miscellaneous**
- [ ] Mutation observer
- [ ] Selection and Range
- [ ] Event loop: microtasks and macrotasks

---

### Part 3: Additional articles

#### **Frames and windows**
- [ ] Popups and window methods
- [ ] Cross-window communication
- [ ] The clickjacking attack

#### **Binary data, files**
- [ ] ArrayBuffer, binary arrays
- [ ] TextDecoder and TextEncoder
- [ ] Blob
- [ ] File and FileReader

#### **Network requests**
- [ ] Fetch
- [ ] FormData
- [ ] Fetch: Download progress
- [ ] Fetch: Abort
- [ ] Fetch: Cross-Origin Requests
- [ ] Fetch API
- [ ] URL objects
- [ ] XMLHttpRequest
- [ ] Resumable file upload
- [ ] Long polling
- [ ] WebSocket
- [ ] Server Sent Events

#### **Storing data in the browser**
- [ ] Cookies, document.cookie
- [ ] LocalStorage, sessionStorage
- [ ] IndexedDB

#### **Animation**
- [ ] Bezier curve
- [ ] CSS-animations
- [ ] JavaScript animations

#### **Web components**
- [ ] From the orbital height
- [ ] Custom elements
- [ ] Shadow DOM
- [ ] Template element
- [ ] Shadow DOM slots, composition
- [ ] Shadow DOM styling
- [ ] Shadow DOM and events

#### **Regular expressions**
- [ ] Patterns and flags
- [ ] Character classes
- [ ] Unicode: flag "u" and class \p{...}
- [ ] Anchors: string start ^ and end $
- [ ] Multiline mode of anchors ^ $, flag "m"
- [ ] Word boundary: \b
- [ ] Escaping, special characters
- [ ] Sets and ranges [...]
- [ ] Quantifiers +, *, ? and {n}
- [ ] Greedy and lazy quantifiers
- [ ] Capturing groups
- [ ] Backreferences in pattern: \N and \k<name>

---

## 🛠️ Cara Menjalankan Script

### Menjalankan di Node.js
Untuk file-file JavaScript yang **tidak menggunakan API khusus browser** (seperti `alert`, `prompt`, atau `confirm`), kamu bisa menjalankannya langsung menggunakan Node.js di terminal:

```bash
node <nama_file>.js
# Contoh:
node 001_variables.js
```

### Menjalankan di Browser
Untuk file yang menggunakan API khusus browser (misalnya `003_alertpromptconfirm.js`), jalankan script tersebut lewat Developer Console di browser pilihanmu (tekan `F12` -> tab `Console`), atau hubungkan script tersebut ke sebuah file HTML menggunakan tag `<script>` lalu buka file HTML tersebut di browser.
