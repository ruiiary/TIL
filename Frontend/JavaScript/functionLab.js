// 자바스크립트 함수 실습하기
let sub1 = (n3, n4) => {
  return n3 - n4;
};

// return 문 한 줄만 함수에 정의되었을 때 (한 줄짜리 함수일 때)일 때 함수 선언
let sub2 = (n5, n6) => n5 - n6;
console.log(sub(7, 5));

// 인자가 하나일 때
let sub3 = (n7) => console.log(n7);

// 인자가 하나일 때 함수 선언과 활용 예제
let cube = (x) => x ** 3;
console.log(cube(2));

// 오브젝트 내 함수, 메서드 표기법
const person = {
  name: "철수",
  greet: function () {
    console.log("안녕하세요. 반갑습니다.");
  }, // 함수를 특정 키 값의 value 값으로 들고 있는 object
};

// 메서드도 arrow function으로 표기(greet) , 파이썬 클래스에서 메서드를 표기하듯이 표기하기(greet2)
const person2 = {
  name: "철수",
  greet: () => console.log("안녕하세요. 반갑습니다."),

  greet2() {
    console.log('다른 인사')
  }
};

person.greet(); // 안녕하세요. 반갑습니다. -> person 안에 있는 Property를 실행한 것!
person2.greet(); 
person2.greet2();