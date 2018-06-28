
function write(arg) {
    document.write(arg + '</br>');
}
function hr() {
    document.write('<hr>');
}
// --------------------------------------------------------------------------

var customer = {
    name: 'Tom Smith',
    speak: function () {
        return 'my name is ' + this.name;
    },
    address: {
        street: '123 Main st',
        city: 'Pittsburg',
        state: 'PA'
    }
};
write(customer.speak());
write(customer.name + ' lives at ' + customer.address.street);
customer.address.country = 'US';
write(customer.address.country);

function Person(name, street) {
    this.name = name;
    this.street = street;
    this.info = function () {
        return 'my name is ' + this.name + ' and I live on ' + this.street;
    }
}

var bobSmith = new Person('Bob Smith', '234 Main st');
write(bobSmith.info());
write('bob is a Person ' + (bobSmith instanceof Person));

function changeName(person) {
    person.name = 'Sue Smith';
}
changeName(bobSmith);
write('Bob became ' + bobSmith.name);

var person1 = new Person('Paul', '123 Main');
var person2 = new Person('Paul', '123 Main');

write('Are they equal ' + (person1 === person2));

// --------------------------------------------------------------------------
function getSum(num1, num2) {
    return num1 + num2;
}
write('num of args ' + getSum.length);

function Mammal(name) {
    this.name = name;
    this.getInfo = function() {
        return 'the mammals name is '+ this.name;
    }
}

Mammal.prototype.sound = 'Grrrr';
Mammal.prototype.makeSound = function() {
    return this.name + ' says ' + this.sound;
}

var grover = new Mammal('grover');
write(grover.makeSound());

for(var prop in grover) {
    write(prop + ' : ' + grover[prop]);
}

write('name property of grover : ' + grover.hasOwnProperty('name'));
write('sound property of grover : ' + grover.hasOwnProperty('sound'));

Array.prototype.inArray = function inArray(value) {
    for(i = 0; i < this.length; i++) {
        if(this[i] === value) {
            return true;
        }
    }
    return false;
}

var sampArray = [1,2,3,4,5];
write('3 in array ' + sampArray.inArray(3));

// --------------------------------------------------------------------------

function SecretCode() {
    var secretNum = 76;
    this.guessNum = function(num) {
        if(num > 76) {
            return 'lower';
        } else if(num < 76) {
            return 'higher';
        } else {
            return 'you guessed it!';
        }
    }
}

var secret = new SecretCode();

write('value of secretNum : ' + secret.secretNum);
write('is 70 th number ? ' + secret.guessNum(70));
SecretCode.prototype.getSecret = function() {
    return this.secretNum;
}
write('the secret number is ' + secret.getSecret());
// --------------------------------------------------------------------------
var address = {
    street: 'no street',
    city: 'no city',
    state: 'no state',
    get getAddress() {
        return this.state + ', ' + this.city + ', ' + this.state;
    },
    set setAddress(theAddress) {
        var parts = theAddress.toString().split(', ');
        this.street = parts[0] || '';
        this.city = parts[1] || '';
        this.state = parts[2] || '';
    }
}

address.setAddress = '123 main st, Pittsburg, PA';
write('address : ' + address.getAddress);
write('city : ' + address.city);
// --------------------------------------------------------------------------
function Coords() {
    this.latitude = 0;
    this.longitude = 0;
}
Object.__defineGetter__.call(Coords.prototype, 'getCoords', function() {
    return 'lat : ' + this.latitude + ' long : ' + this.longitude;
});
Object.__defineSetter__.call(Coords.prototype, 'setCoords', function(coords) {
    var parts = coords.toString().split(', ');
    this.latitude = parts[0] || '';
    this.longitude = parts[1] || '';
});
var testCoords = new Coords();
testCoords.setCoords = "40.16, 73.02";
write("coords : " + testCoords.getCoords);
// --------------------------------------------------------------------------
function Point() {
    this.xPos = 0;
    this.yPos = 0;
}
Object.defineProperty(Point.prototype, 'pointPos', {
    get: function() {
        return 'x: ' + this.xPos + ' y: ' + this.yPos;
    },
    set: function(thePoint) {
        var parts = thePoint.toString().split(', ');
        this.latitude = parts[0] || '';
        this.longitude = parts[1] || '';
    }
});
var aPoint = new Point();
aPoint.pointPos = "100, 200";
write('point position : ' + aPoint.pointPos);
// --------------------------------------------------------------------------
var Circle = function(radius) {
    this._radius = radius;
}
Circle.prototype = {
    set radius(radius) { this._radius = radius; },
    get radius() { return this._radius; },
    get area() { return Math.PI * (this._radius * this._radius); }
};
var circ = new Circle(10);
circ.radius = 15;
write('a circle with radius ' + circ.radius + ' has an area of ' + circ.area.toFixed(2));
// --------------------------------------------------------------------------
function Animal() {
    this.name = 'animal';
    this.toString = function() {
        return 'my name is ' + this.name;
    };
}
function Canine() {
    this.name = 'canine';
}
function Wolf() {
    this.name = 'wolf';
}
Canine.prototype = new Animal();
Wolf.prototype = new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();
write(arcticWolf.toString());
write('wolf instance of animal : ' + (arcticWolf instanceof Animal));

Animal.prototype.sound = 'Grrrr';
Animal.getSound = function() {
    return this.name + ' says ' + this.sound;
}
Canine.prototype.sound = 'Woof';
Wolf.prototype.sound = 'Grrrr Woof';

write(arcticWolf.getSound());

function Rodent() {
    this.name = 'Rodent';
}
function Rat() {
    this.name = 'rat';
}
Rodent.prototype = new Animal();
Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();
write(caneRat.toString());
// --------------------------------------------------------------------------

function extend(Child, Parent) {
    var Temp = function() {};
    Temp.prototype = Parent.prototype;
    Child.prototype = new Temp();
    Child.prototype.constructor = Child;
}

function Deer() {
    this.name = 'deer';
    this.sound = 'Snort';
}
extend(Deer, Animal);
var elk = new Deer();
write(elk.getSound());