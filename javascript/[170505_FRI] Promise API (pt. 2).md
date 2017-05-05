# Promise API (pt. 2)


### events aren’t always the best way

```javascript
img1.callThisIfLoadedOrWhenLoaded(function() {
	// 로드 완료 했거나 혹은 완료 후에 여기 해라
}).orIfFailedCallThis(function() {
  // 실패했으면 여기로..
});

// 그리고
whenAllTheseHaveLoaded([img1, img2]).callThis(function() {
  // img1, img2 둘 다 로드완료하면 여기 해라
}).orIfSomeFailedCallThis(function() {
  // 뭐라도 실패했으면 여기로..
});
```

이런 맥락으로 함수명을 더 깔끔하게 지어놓은 것이 Promise다. 위의 코드를 Promise를 사용하도록 바꿔보면 이렇다.

```javascript
img1.ready().then(function() {
	// 로드 완료 했거나 혹은 완료 후에 여기 해라
}, function() {
  // 실패했으면 여기로..
});

// 그리고
Promise.all([img1.ready(), img2.ready()]).then(function() {
  // img1, img2 둘 다 로드완료하면 여기 해라
}, function() {
  // 뭐라도 실패했으면 여기로..
});
```


### Promise의 기본

* Promise는 딱 한번만 성공하거나 실패한다. 성공/실패가 한번 결정되면 성공>실패 혹은 실패>성공으로 바뀔 수 없다.
* 성공이나 실패 결정 후 나중에 callback을 추가했을 때, 이벤트가 먼저 발생했더라도 callback이 정상적으로 호출된다.  (‘언제’가 별로 중요하지 않을 때 유용하다)


### 4가지 상태

* fulfilled - promise 성공함
* rejected - promise 실패함
* pending - fulfilled / rejected 아직 결정 전
* settled - fulfilled / rejected 중에 뭐든 했음

> promise는 값을 기다리는 ‘pending’ 상태이거나, 값을 가진 ‘resolved’ 상태일 수 있다. promise가 값을 가진 ‘resolved’ 가 되면, 또 다시 resolve를 하지 못하고 계속 그 값을 가지고있는다.  


### resolve() & then()

caller는 then을 언제나 호출할 수 있고, callee는 resolve를 언제나 호출할 수 있다. 이것은 state flag가 있기 때문이다. then(), resolve()는 상황에 따라 아래와 같은 작업을 수행한다.

* callee가 resolve()를 호출하기 전에 caller가 then() 호출: value가 아직 없으므로 pending상태가 되고, caller의 callback은 멈춰있을 것이다. resolve()를 호출하고나면, 그 다음으로 callback을 실행하여 value를 전달할것이다.
* caller가 then()을 호출하기 전에 callee가 resolve() 호출: value 에 머무른다. then()이 호출되면, 이 값을 전달할 준비가 되어있다.

> 그래서 then()과 resolve()를 목적에 맞게 아무때나 부를 수 있다.  