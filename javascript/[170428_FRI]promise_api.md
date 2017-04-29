# PROMISE API


 Promise는 ‘언젠가 사용 가능해질 값의 프록시’라고 정의할 수 있다. (프록시? 프로퍼티 lookup, 할당, enumeration, 함수 실행 등의 기본적인 동작에 대한 커스터마이징). Synchronous, asynchronous 두 가지 경우 모두에 사용 가능하다. 주로 asynchronous 작업에 더 적절하다.
 대표적인 asynchronous API인 XMLHttpRequest API는 async하지만, Promise API를 사용하지는 않는다. Promise API를 쓰는(결과값으로 Promise를  return하는) native API들은 다음과 같다.

[Battery Status API - Web APIs | MDN](https://developer.mozilla.org/en/docs/Web/API/Battery_Status_API) 

[Fetch API - Web APIs | MDN](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)

[Service Worker API - Web APIs | MDN](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API)


- - - -

### 사용방법

 new Promise()는 setTimeout 이나 XMLHttpRequest 같은 async 작업을 할 때에만 사용해야한다! resolve, reject의 호출 타이밍은 개발자의 의도에 따라 달라진다.

#### (XMLHttpRequest 예제)

```javascript
function get(url) {
	return new Promise(function(resolve, reject) {
		var req = new XMLHttpRequest();
		req.open('GET', url);

		req.onload = function() {
			if(req.status === 200) {
				resolve(req.response);
			} else {
				reject(Error(req.statusText));
			}
		};
		req.onerror = function() {
			reject(Error('network error'));
		};
		req.send();
	});
}

// Use it!
get('story.json').then(function(response) {
	console.log("Success!", response);
}, function(error) {
	console.error("Failed!", error);
});
```

(* 그런데 new 없이 Promise를 return할 수도 있다)

```javascript
var userCache = {};
function getUserDetail(username) {
	if(userCache[username]) {
		return Promise.resolve(userCache[username]);
	}
	return fetch('users/'+username+'.json')
	.then(function(result) {
		userCache[username] = result;
		return result;
	})
	.catch(function() {
		throw new Error('user not found - ' + username);
	});
}
```

- - - -

### then

 Promise 인스턴스에는 항상 callback 함수인 then 메서드가 따라온다. 첫번째 then은 resolve() 의 결과를 전달받는다. then은 chaining이 가능한데, 첫번째 이후의 then들은 이전 then의 return value를 전달받는다. 만약, promise 의 resolve를 완료한 상태에서 then을 다시 호출하면 callback을 곧바로 실행한다. Reject인 경우에는 아무 작업도 하지 않는다(callback을 호출하지않는다).

```javascript
new Promise(function(resolve, reject) {
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) {
	console.log('first then: ', num);
	return num * 2; 
})
.then(function(num) {
	console.log('last then: ', num);
});
```

- - - -

### catch

 Promise가 reject 되었을 때 catch callback이 실행된다. Reject에는 주로 Error가 담겨져 온다. ex) reject(Error(‘error was found’)); 

```javascript
new Promise(function(resolve, reject) {
	setTimeout(function() { reject('done!'); }, 3000);
})
.then(function(e) { 
	console.log('done', e);
})
.catch(function(e) {
	console.log('catch: ', e);
});
```

- - - -

### Promise.all

 Promise object array를 받아서 모든 promise를 resolve한 이후에 callback을 실행한다. 대표적인 사용 예로, 동시에 여러개의 ajax 요청(fetch)을 하는 경우에 자주 쓰인다. Promise가 reject를 하는 경우에 catch내부의 작업을 수행한다.

```javascript
// var req1 = fetch('/user.json');
// var req2 = fetch('/articles.json');

var req1 = new Promise(function(resolve, reject) { 
	setTimeout(function() { resolve('First!'); }, 4000);
});
var req2 = new Promise(function(resolve, reject) { 
	setTimeout(function() { reject('Second!'); }, 3000);
});

Promise.all([req1, req2]).then(function(results) {
	// req1, req2 모두 resolved
	console.log('Then: ', results);
})
.catch(function(error) {
	// req1, req2 중 어느 하나라도 rejected
	console.log('Catch: ', error);
}
```


- - - -

### Promise.race

 Promise.all 과 같이 promise object array를 인자로 받지만, array에서 어떤 하나의 promise가 resolve, reject 중 어느것이라도 했을 경우에 실행된다. primary/secondary source를 불러오는 경우에 Promise.race를 사용할 수 있다. (?? 무엇?)

```javascript
var req1 = new Promise(function(resolve, reject) { 
	setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) { 
	setTimeout(function() { reject('Second!'); }, 3000);
});

Promise.race([req1, req2]).then(function(one) {
	console.log('Then: ', one);
})
.catch(function(one, two) {
	console.log('Catch: ', one);
}
```

