# 코드스쿼드 블루 체크리스트



### [01] 자바스크립트 scope를 var키워드를 기준으로 설명할수 있다.

```
global / function scope
```


### [02] closure 는 언제 형성되는지? 경험한 코드가 있으면 코드로 보여주기.

```
이미 실행 된 외부함수가 있는데 이 함수의 내부함수에서 외부함수를 참조할 때 발생하는 스코프.
```


### [03] const는 언제 사용해야 하는지?

```
선언 후 재정의, 재할당을 하지 않는 변수.
```


### [04] mvc방식으로 개발한 사례가 있다면 본인이 느끼는 장단점을 설명하기.

```
장점: 코드를 목적이나 역할에 따라 파일/함수 단위로 분리할 수 있어, 디버깅 시 문제가 발생한 부분을 파악하기에 좋다.
단점: 파일/함수간에 파라미터 전달이 많아진다. (수정할때 여러군데를 확인해야함)
```


### [05] 크롬개발자도구에서 js디버깅을 하는 방식을 설명해보기. 

```
개발자도구의 Sources 탭에서 js 파일을 선택하여 디버깅 하고자하는 라인 번호를 클릭하여 중단점을 추가/삭제할 수 있다. 
혹은 js 파일에 'debugger;' 키워드를 추가하면 이 코드를 실행하는 순간 개발자도구가 실행되고 중단점을 보여준다.
중단점에 머물러있는동안 Console에서 파일에 없는 코드를 실행해볼 수 있다.
```


### [08] 배열에서 제공하는 메서드 중에 filter와 map의 활용경험은? 

```
React 컴포넌트 내부의 <li>와 같은 반복적인 element tag를 생성할 때 filter, map을 활용했다.
JSON object에서 특정 key의 value에 조건을 적용해 일부만 사용하고자 할 때 filter를 활용했고
object 전체를 사용하는 경우에는 map을 활용했다.
```


### [14] 전역변수를 없앨 수 있는 방법들은 무엇인가? 

```
변수를 closure 내부에 선언한다. 즉시실행함수로 wrap하는 것이 한가지 방법이다. 
다른 방법은 변수를 function의 property로 선언하는것이다.
이런 경우 해당 변수를 function 내부에서만 사용할 수 있게 된다.
```


### [17] 문제가 있을때 본인이 가장 자주 사용하는 디버깅 과정은 무엇인가? 

```
에러메세지의 라인을 확인하고 해당 라인이 속한 function 등 최하위 scope의 시작 라인에 중단점을 추가하여
한 라인씩 실행시키면서 문제가 발생하는 부분을 찾는다. 문제를 찾지 못하면 상위 scope의 시작 라인으로 중단점을 변경한다.
```


### [18] github을 통해서 협업과정을 거치는 과정을 branch를 중심으로 설명하기. 

```
repository 생성 후 master branch는 배포버전을 push하도록 하고, 먼저 개발 branch를 생성한다.
개발 branch에서 프로젝트의 초기 셋업을 마치면 개발 branch로부터 기능단위 branch를 생성한다. 
기능 구현 완료 시 개발 branch로 merge하고 기능 branch를 삭제한다. 프로젝트 계획에 따라 배포버전이 완성되면 
개발 branch를 master branch로 merge하는 과정을 반복한다.
```


### [19] jQuery를 사용하는 것의 장점과 단점은 무엇이라고 생각하는지.

```
장점: DOM element 조작과 attribute 수정이 편리하다.
단점: pure javascript보다 속도가 느리다.
```


### [24] this를 변경시킬 수 있는 방법을 코드로 예시로 보여주기.

```javascript
// call
var sayName = function() {
	console.log('my name is ', + this.name);
};
var jeff = { name: 'jeff', age: 29 };
sayName.call(jeff);

// apply
var sayName = function(lang1, lang2, lang3) {
	console.log('my name is ', + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
};
var jeff = { name: 'jeff', age: 29 };
var languages = ['java', 'ruby', 'python'];
sayName.apply(jeff, language);

// bind
var sayName = function(lang1, lang2, lang3) {
	console.log('my name is ', + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
};
var jeff = { name: 'jeff', age: 29 };
var languages = ['java', 'ruby', 'python'];
var newFunc = sayName.bind(jeff, language[0], language[1], language[2]);
newFunc();
```


### [27] 팀장님이 내가 전혀 모르는 기능에 대한 개발을 부탁하면 어떻게 대응할 것인가? 

```
현재 익숙하지 않은 기능이기 때문에 관련 자료가 있는지, 개발에 도움을 요청할만한 사람이 있는지 팀장님과 상의하고, 둘 다 불가능한 경우에는 업무파악을 위한 시간소요에 양해를 구한다.
```


### [29] javascript 코드를 html하단에 주로 배치하는 이유는 ? 

```
Html, css 등 웹페이지의 다른 요소들이 완전히 로드 된 후에 javascript 코드를 실행하려는 의도.
완전히 로드되지않은 DOM element를 javascript로 조작하려고 할 때 예기치 않은 문제가 발생할 수도 있다.
```


### [32] ecmascript란 무엇인가? 

```
javascript 하위개념(BOM, DOM 등) 중 하나로 표준이자 core. 웹 환경에서만 쓰는게 아니다. 8까지 나옴.
```


### [34] DOM Tree란 무엇인가? 

```
HTML/XML 문서의 태그들은 외부노드가 내부노드를 포함하는 parent-child 관계로 네스팅되어있다.
어떤 노드의 내부에 다른 여러개의 child 노드가 포함될 수 있다. 
```


### [38] preventDefault는 언제 쓸 수 있는 것인지? 

```
<a> tag 기본 동작은 href='url..' 으로 이동하는것이 기본 이벤트인데 이것을 생략하려면 preventDefault를 사용.
```


### [39] 버블링과 캡처링을 설명하세요. 

```
이벤트 전달의 방향이 다르다.
1. 캡쳐링: 상위 -> 하위
2. 버블링: 하위 -> 상위
이 때 전파를 중단하기위해 stop propogation을 사용
(* <a> tag?
addeventlistener에서 callback에 return false를 하면 preventDefault, stoppropogation을 모두 포함한다.
안하면 둘다 해야함 )
```


### [44] 팀프로젝트에서 제일 중요한 부분은 무엇이라고 생각하는가? 

```
프로젝트의 단위/최종 목표(예상 결과)가 같아야한다. 목표를 막연하게 설정하면 각 팀원이 개발한 내용을 통합하는 과정에 시행착오나 추가 작업이 발생할 수 있다. 목표를 명확히 하면 각 팀원이 하고있는 일을 파악하기에도 편리할것이다.
```


### [46] 커밋로그가 가진 의미는 어떤것일까? 어떤 규칙이 좋다고 생각하는지?

```
코드 변경의 목적과 내용을 기록하여, 이후에 재확인하는 경우 실제 코드만으로 이해하는데 어렵거나 오랜 시간이 걸리는 상황이
발생하는것을 줄일 수 있다. 개인적으로는 커밋로그 제목에서 변경내용을 한문장으로 설명하고, 변경 세부사항을 단어, 짧은문장으로
리스팅하는 규칙을 사용하고있다.
```


### [48] feature detection에 대해서 설명하시요.

```
어떤 기능이 여러 브라우저에 대한 지원여부가 다를 때, 기능이 지원되지 않는 브라우저에서도 유저가 크리티컬한 문제를 경험하지 않도록
적절한 처리를 하는 코드를 실행하는 것이다.
```


### [54] post와 get의 차이점을 설명하세요.

```
post: 특정 리소스에게 처리 할 데이터를 전송하는것. cache될 수 없고, 브라우저 history에 기록되지않고, bookmark에 저장할 수 없다. 데이터 길이 제한이 없다.
get: 특정 리소스에게 데이터를 요청하는것. cache될 수 있고, 브라우저 history에 기록되고, bookmark에 저장 가능. 데이터 길이 제한이 있다.
```


### [55] http header는 무엇인가요? 

```
http header에는 client/server가 request/response를 주고받을때 필요한 추가정보가 포함된다.
```


### [60] 개발시 어려움이 많거나 풀리지 않을경우 어떤 해결방법을 사용하는가? 

```
풀리지않는 부분의 내용과 상황을 주석이나 별도 텍스트 파일로 정리해 바탕화면 등 자주 확인하는 위치에서 볼수있도록 해놓는다. 관계가 적은 다른 부분의 개발을 시작하고, 몇시간후나 다음날 어려웠던 부분을 다시 개발한다. 머릿속에서 환기를 하고 나면 새로운 생각이 떠오를 수도 있다. 당장 해결해야하는 경우에는 다른 개발자에게 내가 시도한 내용을 알려주고 의견을 구해본다.
```


### [64] front-end 개발자의 역할은 어디까지 일까? 

```
back-end 서버에서 제공받은 데이터를 html, css, javascript를 활용해 시각적으로 표현할 수 있다. static한 markup 결과물을 활용하여 dynamic한 기능을 구현할 수 있다.
```

