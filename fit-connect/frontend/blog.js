// const cart = `https://dummyjson.com/carts`;

// fetching data using async await method
// async function result() {
//   const value = await fetch(cart);
//   const data = await value.json();

//   console.log(data);
// }

// result();

// fetching data using fetch method
// fetch(cart)
//   .then((respond) => respond.json())
//   .then((data) => console.log(data))
//   .catch(() => console.log("somthing went wrong"));

// fetching data using AJAX

// function result() {
//   const xhttp = new XMLHttpRequest();

//   xhttp.onload = function () {
//     console.log(JSON.parse(this.response));
//   };

//   xhttp.open("GET", cart, true);
//   xhttp.send();
// }

// result();

// function cartproduct(data) {
//   const cartValue = document.createElement("div");
//   cartValue.classList.add("cart");
//   cartValue.innerHTML = `
//   <img  src= "${cartValue.thumbnail}" alt="${cartValue.title}">
//   <h2>${cartValue.title}</h2>
//   <span>${cartValue.price}</span>`;

//   return data;
// }

// function cartRender(cart) {
//   const productList = document.getElementById("product-list");
//   productList.innerHTML = "";

//   cart.array.forEach((cart) => {
//     const card = createCard(cart);
//     productListContainer.appendChild(cart);
//   });
// }

//POST
// const formData = document.querySelector(".form");

// formData.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const data = new FormData(formData);
//   console.log("data", data);
//   const formdatas = Object.fromEntries(data);
//   console.log("formdata", formdatas);

//   fetch("http://localhost:8080/userNme", {
//     method: "POST",
//     body: JSON.stringify(formdatas),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     // .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// });

//GET
// function getData() {
//   fetch("http://localhost:8080/userNme")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => console.log(error, "Error fetching data:"));
// }

//getData();

// const animal = [
//   "mh",
//   "mh",
//   "fh",
//   "cw",
//   "cw",
//   "ct",
//   "fh",
//   "mh",
//   "fm",
//   "fm",
//   "ct",
//   "cw",
//   "gh",
//   "mh",
//   "gh",
//   "mh",
// ];

// for (let i = 0; i < 16; i++) {
//   //console.log(animal)
//   maleH = 0;
//   femaleH = 0;

//   if (animal[i] == "mh") {
//     maleH++;
//     console.log("male horse", maleH);
//   } else if (animal[i] == "fh") {
//     femaleH++;
//     console.log("female horse", femaleH);
//   }
// }

// const data = "1770,2680,3100,4530,600,500,80,6000,4500";
// // console.log(typeof data, data);
// const values = data.split(',');
// console.log(values);
// let sum =0;

// for(i =0; i < 9 ;i++){

//    sum = sum + parseInt[i];
//    console.log(sum);
// }

// console.log(values);

// const data = [
//   "+ve",
//   "+ve",
//   "-ve",
//   "+ve",
//   "-ve",
//   "-ve",
//   "+ve",
//   "+ve",
//   "+ve",
//   "-ve",
//   "+ve",
//   "-ve",
//   "-ve",
//   "+ve",
//   "-ve",
// ];

// for (let i = 0; i < 15; i++) {
//   //console.log(animal)
//   positive  = [];
//   negitive = [];

//   if (data[i] == "+ve") {
//     positive++;
//     console.log("positive",positive );
//   } else if (data[i] == "-ve") {
//     negitive++;
//     console.log("negitive",negitive );
//   }
// }

// question 5
// const array = [[1, 2], null, true, [4, 5, 6], [12, 14], "test"];

// let new2 = array.flat();

// console.log(new2);

// function flatten(data) {
//   let newArr = [];

//   // debugger;
//   for (let a = 0; a < data.length; a++) {
//     if (Array.isArray(data[a])) {
//       let faltenData = new flatten(data[a]);
//       newArr = newArr.concat(faltenData);
//       console.log(newArr);

//     } else {
//       newArr.push(data[a]);
//     }
//   }
//   return newArr;
// }

// console.log(flatten(array));

//queston 6

// const  arr = [[1,2], [4,5], [6,7,8]] ;

// let newArray = arr.flat();

// console.log(newArray);

// arraySum = 0 ;
// newArray.forEach(el =>{

//   arraySum = arraySum + el;

// })
// console.log(arraySum);

// const  array = [[1,2],5, [4,5], [6,7,8]] ;

//   let newArray = [];
// let sum = 0;

// for(i =0 ;i<array.length;i++){

//   if (Array.isArray(array[i])){
//     for(j=0;j<array[i].length;j++){
//       newArray.push(array[i][j]);
//       sum+= array[i][j] ;
//     }
//   }
//   else {
//       newArray.push(array[i]);
//     sum+=array[i];
//   }
// }

// console.log(sum);

//question 7

// let arr = [1,3,5,6,7,8,2,1];
// let newArr = [];
// arr.forEach(el=>{
//   newArr.push(el * 3);
// })

// console.log(newArr);

// const arr = [1,3,5,6,7,8,2,1];
// const arr1 = arr.map((el) => el*3)
// console.log(arr1)

// const arr = [1, 3, 5, 6, 7, 8, 2, 1];
// let mul = 0;

// for (i = 0; i < arr.length; i++) {
//   console.log((mul = arr[i] * 3));
// }

//question 8

// const array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 6, 8];

// const uniqueElement = new Set();

// console.log(uniqueElement);

// let dublicate = [];

// array.forEach((el) => {
//   if (uniqueElement.has(el)) {
//     console.log("this is unique",uniqueElement);
//     dublicate.push(el);
//   } else {
//     uniqueElement.add(el);
//   }
// });

// console.log("dublicate value are:",dublicate);

// const array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 6, 8];

// let dubli = [];

// for(i=0;i<array.length;i++){
//    for(j= i + 1;j<array.length;j++){
//     if(array[i] == array[j]){

//       console.log(array[j]);
//     }
//   }
//  }

//question 9

// const newArr = array.sort();
// console.log(newArr);

// array.forEach((el) => {
//   if (uniqueElement.has(el)) {
//     dublicate.push(el);
//   } else {
//     uniqueElement.add(el);
//   }
// });

// console.log("shorted array is dublicate:",dublicate);

//question 10

// const array = [1,2,3,4,5,6,7,8,9]

// let reversedArray = [];

// for(i = array.length-1;i >= 0;i--){

//   reversedArray.push(array[i]);
// }

// console.log(reversedArray);

//question 11

// function largest(a,b,c) {
//   if (a > b && a > c) {
//     console.log("a is gretest");
//   } else if (b > c) {
//     console.log("b is gratest");
//   } else {
//     console.log("c is greatest");
//   }
// }
// largest(10,90,20);

// bubble sort

// const array = [23, 3, 45, 1, 22, 56, 7, 89, 90, 223, 345, 67];

// function bubble(item) {
//   for (let i = 0; i < item.length; i++) {
//     // console.log(item[i]);

//     // debugger
//     for (let j = 0; j < item.length - i - 1; j++) {
//       // console.log("this  is  in j loop",item[j]);
//       if (item[j] > item[j + 1]) {
//         let temp = item[j];
//         item[j] = item[j + 1];
//         item[j + 1] = temp;
//       }
//     }
//   }
//   //  return item;
//   console.log(item);
// }

// bubble(array);

//section sort

// function section(item) {
//   let minVale;
//   for (i = 0; i < array.length; i++) {
//     minVale = i;
//     for (j = i + 1; j < array.length - 1; j++) {
//       if (item[j] < minVale[minVale]) {
//         minVale = j;
//       }
//     }

//     if(minVale! = i){

//       [item[minVale],item[i]]=[item[i],item[minVale]]
//     }
//   }
//   console.log(item);
// }

// section(array);

//inserction short

// function insertion(array) {
//   for (let i = 1; i < array.length; i++) {
//     let temp = array[i];
//     let j = i - 1;

//     while (j >= 0 && array[j] > temp) {
//       array[j + 1] = array[j];
//       j--;
//     }

//     array[j + 1] = temp;
//   }

//   console.log("insertion sort array is:",array);
// }

// insertion(array);

// binary search

//  const data = [1, 2, 3, 5, 6, 7, 9, 10, 12, 13, 20, 24, 36];

// function binary(data, x) {
//   let low = 0;
//   let high = data.length - 1;
//   let mid;

//   while (high >= low) {
//     mid = low + Math.floor((high - low) / 2);
//     if (data[mid] === x) {
//       return x;
//     } else if (data[mid] > x) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return -1;
// }

// let result = binary(data, 10);

// (result == -1) ? console.log("data is not present in the array") : console.log("data is present in the array");

//  let num = "1,2,3,4,6";

// let newArray = num.split(",");

// // Use a different variable name instead of `new`, and provide a function to `map`
// let newNumArray = newArray.map(Number);

// console.log(newNumArray);

//closur
let clousr = () => {
  let x = 20;
  // debugger
  function call() {
    let x = 20;
    console.log(x);
  }

  call();
  return 0;
};
console.log(clousr());

//call stack

function f1() {
  console.log("i am in f1");
}

function f2() {
  f1();
  console.log("i am in f2");
}

f2();

//higher order function

const add = (a, b) => {
  sum = a + b;
  return sum;
};

const value = () => {
  console.log(sum);
  return "i am value";
};

console.log(value(add(2, 3)));

// const obj = {
//   name: "ujwal",
//   cast: "bholan",
//   college: "Apex",
//   age: 19,
//   address: "kathmadu",
// };

// const arr = [1, 2, 3, 4, 5];

// obj.forEach((element) => {
//   console.log(element.address);
// });

// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     value = obj[key];
//     console.log(key, ":", value);
//   }
// }

// const person = {
//   name: [["ujwal"], ["puja"]],
//   age: 19,
//   bio: function () {
//     //method
//     return console.log(
//       `${this.name[0]} ${this.name[1]} ${this.name[2]} is ${this.age} year old`
//     );
//   },
//   info: function () {
//     console.log(` Hi its me ${this.name[1]} and i am ${this.age} years old`);
//   }
// };

// person.cast = "tamang";
// person.name.push(["prapti"]);

// console.log(person);
// person.bio();

// const number = "9474"
// let val = number.split("");
//  let newVal = val.map((el)=>{
//    let data = Math.pow(el, val.length);
//    return data;
//   });

// arraySum = 0 ;
// newVal.forEach(el =>{

//   arraySum = arraySum + el;
//   return arraySum;

// })

// if(number == arraySum){
//   console.log("number is armstrong");
// }else{
//   console.log("not a armstrong number");
// }
