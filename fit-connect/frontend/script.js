// let promise = new Promise(function (resolve, reject) {
//     let x = 20;
//     let y = 20;

//     if (x === y) {
//       resolve();
//     } else {
//       reject();
//     }
// });

// promise
//   .then(function () {
//     console.log("promise is succed");
//   })
//   .catch(function () {
//     console.log("promish failed");
//   });

//   function a(val){

//     let r = 20;

//     function b (){
//         return r;
//     }
//      return b();

//   }
// console.log(a());

// const data = `https://dummyjson.com/products`;

// async function result() {
//   const products = await fetch(data);
//   const result = await products.json();

  //   setTimeout(() => {
  //     console.log(products);
  //   }, 1000);

//   console.log(products);
//   if (products.ok) {
//     console.log(result.products);
//   } else {
//     console.log("milena");
//   }
// }
// result();

// products.then( function(data){
//     const result = data.json();
//     console.log(data,"result")
// }).catch(function(err){

//     console.log("error");
// });




function login(){
  console.log("login is clicked");
}

login()