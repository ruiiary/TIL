console.log("hi");

//window.open(); 브라우저에서 새 창 열기 -> Node에서는 실행이 안 되는 명령어

let fruits = ["사과", "바나나", "딸기"];
console.log(fruits);

let numbers = [1, 2, "3"];
console.log(numbers);

console.log(fruits[0]);
console.log(fruits[50]); // index 에러가 나지 않음!
console.log(fruits.at(-2)); // 음수 인덱싱도 가능!
console.log(fruits.slice(1, 3)); // 파이썬처럼 슬라이싱 가능
console.log(fruits.length); // 길이
fruits.reverse();
console.log(fruits.indexOf("a"));
console.log(fruits.join("-"));

let person = {
  age: 30,
  job: "개발자",
};

console.log(person.age);

let A = new Set([1, 2, 3]);
console.log(A);

let a = {
  name: "홍길동", // 문자열(String)
  age: 30, // 숫자(Number)
  isStudent: false, // 불리언(Boolean)
  courses: ["수학", "영어", "과학"], // 배열(Array)
  address: {
    city: "서울",
    zipcode: "10001",
  }, // 객체(Object)
  graduationYear: null, // null
};

console.log(a.address.city);
