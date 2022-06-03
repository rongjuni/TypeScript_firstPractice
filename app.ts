let fname = "Ben";
let mname: string = "Margin";
let lname = "Bryant";

let awake1 = true;
let awake2: boolean = true;

let daysOld = 300003857;

const hobbies = ["hobby1", "hobby2", "hobby3"];
const hobbies2: string[] = ["hobby1", "hobby2", "hobby3"];
const hobbies3: [string, {}] = ["id", {name: "SomeName"}];

const person = {
    name: `${fname} ${lname}`,
    age: daysOld,
};

const addNums = (num1: number, num2: number) => {
    return num1 + num2;
}
addNums(2,2);

const calculateAge = (days:number, second?:number) => {
    return days / 365 + second
}
calculateAge(daysOld, person.age)


// class Person: class {
//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }
// }


//below interface applies here
const person2: IPerson = {
    name: `${fname} ${lname}`,
    age: daysOld,
};


// class differently declares property type
class Person{
    q: string;
    s: number;

    constructor(name:string, age:number){
        this.q = name;
        this.s = age;
    }
}

const person11 = new Person(`${fname} ${lname}`, daysOld)
const person22 = new Person(`${fname} ${lname}`, daysOld)
const person33 = new Person(`${fname} ${lname}`, daysOld)

const people:Array<Person> = [person11, person22, person33]

interface IPerson {
    name: string;
    age: number;
    hobbies?: Array<string> //same as string []. They may have hobbies or not
}


const ageCalculation = (person: IPerson) => {
    return `${person.name} is ${person.age / 365} years old` 
}

ageCalculation({name: "DJSEO", age: 95653215641})


// Example
// const anotherAddNums = (num1:number, num2?:number = 2) => { // question mark doesn't work since 2 is already assigned
const anotherAddNums = (num1:number, num2:number = 2) => {
    return num1 + num2;
}
anotherAddNums(2)



if (daysOld){
    console.log("Alive")
} else{
    console.log("SCREAM")
}



// wrong examples //
// hobbies3[0] = 345; // error since first value should be string

fname = "345";
// awake = 34; //not possible to put different type of value