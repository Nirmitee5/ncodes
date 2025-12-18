

// // created a function which promisifies the setTimeout 
// function wait(ms){
//     // create a new promise instance it has an executor function which rum=ns immediately and the promise resolves after ms 
//     // setTimeout has 2 parameters,callback function which gets called after ms 
//    let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("successfully executed ")
//     },ms)
//    })
//    return promise;
// }
// //after the promise has been fulfilled the resolved thing is then catched by .then. . then takes a function as a input which contains the resolve as its input 
// wait(1000).then(res=>{
//     console.log(res)
// })


function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Waited for ${ms} ms`);
    }, ms);
  });
}

// Using the promise
wait(1000)
  .then(msg => {
    console.log(msg);  // prints "Waited for 1000 ms"
    return wait(500);
  })
  .then(msg => console.log(msg))  // prints "Waited for 500 ms"
  .catch(err => console.log("Error:", err));

// Call wait(1000) → returns a pending promise

// setTimeout scheduled → after 1000ms it will call resolve(...)

// Promise is pending right now

// Attach .then(msg => console.log(msg)) → stored to run when promise resolves

// JS continues running other code (non-blocking) → nothing else to do

// After 1000ms, setTimeout fires → calls resolve("Waited for 1000 ms")

// Promise becomes fulfilled

// First .then runs → prints "Waited for 1000 ms"

// Returns wait(500) → another pending promise

// Attach .then(msg => console.log(msg)) to second promise

// After 500ms, second setTimeout fires → resolve second promise

// .then prints "Waited for 500 ms"

// If anything threw an error → .catch would run.


// ASYNC AWAIT SYNTAX 
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Waited for ${ms} ms`);
    }, ms);
  });
}

async function run() {
  try {
    const msg1 = await wait(1000);
    console.log(msg1);  // prints "Waited for 1000 ms"

    const msg2 = await wait(500);
    console.log(msg2);  // prints "Waited for 500 ms"
  } catch (err) {
    console.log("Error:", err);
  }
}

run();
