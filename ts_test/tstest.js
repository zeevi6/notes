var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
function write(arg) {
    document.write(arg + '</br>');
}
function hr() {
    document.write('<hr>');
}
// --------------------------------------------------------------------------
var myName = 'Hong';
var myAge = 28;
var canVote = true;
var anything = 'cat';
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
var superman = {
    realName: 'Clark Kent',
    superName: 'Superman'
};
write(superman.realName + ' is ' + superman.superName);
hr();
// --------------------------------------------------------------------------
var employees = ['Bob', 'Sally', 'Sam'];
// employees.push(5);  
// tstest.ts(40,16): error TS2345: Argument of type '5' is not assignable 
// to parameter of type 'string'.
write(employees.toString());
hr();
// --------------------------------------------------------------------------
var superheroes = [];
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
var randNum = 1;
write('randNum++ = ' + randNum++);
write('++randNum = ' + ++randNum);
write('randNum-- = ' + randNum--);
write('--randNum = ' + --randNum);
hr();
// --------------------------------------------------------------------------
var sampVar = 123;
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
    var sampVar = 456;
}
write('sampLet: ' + sampLet);
write('sampVar: ' + sampVar);
hr();
// --------------------------------------------------------------------------
var randArr = [5, 6, 7, 8];
for (var val in randArr) {
    write('[for in] ' + val);
}
var strArr = randArr.map(String);
for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
    var val = strArr_1[_i];
    write('[for of] ' + val);
}
hr();
// --------------------------------------------------------------------------
var getSum = function (num1, num2) {
    return num1 + num2;
};
var sum1 = getSum(5, 2);
write('5 + 2 = ' + sum1);
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
write('5 - 2 = ' + getDiff(5));
write('5 - 2 - 3 = ' + getDiff(5, 2, 3));
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    write('sum: ' + sum);
};
sumAll(1, 2, 3, 4, 5);
var addOne = function (x) { return x + 1; };
write('1 + 1 = ' + addOne(1));
hr();
// --------------------------------------------------------------------------
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        write(this.name + ' is owned by ' + this.owner);
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var spot = new Animal('Spot', 'Doug');
spot.ownerInfo();
spot.weight = 100;
write('Spot\'s weight is ' + spot.weight);
write('# of Animals: ' + Animal.howManyAnimals());
hr();
// --------------------------------------------------------------------------
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog('Grover', 'Jimmy');
write('# of Animals: ' + Animal.howManyAnimals());
write('Is a Dog an Animal: ' + (grover instanceof Animal));
write('Does grover have a name: ' + ('name' in grover));
hr();
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        write('the car drives with ' + this.wheels + ' wheels');
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        write('the bicycle drives with ' + this.wheels + ' wheels');
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
hr();
// --------------------------------------------------------------------------
function GetType(val) {
    return typeof (val);
}
var aStr = 'A string';
var aNum = 10;
write(GetType(aStr));
write(GetType(aNum));
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
hr();
// --------------------------------------------------------------------------
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
write('5 + 4 = ' + aNumber.add(5, 4));
var aString = new GenericNumber();
aString.add = function (x, y) { return String(Number(x) + Number(y)); };
write('5 + 6 = ' + aString.add('5', '6'));
hr();
// --------------------------------------------------------------------------
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
write(x + y + z);
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
write('switch: ' + x + y + z);
hr();
// --------------------------------------------------------------------------
var multStr = "I go on for.. many lines</br>";
write(multStr);
write("<b>" + multStr + "</b>");
hr();
// --------------------------------------------------------------------------
function theSum(x, y, z) {
    write('sum: ' + (x + y + z));
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
hr();
// --------------------------------------------------------------------------
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Happy;
myFeeling = 1;
