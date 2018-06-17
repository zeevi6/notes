
function write(arg) {
    document.write(arg + '</br>');
}
function hr() {
    document.write('<hr>');
}
// --------------------------------------------------------------------------
var myName: String = 'Hong';
var myAge: number = 28;
var canVote: boolean = true;
var anything: any = 'cat';
anything = 5;
document.getElementById('tsStuff').innerHTML = 'my name is ' + myName;
write('canVote is a ' + typeof (canVote));
write('myName is a ' + typeof (myName));
write('anything is a ' + typeof (anything));
var strToNum = parseInt('5');
var numToStr = 5;
write('numToStr is a ' + typeof (numToStr.toString()));
var PI = 3.14159;
hr();
// --------------------------------------------------------------------------
interface SuperHero {
    realName: String;
    superName: String;
}
var superman: SuperHero = {
    realName: 'Clark Kent',
    superName: 'Superman'
};
write(superman.realName + ' is ' + superman.superName);
hr();
// --------------------------------------------------------------------------
var employees: String[] = ['Bob', 'Sally', 'Sam'];
// employees.push(5);  
// tstest.ts(40,16): error TS2345: Argument of type '5' is not assignable 
// to parameter of type 'string'.
write(employees.toString());
hr();
// --------------------------------------------------------------------------
var superheroes: SuperHero[] = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
write(superheroes[0].realName + ' is ' + superheroes[0].superName);
hr();
// --------------------------------------------------------------------------
write('5 + 4 = ' + (5 + 4));
write('5 - 4 = ' + (5 - 4));
write('5 * 4 = ' + (5 * 4));
write('5 / 4 = ' + (5 / 4));
write('5 % 4 = ' + (5 % 4));
write('5 + String 2 = ' + (5 + '2'));
hr();
// --------------------------------------------------------------------------
var randNum: number = 1;
write('randNum++ = ' + randNum++);
write('++randNum = ' + ++randNum);
write('randNum-- = ' + randNum--);
write('--randNum = ' + --randNum);
hr();
// --------------------------------------------------------------------------
var sampVar = 123;
let sampLet = 123;
if(true) {
    let sampLet = 456;
    var sampVar = 456;
}
write('sampLet: ' + sampLet);
write('sampVar: ' + sampVar);
hr();
// --------------------------------------------------------------------------
var randArr = [5,6,7,8];
for(var val in randArr) {
    write('[for in] ' + val);
}
var strArr = randArr.map(String);
for(var val of strArr) {
    write('[for of] ' + val);
}
hr();
// --------------------------------------------------------------------------
var getSum = function (num1: number, num2: number) {
    return num1 + num2;
}
var sum1: number = getSum(5, 2);
write('5 + 2 = ' + sum1);
var getDiff = function (num1: number, num2 = 2, num3?: number): number {
    if(typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
}
write('5 - 2 = ' + getDiff(5));
write('5 - 2 - 3 = ' + getDiff(5, 2, 3));
var sumAll = function (...nums: number[]): void {
    var sum = nums.reduce((a, b) => a + b, 0);
    write('sum: ' + sum);
}
sumAll(1, 2, 3, 4, 5);
var addOne = (x) => x + 1; 
write('1 + 1 = ' + addOne(1));
hr();
// --------------------------------------------------------------------------
class Animal {
    public favFood: string;
    static numOfAnimals: number = 0;
    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }
    ownerInfo() {
        write(this.name + ' is owned by ' + this.owner);
    }
    static howManyAnimals(): number {
        return Animal.numOfAnimals;
    }
    private _weight: number;
    get weight(): number {
        return this._weight;
    }
    set weight (weight: number) {
        this._weight = weight;
    }
}
var spot = new Animal('Spot', 'Doug');
spot.ownerInfo();
spot.weight = 100;
write('Spot\'s weight is ' + spot.weight);
write('# of Animals: ' + Animal.howManyAnimals());
hr();
// --------------------------------------------------------------------------
class Dog extends Animal {
    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}
var grover = new Dog('Grover', 'Jimmy');
write('# of Animals: ' + Animal.howManyAnimals());
write('Is a Dog an Animal: ' + (grover instanceof Animal));
write('Does grover have a name: ' + ('name' in grover));
hr();
// --------------------------------------------------------------------------
interface Vehicle {
    drive(): any;
}
class Car implements Vehicle {
    constructor(private wheels: number) {}
    drive(): void {
        write('the car drives with ' + this.wheels + ' wheels');
    }
}
class Bicycle implements Vehicle {
    constructor(private wheels: number) {}
    drive(): void {
        write('the bicycle drives with ' + this.wheels + ' wheels');
    }
}
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
hr();
// --------------------------------------------------------------------------
function GetType<T>(val: T): string {
    return typeof(val);
}
var aStr = 'A string';
var aNum = 10;
write(GetType(aStr));
write(GetType(aNum));
function GetWheels<w extends Vehicle>(veh: w): number {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
hr();
// --------------------------------------------------------------------------
class GenericNumber<T> {
    add: (val1: T, val2: T) => T;
}
var aNumber = new GenericNumber<number>();
aNumber.add = function (x, y) { return x + y; }
write('5 + 4 = ' + aNumber.add(5, 4));
var aString = new GenericNumber<string>();
aString.add = function (x, y) { return String(Number(x) + Number(y)); }
write('5 + 6 = ' + aString.add('5', '6'));
hr();
// --------------------------------------------------------------------------
var randVals = {x: 1, y: 2, z: 3};
var {x, y, z} = randVals;
write(x + y + z);
[x, y, z] = [z, y, x];
write('switch: ' + x + y + z);
hr();
// --------------------------------------------------------------------------
var multStr = `I go on for.. many lines</br>`;
 write(multStr);
 write(`<b>${multStr}</b>`);
 hr();
 // --------------------------------------------------------------------------
 function theSum(x, y, z): void {
     write('sum: ' + (x + y + z));
 }
 var args = [4, 5, 6];
 theSum(...args);
 hr();
 // --------------------------------------------------------------------------
 enum Emotion {
     Happy = 1,
     Sad,
     Angry
 }
 var myFeeling = Emotion.Happy;
 myFeeling = 1;
