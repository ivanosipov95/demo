/*----------------------------------------------------------------------------------------------------------------------
Variables and Types
* number
* string
* boolean
* any
*/

/*
let variable is mutable (can be changed after initialization)
 */
let letVariable: number = 5;
letVariable = 10;

/*
const variable is immutable (can not be changed after initialization)
 */
const constVariable: number = 5;
// constVariable = 10; // uncomment to see the error

const integerValue: number = 40;
const floatValue: number = 40.21;
const stringValueInSingleQuotes: string = 'string'; // better to use this variant
const stringValueInDoubleQuotes: string = "string";
const booleanValue: boolean = true;

let anyValue; // by default variable will have any type. It means you can assign any values here (number, string and etc.)
anyValue = 5;
anyValue = 'string';

/*----------------------------------------------------------------------------------------------------------------------
Operators
=
+
-
/
%
*
===
* */
const calculationResult: number = 1 + 2 - 3 * (4 / 2 + 10 % 3); // any math operators

/*
if you want to check that one variable equal another use strict equal ===
 */
const a: any = 5;
const b: any = '5';

// console.log(a === b); // should be false cause first we check type. Type is different. So it means we cannot equal them (Preferable way)
// console.log(a == b); // should be true cause we don't take into account types. We just compare values.

/*----------------------------------------------------------------------------------------------------------------------
If else statements
 */

const isInsuranceСase: boolean = true;
const cost: number = 500;

if (isInsuranceСase && cost === 500) {
    console.log('if case');
} else if ((cost > 500 || cost < 700)) {
    console.log('else if case');
} else {
    console.log('else case');
}

/*----------------------------------------------------------------------------------------------------------------------
Loops
*/

for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}

let test: number = 0;
while (test < 10) {
    console.log(test);
    test = test + 1;
}

do {
    test -= 1; // the same as test = test - 1
} while (test > 0);

/*----------------------------------------------------------------------------------------------------------------------
Functions
*/

// simple functions

function sum(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
};

function voidFunction(): void {
    console.log(`this function doesn't return anything`);
}

const sumResult: number = sum(5, 5); // res = 10
const multiplyResult: number = sum(5, 5); // res = 25
voidFunction();

// you can also create utility functions and put them in different file and then use export/import to reuse them
import {doMultiply, doSum} from "./utilities";

const doSumResult = doSum(4, 4);
const doMultiplyResult = doMultiply(4, 4);


// Example with primitive values. They are passed by value. It means that in function you change the copied value but not the origin value
let n1: number = 5;
let n2: number = 15;

const changePrimitiveValues = (n1: number, n2: number): void => { // local values of n1, n2 will be copied
    n1 = 20;
    n2 = 30;

    console.log(n1); // the copied value was changed to 20
    console.log(n2); // the copied value was changed to 30
};

changePrimitiveValues(n1, n2);

console.log(n1); // will be the same 5
console.log(n2); // will be the same 15


// Example with complex values like Array. They are passed by reference. It means that in function you change the origin value always
let arrayOfNumbers: number[] = [1, 2, 3];

const changeComplexValues = (array: number[]): void => {
    array.push(50); // add new value to existing array
};

console.log('array before function', arrayOfNumbers); // will be 1,2,3
changeComplexValues(arrayOfNumbers);
console.log('array after function', arrayOfNumbers); // will be 1,2,3,50

// How to fill array
const someArray: number[] = [];

for (let i = 0; i < 100; i++) {
    someArray.push(i)
}

console.log(someArray); // 0,1,2,3,....,99


/*----------------------------------------------------------------------------------------------------------------------
Custom types: class, type
object - {}
 */

class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public hi(): void {
        console.log(this.getGreetingMessage());
    }

    private getGreetingMessage(): string {
        return 'Hi, my name is ' + this.name;
    }
}

const ivan: Person = new Person('Ivan');
const  rouven: Person = new Person('Rouven');

console.log(ivan);
console.log(rouven);

const name = ivan.name;
ivan.hi();
// ivan.getGreetingMessage() // is not possible. You can access only public properties and methods

class Animal {
    private name: string; // by default all properties and methods are public and you can skip public word

    constructor(name: string) {
        if (name === '') {
            throw Error(`name shouldn't be empty`);
        }
        this.name = name;
    }

    eat(): void {
        console.log('Start eating');
        console.log('Who eat: ', this.whoEat());
        console.log('End eating');
    }

    setName(newName: string): void {
        if (newName === '') {
            throw Error(`name shouldn't be empty`);
        }

        this.name = newName;
    }

    // protected is used if you want to customize something in child classes: here each animal change the method whoEat because it always different for each animal
    protected whoEat(): string {
        return 'Animal';
    }
}

class Cat extends Animal {
    protected whoEat(): string {
        return 'Cat';
    }
}

class Bird extends Animal {
    fly(): void {
    }

    protected whoEat(): string {
        return 'Bird';
    }
}

const bird: Bird = new Bird('bird');
const cat: Cat = new Cat('cat');

/*
public. It means you can access to it
cat.eat()
cat.setName('newName')

protected. You cannot access to it.
cat.whoEat()

private. You cannot access to it.
cat.name
 */

const arrayOfAnimals = [bird, cat];

type MySpecialNumberType = 1 | 2;
let specialNumber: MySpecialNumberType = 1; //you can assign only 1 or 2, in other case you will see error (for example 3, 4 - cannot be assigned)
