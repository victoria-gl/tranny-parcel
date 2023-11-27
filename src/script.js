
                         //Урок 8.2


//local Storage

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];


//Збереження в ls

// console.log(window);
// localStorage.setItem(LS_KEY, JSON.stringify(names));


//Читання данних в LS

const value = localStorage.getItem(LS_KEY);
console.log(value);
console.log(JSON.parse(value));


//Видалення данних з LS