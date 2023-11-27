
                         //Урок 8.2


//local Storage

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];


//Збереження в ls

// console.log(window);
// localStorage.setItem(LS_KEY, JSON.stringify(names));


//Читання данних в LS

// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));


//Видалення данних з LS

// localStorage.removeItem(LS_KEY);


//Очищення(повне) LS

// localStorage.setItem("lalala", "hello");
// localStorage.setItem("tuutut", "world");

// localStorage.clear()


//Чому варто завжди використовувати метод JSON.stringify

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, names)

// const value = localStorage.getItem(LS_KEY)
// console.log(value);
// console.log(JSON.parse(value)); - видасть помилку, бо цей рядок не можливо розпарсити

// const LS_KEY = "my function";

// function add (a, b){
//     return a + b;
// }

// localStorage.setItem(LS_KEY, add);

// console.log(localStorage.getItem(LS_KEY));

// const foo = JSON.parse(localStorage.getItem(LS_KEY))

//функції в LS не кладеться ні в якому вигляді


// const calc = {
//     a: 2,
//     b: 3,
//     add(){
//         return this.a + this.b
//     }
// }

// localStorage.setItem(LS_KEY, JSON.stringify(calc))
// console.log(JSON.parse(localStorage.getItem(LS_KEY)));

