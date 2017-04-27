# this keyword

### Implicit Binding

호출하는 시점에 dot (‘.’) 의 왼쪽에 있는것이 this의 context.

```javascript
var me = {
	name: 'sam',
	age: 25,
	sayName: function() {
		console.log(this.name);
	}
}

me.sayName();
```

```javascript
var sayNameMixin = function(obj) {
	obj.sayName = function() {
		console.log(this.name);
	};
};

var me = {
	name: 'sam',
	age: 25
}
var you = {
	name: 'dean',
	age: 30
}
sayNameMixin(me);		// sam
sayNameMixin(you);	// dean
```

```javascript
var Person = function(name, age) {
	return {
		name: name,
		age: age,
		sayName: function() {
			console.log(this.name);
		},
		mother: {
			name: 'stacey',
			sayName: function() {
				console.log(this.name);
			}
		}
	};
};

var jim = Person('jim', 42);
jim.sayName();			// jim
jim.mother.sayName();		// stacy
```

- - - -

### Explicit Binding

“Call, apply, bind”

#### 1. call

```javascript
var sayName = function() {
	console.log('my name is ', + this.name);
}

var jeff = {
	name: 'jeff',
	age: 29
};

sayName.call(jeff);
```

sayName 을 jeff 의 context로 explicitly call 한다.  sayName을 call 하면 function내부의 코드를 곧바로 실행한다.

#### 2. apply

```javascript
var sayName = function(lang1, lang2, lang3) {
	console.log('my name is ', + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
}

var jeff = {
	name: 'jeff',
	age: 29
};

var languages = ['java', 'ruby', 'python'];

// sayName.call(jeff, language[0], language[1], language[2]);
sayName.apply(jeff, language);
```

function에 array를 pass하고싶을때 apply 사용한다. array item을 call로 전부 pass 해도 결과는 같다.

#### 3. bind

```javascript
var sayName = function(lang1, lang2, lang3) {
	console.log('my name is ', + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
}

var jeff = {
	name: 'jeff',
	age: 29
};

var languages = ['java', 'ruby', 'python'];

var newFunc = sayName.bind(jeff, language[0], language[1], language[2]);
console.log('here');
newFunc();
```

bind는 call과 거의 같지만,  call의 예제처럼 기존 sayName을 실행하는 것이 아니라 새로운 function을 return 한다. 그렇기때문에 bind로 return 받은 function을 새로 선언한 변수에 할당해놓고 나중에 사용할 수 있다. 

- - - -

### new Binding

```javascript
// constructor function
// capitalize first character(usually)
var Animal = function(color, name, type) {
	this.color = color;
	this.name = name;
	this.type = type;
};

var zebra = new Animal('black and white', 'zebra', 'zebra');
```

new 키워드로 function을 실행하면 그 function 내부의 this는 새로운 object를 생성하고 여기에 bound 된다.

- - - -

### window Binding

```javascript
var sayAge = function() {
	console.log(this.age);
};
var me = {
	age: 25
};
sayAge();				// undefined
window.age = 35;
sayAge();				// 35
```

this 키워드를 가지는  function을 호출할 때 1) 왼쪽에 dot이 없고, 2) new binding을 사용하는것도 아니고,  3) call_apply_bind도 사용하는게 아니면, window object에 bound 된다. 그래서 첫번째 sayAge();는 this.age가 없는 상태였고 두번째 sayAge();는 window.age를 출력하였다.  (*권장하지않는 방법!!!)
