/**
 * Destructuring
 */

// Destructuring với object

// const user ={
//     name:"nhien",
//     age: 29,
//     sex: 'male'
// }

// // const name = user.name
// // const age = user.age
// // const sex = user.sex

// const{age:userAge,name,sex} = user

// console.log(name,userAge,sex);


// Destructuring với arr

// const list =[
//     1,
//     function(a,b){
//         return a+b
//     }
// ]

// //lay tung phan tu
// const [value,sum] = list

// console.log(sum(2,3));

/**
 * Spred Syntax
 */

// const user = {
//     name:"nhien",
//     age:"29",
//     ability:['coding']
// }

// //cách thông thường
// // const cloneUser = user

// //shallow copy (copy nông)
// //tạo object mới có những phần tử y hết object cũ , nhưng obj mới không bằng obj cũ
// //dấu 3 chấm ... như là xóa đi ngoặc nhọn của const user = { c, chỉ còn lại phía bên trong -> và sau khi sử dụng lại {} thì là obj mới
// const cloneUser = {...user}

// //không bằng
// console.log(cloneUser === user);

// //vẫn bằng 
// console.log(cloneUser.ability === user.ability);


/**
 * Rest Parameter (những tham số còn lại)
 */

// const handle = (a, b, ...c) =>{
// return  c
// }

// const value = handle(1,2,3,4,5,6)

// console.log(value);

/**
 * Rest Parameter kết hợp destructuring
 */

// const handle = ({a, b, ...c}) =>{
// return  c
// }

// const value = handle({a:1 , b:2 , c:3 , d:4 , e:5})

// console.log(value)

//BAI3 
//clone thường
//1.spread syntax

// let user = {
//     name:"Nhien",
//     age:29
// }

// //bây giờ clone 1 obj độc lập vs cùng nội dung
// let clone ={...user}
// clone.name ="DUC"
// console.log(user.name);
// console.log(clone.name);

//2. dùng vòng lặp
// let user={
//     name:"John",
//     age:"29"
// }

// let clone = {};

// for(let key in user){
//     clone[key] = user[key]
// }

// clone.name = "Peter"
// console.log(user.name);
// console.log(clone.name);

//BÀI 4 : Toán từ Logic và Template String
//4.1 Toán tử và && : (gặp giá trị false thì trả về hoặc đi tới cuối)
// const a = true
// const b = ''
// const c = 'hi'

// const d = a && b && c
// console.log('d', d);

// let check = 1

// const handle = () =>{
//     return [1,2,3].map(item => item*2)
// }

// let value=[]

// // if(check>9){
// //     value = handle()
// // }

// value = check > 9 && handle() 

// console.log(value);

//4.2 Toán từ hoặc || : (chỉ cần gặp truthy hoặc đi đến cuối và trả về giá trị dừng)

// const a = null
// const b = 12
// const c = 'hi'

// const d = a || b || c
// console.log('d', d);

//4.3 Toán tử phủ định !

// const a = null
// const b = 12
// const c = 'hi'

// const d = !(a || b || c)
// console.log('d', d);


//4.4 Toán tử 3 ngôi
// let fname = 'alex'
// fname === 'alex' ? console.log('true') : console.log(flase);


//4.5 Optional chaining ?.
// dùng khi cố truy cập thuộc tính undefined or null 

//cách thông thường để tránh lỗi
// let user = {} 
// alert(user.address.street) //error
// user.address ? alert(user.address.street) : alert(undefined)

// cách ngắn hơn dùng ?.
// alert(user?.address?.street)

//4.6 Toán tử nulllist ?? (check xem 1 giá trị có phải là undefine hay null không)
// let user = 1

// user = null

// console.log(user??"anonymous");

//null , undefined , 0, '', NaN , 0n
//console.log(user || 'Hello');

//4.7 Template String (khai báo 1 string nhưng có thể tính toán trong đó )
// let a = `string text` // a là 1 string bình thường dùng dấu ``

// const sum = (a,b) => a+b

// let b = `string text line 1
// string text line 2` // khi dùng Template String thì có thể enter xuống dòng != string bình thường 

// // vd : string bình thường  '' 
// // let b1 = 'add
// // 1
// // 2
// // 3'

// // let c = `string text ${a} string text ` // có thể đặt biến bên trong TS
// let c = `string text ${sum(1 ,2)} string text`

// //nếu không dùng TS thì sẽ làm thông thường như sau :
// // let c1 = 'string text ' + a + ' string text'

// console.log(c);
// // console.log(c1);


// BAI 5 : ES6 Class và con trỏ this
// Trước khi ES6 không có class thường phải dùng constructor function để tạo ra những function mà có thể sử dụng new để tạo ra 1 obj 


// 5.1 cách thông thường
// function Cat (name, color, type){
//     this.name = name
//     this.color = color
//     this.type = type
// }

// //thêm method 
// Cat.prototype.meow = function () {
//     console.log(`${this.name} meows: meows meows !` );
// }

// // khởi tạo 1 instance obj
// let alex = new Cat('Alex', 'Yellow', 'Bengal')

// alex.meow()


//hoặc đưa method prototype vào trong  contructor luôn

// function Cat (name, color, type){
//     this.name = name
//     this.color = color
//     this.type = type

//     this.meow = function(){
//         console.log(`${this.name} meows: meows meows !`);
//     }
// }

// let alex = new Cat('Alex', 'Yellow', 'Bengal')

// alex.meow()

// 5.2 Class (giúp gom các thuộc tính và phương thức lại , giúp code nhìn clean hơn)

// class Cat {

//     //Tạo các thuộc tính (property)
//     constructor(name, color, type){
//         this.name = name
//         this.color = color
//         this.type = type
//     }

//     //Thêm vào các phương thức (method)
//     meow(){
//         console.log(`${this.name} meows1: meows2 meows3 !`);
//     }
// }

// let alex = new Cat('Alex', 'Yellow', 'Bengal')

// alex.meow()

//5.3 this

// function handle(cb){
//     cb()
// }

// class Cat {

//     //Tạo các thuộc tính (property)
//     constructor(name, color, type){
//         this.name = name
//         this.color = color
//         this.type = type
//     }

//     //Thêm vào các phương thức (method)
//     meow(){
//         console.log(`${this.name} meows1: meows2 meows3 !`);
//     }

//     run(){
//         handle(this.meow)
//     }
// }

// let alex = new Cat('Alex', 'Yellow', 'Bengal')


// // Lỗi vì giá trị của this phụ thuộc vào ngữ cảnh lúc run-time. Lúc này this là undefined
// alex.run()

//=> cách fix 1 dùng bind

// function handle(cb){
//     cb()
// }

// class Cat {

//     //Tạo các thuộc tính (property)
//     constructor(name, color, type){
//         this.name = name
//         this.color = color
//         this.type = type
//         this.meow = this.meow.bind(this)
//     }

//     //Thêm vào các phương thức (method)
//     meow(){
//         console.log(`${this.name} meows1: meows2 meows3 !`);
//     }

//     run(){
//         handle(this.meow)
//     }
// }

// let alex = new Cat('Alex', 'Yellow', 'Bengal')

// alex.run()


//=> cách fix 2 dùng arrow function cho method meow

// function handle(cb){
//     cb()
// }

// class Cat {

//     //Tạo các thuộc tính (property)
//     constructor(name, color, type){
//         this.name = name
//         this.color = color
//         this.type = type
//     }

//     //Thêm vào các phương thức (method)
//     // meow(){
//     //     console.log(`${this.name} meows1: meows2 meows3 !`);
//     // }

//     meow = () => {
//         console.log(`${this.name} meows1: meows2 meows3 !`)
//     }

//     run(){
//         handle(this.meow)
//     }
// }

// let alex = new Cat('Alex', 'Yellow', 'Bengal')

// alex.run()

//cách fix 3 dùng arrow function cho callback lúc truyền vào handle

// function handle(cb){
//     cb()
// }

// class Cat {

//     //Tạo các thuộc tính (property)
//     constructor(name, color, type){
//         this.name = name
//         this.color = color
//         this.type = type
//     }

//     //Thêm vào các phương thức (method)
//     meow(){
//         console.log(`${this.name} meows1: meows2 meows3 !`);
//     }

//     run(){
//         handle(()=>this.meow())
//     }
// }

// let alex = new Cat('Alex', 'Yellow', 'Bengal')

// alex.run()

//BAI 6 : CÁC LOẠI FUNCTION TRONG REACT
//6.1 Callback function (là tham số mà tham số này là 1 function)

// const nums = [1,2,3,4,5]

// const callback = (item, index)=>{
//     console.log(`STT ${index} la ${item}`)
// }

// nums.forEach(callback)

//Currying là 1 function mà return về function

// function findNumber(num) {
//     return function(func){
//         const result = []
//         for(let i=0; i<=num; i++){
//             if(func(i)){
//                 result.push(i);
//             }
//         }
//         return result
//     }
// }


// chuyển code phía trên thành arrow function gọn hơn
// const findNumber = (num) => (func) =>{
//         const result = []
//         for(let i=0; i<=num; i++){
//             if(func(i)){
//                 result.push(i);
//             }
//         }
//         return result
//     }


// //ngoặc đầu tiên(10) chỉ chạy return 1 function phía trong chứ chưa chạy function thứ 2 , nên cần () thứ 2
// //func thứ 2 là func(i) "1 func điều kiện "

// const value = findNumber(10)(number => number % 2 === 0) 
// const value2 = findNumber(10)(number => number % 2 === 1) 


// const newFunc = findNumber(10)
// const value3 = newFunc((number) => number % 2 === 1) 

// console.log(value);
// console.log(value3);

//----------------------------------BAI 7 --------------------------------------------------
//BẤT ĐỒNG BỘ VỚI CALLBACK PROMISE ASYNC AWAIT
//7.1 Callback : (dùng setTimeout)

//chạy bất đồng bộ sau 1 s mới chạy cái setTimeout (chạy sau)
// setTimeout(()=>{
//     console.log('Hello');
// },1000);

// console.log('I am Nhien');

//7.2 chuyển sang promise

// const pFunc = () => new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject('Hello');
//     },0);
// })

// //value chính là cái resolve ở trên 
// const value =
// pFunc().then(value => {
//     console.log(value);
//     return 100
// }).catch(error=>{
//     console.warn(error);
//     return -100;
// }).finally(()=>{
//     console.log('Kết thúc rồi');
// })

// // console.log('value',value);
// value.then((value)=>{
//     console.log(value);
// })

//7.3 Async Await 
/***
 * await chỉ sử dụng được trong 1 async function
 * chỉ sử dụng await vs promise
 */


// const p2 = () => new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject('Hello');
//     },0);
// })

// const handle = async () => {
//     try{
//         const value = await p2() // gọi p2 không chỉ là 1 function thôi , gọi p2() thì mới là 1 promise
//         console.log(value);
//     }catch(error){
//         console.warn(error)
//     } finally{
//         console.log('Finally');
//     }
// }

// handle()

//khi muốn sử dụng await mà không muốn khai báo 1 hàm mới thì dùng hàm ẩn danh

// ;(async () => {
//     try{
//         const value = await p2() // gọi p2 không chỉ là 1 function thôi , gọi p2() thì mới là 1 promise
//         console.log(value);
//     }catch(error){
//         console.warn(error)
//     } finally{
//         console.log('Finally');
//     }
// }) ()

//----------------BAI 8 : ES6 module----------------

// import React, {handle, value as value1} from './react.js';

// const value = 200

// console.log(React);

// handle()

// console.log(value);

// console.log(value1);


//----------------BAI 9 : DOM(Mô hình đối tượng tài liệu----------------
//thay đổi thẻ h1 đầu tiên [0]
// const h1 = document.getElementsByTagName('h1')[0]
// h1.style.color = 'red'

// //tạo thẻ h2 
// const h2 = document.createElement('h2')
// h2.textContent = 'I am Nhien'

// console.log(document.getElementsByTagName('h2')[0]);
// //chèn thẻ h2 tạo ở trên vào thẻ body 
// document.body.appendChild(h2)

// console.log(document.getElementsByTagName('h2')[0]);

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

