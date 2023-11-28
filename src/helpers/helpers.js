                  // Урок 8.1


// function add(a, b) {
//     return a + b;
// }

// function logger() {
//     console.log("Hello world");
// }

// function foo() {
//     console.log("foo");
// }

// const num = 5;

// export { logger, foo, add, num };
// export default add;

                 // Урок 8.2

// const save = (key, value) => {
//     try {
//         const serializedState = JSON.stringify(value);
//         localStorage.setItem(key, serializedState);
//     }catch (error){
//         console.error("Set state error: ", error.message);
//     }
// };

// const load = key => {
//    try{
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//    }catch (error){
//     console.error("Get state error: ", error.message);
//    }

// };

// export default {
//     save, 
//     load,
// };