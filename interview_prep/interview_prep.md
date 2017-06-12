<!-- page_number: true -->

Java, JSP 인터뷰 대비
=== 
> last modified, 2017-06-08

---
JAVA
===

---
JAVA?
===
- 객체지향 프로그래밍 언어
- Java Virtual Machine(JVM)에서 동작한다.(운영체제 영향 X)
- 기본 자료형 제외 모든 요소는 객체 형태
- Garbage collector (메모리 관리)
- Multi-thread 지원
- Encapsulation, Inheritance, Polymorphism, Abstraction

---
JAVA 특징
===
### Encapsulation
- private class/variable 혹은, getters and setters
### Inheritance
- parent-child(super-sub) class
### Polymorphism
- 한 class가 여러 class의 subclass일 수 있다
- class deer extends Animal implements Vegetarian(interface)
### Abstraction
- 어떻게 쓰일 지 모르니 비워두고 쓸 때 implement

---
SOLID (5 object-oriented principles)
===
- Single Responsibility Principal(SRP)
- Open-Closed Principle(OCP)
- Liskov Substitution Principle(LSP)
- Dependancy Inversion Principle(DIP)
- Interface Segregation Principle(ISP)

---
JAVA THREAD
===
### Multi-threading 
![](./newthread.jpg)
**```(thread life cycle)```**

---
ABSTRACT, INTERFACE
===
### Abstract
- abstract method 하나 이상 가진 class
- constructor 못씀
- subclass 참조하여 superclass instance 생성
- subclass 제어 목적

### Interface
- abstract class (constant + abstract method!!)
- implements 키워드로 다중 상속 가능

---
CALL
===
### call by reference
class object를 parameter로 전달 *(indirect)*
### call by value
value 복사하여 처리, method 외부 변수에 영향 X *(direct)*

---
PRIMITIVE vs REFERENCE
===
### Primitive type
- 변수에 값 자체 저장
- Wapper class를 통해 object로 변형 가능
> ex. byte, short, int, long / float, double / char / boolean

### Reference type
- 메모리상에 object의 위치를 저장
> ex. class, interface, array

---
COLLECTION
===
### List
순서가 있는 데이터의 집합, 중복 가능
> ex. ArrayList, LinkedList, Stack, Vector

### Set
순서가 없는 데이터의 집합, 중복 불가능
> ex. HashSet, TreeSet

### Map
순서가 없는 key-value pair 집합, value 중복 가능, key 중복 불가능
> ex. HashMap, TreeMap, HashTable, Properties

---
SERIALIZATION
===
- object -> (serialization) -> data stream
- 반대: deserialization
- java.io.Serializable
- transient: 직렬화 못하게 하는 keyword

---
ACCESS MODIFIER
===
- public : 프로젝트 범위 어디서나 사용 가능
- protected : 자기 패키지, 다른 패키지에서 상속받아 사용 가능
- default : 같은 패키지 범위 사용 가능
- private : 같은 클래스 범위 사용 가능

---
ETC
===
### static
- class 로드 시 메모리 고정
- object 여러개 만들어도 instance 하나만 유효

### Garbage Collection
사용하지 않는 동적 할당된 메모리 블럭을 찾아 회수

---
OOP
===

---
OOP?
===
### Object-Oriented Programming
- data as object
- 재사용성이 좋다(상속)

### Object
- varible & method 포함
- 같은 성질과 구조를 가짐
- 어떤 class의 객체는 instance

---
OVERLOADING vs OVERRIDING
===
### Overloading
- 같은 이름의 method 여러개 정의
- 이름은 같고 argument 타입, 개수는 각각 다름

### Overriding
- subclass에서 superclass method 재정의

---
DESIGN PATTERN
===

---
MVC
===
- OOP에서 UI를 Model, View, Controller로 나눈 구조
- Java, C#, Ruby, PHP 등에서 쓰임

### Concepts
1. Model : 데이터 구조를 표현하는 클래스
2. View : 사용자에게 보여지는 요소
3. Controller : Model-View 클래스 연결

---
SINGLETON
===
- instance 하나만 만들수있고, global access 가능

---
JSP
===

---
SERVLET/JSP
===
### Servlet
- Java로 쓰는 Html
- HTML **IN** Java

### JSP(Java Server Page)
- Java코드가 HTML 안에 블록으로 존재
- Java **IN** HTML

---
NETWORK
===

---
TCP/UDP
===
### TCP(Transmission Control Protocol)
- 연결형 서비스, 신뢰성 높음
- 연결 설정(3-way handshake), 연결 해제(4-way handshake)
- flow control, congestion control
- full-duplex, p2p (two-way)

### UDP(User Datagram Protocol)
- 비연결형 서비스, 신뢰성 낮음, 속도 빠름
- 데이터 전송 순서 상관없음
- 수신여부 확인안함(3-way 랑 다름)

---
GET/POST
===
### GET
- 서버에 데이터 요청
- addr+name+value (스트링형태)
- 주소창에 위의 스트링 보임, 길이제한 255 bytes
- POST보다 빠름

### POST
- 서버에 데이터 전달
- 주고받을때 encode-decode
- 주소창에 안보임, 스트링이나 객체도 전송함
- GET보다 느림

---
SESSION/COOKIE
===
### Session
- 사용자 방문의 개념, 방문기록
- 서버에 저장
- 브라우저 캐시에 저장
### Cookie 
- 클라이언트 PC에 저장
- 아이디, 패스워드, 방문기록 등 임시파일로 남김
- 사용자가 특정 웹서버 접속 시 생성

---
DATABASE
===

---
DATABASE
===
### Index
- row 순서를 매겨 접근성을 높이고 속도 향상
- index를 저장하는데 필요한 디스크 공간은 작음

---
OPERATING SYSTEM
===

---
THREAD
===
### Thread vs Process
- Thread : 프로세스내에서 동시에 실행되는 독립 실행 단위
- Process : OS에서 실행중인 하나의 프로그램(1<=n threads)

### Thread 장단점
- 장 : 프로세스 생성 빠름, 적은 메모리 사용, 정보 공유 쉬움
- 단 : deadlock(multiprogramming 에서 wait 상태에 빠짐)

---
THREAD vs PROCESS (more)
===
- to be added...

---
SPRING
===

---
FRAMEWORK
===
- 특정 형태의 SW 문제 해결을 위해 상호 협력하는 class/interface frame의 집합
- 구성 컴포넌트는 재사용 가능
- 시스템 통합성/일관성 생김, 작업시간 줄어듬
- 개발 범위 한정적

---
SPRING FRAMEWORK 특징
===
- Plain Old Java Object(POJO)
- Inversion of Control(IoC)
- Dependancy Injection(DI)
- Aspect-Oriented Programming(AOP)
