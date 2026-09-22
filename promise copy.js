const promise1 = new Promise((resolve, reject) => {
  let success = true
  if (success) {
    resolve({
      id: 68680,
      username: "shreyansh"
    })
  }
  else {
    reject(new error("data not fetched"))
  }
})
// promise1
// .then((response)=>{
//     console.log(response);
// })
//    .catch((error)=>{
//     console.log(error);
//    })

const promise2 = new Promise((resolve, reject) => {
  let success = true
  if (success) {
    resolve({
      id: 7800300944,
      orderlocation: "uttar pradesh"
    })
  }
  else {
    reject(new error("data not fetched"))
  }
})
promise2
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

Promise.all([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

Promise.race([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

Promise.allSettled([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })