// let js = prompt('какое "официальное название" JavaScript?')
// if (js == 'ECMAScript') {
//     alert ('Верно!');
// } else {
//     alert ('Неправильно');
// }

// let test = 20;
// console.log(test);
// test = 30;
// console.log(test)

// const test = 20;
// console.log(test);
// test = 30;
// console.log(test)


// let jislo = prompt('Сколько лет?', 0);

// if (jislo > 1) {
//  console.log("DA")
// } else {
//  console.log("NET")
// }

// let test = (jislo > 1) ? console.log("DA") : console.log("NET");

// // Сравнение null, undefined, NaN с помозью === и == сравнения

// console.log(null == undefined); // true
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(undefined === undefined);

// let arr = [1, null, undefined, 1, "test", 2, 3, 4, 5];



// console.log(nubers[0]); // 1
// console.log(nubers[1]); // 2
// console.log(nubers[2]); // 3
// console.log(nubers[3]);
// console.log(nubers[4]);
// console.log(nubers.length);
// // console.log(nubers);

// for(let hyi = 0; hyi < arr.length;hyi++){
//     if (arr[hyi] === "test") {
//         console.log("DA");
//     } else {
//         console.log("NET");
//     }
// }

// let hhr = ["re", "текст", 3, 2];
// for(let i = 0; i < hhr.length;i++) {
//   if (hhr[i] === 1) {
//     hhr[i] *= 2;
//   }
// }

// console.log(hhr);

// // debugger;
 
// let i = 0;

// while(i < 10) {
//   console.log(i);
//   i++
// }

// debugger;
// let najalo = prompt(`Какое "официальное" название JavaScript?` ,'');

// if(najalo =="ECMAscript!") {
//   alert('Верно')}
//   else {
//     alert (`Не знаете? "ECMAScript"!`)
// }
// let prio =prompt (`Как дела?`, "");
// if (prio=="норм"){
//   alert (`Прекрасно`)
// }else {
//   alert (`ты чего?`)
// }
// let i= prompt (`Го в доту?`, "");
// if (i=="го"){
//   alert (`Восхитительно`)
// }else {
//   alert (`ты чё!`)
// }
// let d= prompt (`Dota?`, "");
// if (d=="да"){
//  alert (`Dendi`)
// }else {
//   alert (`пукич`)
// }
// let o=prompt('ТС?', "");
// if (o=="Teamspiak"){
//   alert (`Верно`)
// }else{
//   alert (`не верно`)
// }
// let jislo= prompt(`Число`, "");
// if (jislo>0){
//   alert (`1`)
// } else if (jislo<0){
//   alert (`-1`)
//  } else if (jislo ==0) {
//    alert (`0`)
//  }

// ]
// let pi = prompt(`как дела?` , "");
// if (pi=="да"){
//   alert("good")
// }else {
//   alert("bed")
// }
// let i=0;
// while (i<3);{
//   alert =i
//   i++
// }
// let l=0;
// for(l=0; l<0; l++){
// alert =(l);
// }



// for ( let p=0;p<=10;p++){
//   if (p%1==0){
//   alert=(p);
//   }
// }
// let i= 0;
// while (i<3){
//   alert(i);
//   i++;
// }
// let =t;
// while (t<9){
//   alert (t);
//   t++;
// }
// let o=0;
// while (o<8){
//   alert (o);
//   o++;
// }

// for(let m=0;m<45;m++){
//   alert(m);
// }



// for(let =um;um<76;um++){
//   alert(un);
// }

 


// let newArr = arr.map(item => item * 2);

// console.log(arr);
// console.log(newArr);

const arr = [];
const input = document.querySelector(".title");
const btn = document.querySelector("button")
console.log(input)

btn.addEventListener("click",func);

function func() {
    arr.push(input.value);
    console.log(arr);
    renderUsers(arr)
}


const users = document.querySelector(".users__content");

// const requestURL = "https://jsonplaceholder.typicode.com/users";

// async function request(url, method) {
//     try {
//         return await fetch(url, {method: method}).then((data) => data.json())
//     } catch (e) {
//         console.log(e)
//     }
// }


function renderUsers(user) {
    let list = user.map((item, index, arr)=> `<li>${item}</li>`).join()
    users.innerHTML = list;
}

// request(requestURL, "GET").then((data) => renderUsers(data))
