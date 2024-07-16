/**
 * Basic type
 */

import { value } from "./react"

//string
let car = "Toyota"
let bike: string
bike = "Winner"
//bike = 150 // lỗi do không thể gán kiểu dữ liệu số cho string được

// number
let num: number = 10 // vừa khai báo biến num và kiểu là number .
let num1 = 10 //không cần khai báo kiểu number tự hiểu được

//boolean
let isLoading: boolean = false //khai báo rõ ràng cả kiểu
let isLoading1 = false // không khai báo kiểu

// undefined
// let body:undefined = undefined
// let body1 = undefined

//null
let footer: null

// any => chả khác gì js , kiểu gì cũng đúng
// let person : any

// person = 10
// person = 'Something'
// person = false


/**
 * Object
 */

// let house = {}
// house.address = 'TPHCM'


let house : {
    address: string
    color?: string
} = {
    address: '',
    // color: ''
}

//Lỗi biến house được sử dụng trước khi assigned => do khai báo 1 biến , mà chưa có giá trị khởi tạo
house.address = 'SG'

//hoặc cách này :

// let house1 : {
//     address: string
// } | undefined

// if(house1){
//     house.address = 'NA'
// }

/**
 * Array
 */

function handleError() {
    throw new Error('Loi Roi')
}

let products: any[] = []
products.push(1)
products.push('NHIEN')

// string[]
let names = ['Alex', 'Ben']
let addresses: string[] = []
addresses.push('TPVINH')

//number[]
let numbers: number[] = []
numbers  = [1,2,3]

// object array
let people: {
    name: string
    age: number

}[] = []

people.push({
    name: 'Nhien',
    age:29
})

/**
 * Function
 */

const sum = (num1: number, num2: number): number => {
    return num1 + num2
}

sum (1, 2)

const sub: (num1: number, num2: number) => number =(num1: number, num2: number) => num1 - num2

const handle = ():void => {
    console.log(123);
}



/**
 * Union
 * kết hợp nhiều thằng với nhau
 */

let price: string | number | boolean
price = '10'
price = 20
price = true

let body: {name: string | number} | {firstName: string} = {
    name: 100
}


/**
 * Enum
 */

enum Sizes {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}

let size = Sizes.S

/**
 * Interface
 */

// interface State {
//     name: string
//     isLoading: boolean
// }

// interface State {
//     age: number
// }

// let state: State ={
//     name: 'Nhien',
//     isLoading: false,
//     age: 29
// }


// interface Name  {
//     name: string
// }

// interface Age  {
//     age: Number
// }

// interface Person = Name & Age //interface không làm được như type

/**
 * Type khá tương đồng vs interface
 */

// type State = {
//     name: string
//     isLoading: boolean
// }

// // type State ={ //sẽ báo lỗi không thể merge
// //     age: number
// // }

// let state: State ={
//     name: 'Nhien',
//     isLoading: false
// }

// type Name = {
//     name: string
// }

// type Age = {
//     age: Number
// }

// type Person = Name & Age //type có thể gộp , union
// type Person1 = Name | Age

/**
 * Generics types (giống với any nhưng rõ ràng hơn)
 */

const handleClick = <Type>(value: Type) => value


let value = 100
handleClick<string>('100')

/**
 * Class
 */


class Person2 {
    private name: string
    age: number
    readonly money: number = 40//chỉ được đọc không được ghi
    
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    handle(){
        this.name=''
    }
}

const alex = new Person2('Alex',27)

// alex.name
// alex.money = 100

//short hand
class Person3 {
    constructor(public name:string, public age:number){}
}






