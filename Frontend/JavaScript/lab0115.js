// 실습1: 함수를 인자로 전달하기
function completeTask() {
  console.log("completeTask 함수 시작");
}

function startTask(callbackFunction) {
  console.log("startTask 함수 시작");
  callbackFunction();
  console.log("startTask 함수 종료");
}

startTask(completeTask); // 인자로 함수 이름만 들어감!!

// 실습2: obj 내의 메서드 출력해보기
let obj = {
  x: 3,
  greeting() {
    console.log("안녕!");
  },
};
console.log(obj.greeting); // 함수 자체가 콘솔에 찍혀버림
console.log(obj.greeting()); // "안녕!"

// 실습 3:
const applyOperation = (func, number) => {
  return func(number);
};

const double = (x) => x * 2;
// let double = function(x) { // arrow function 풀어보기
//   return x*2;
// }

console.log(applyOperation(double, 5));

// 실습 4: 고차함수 실습하기
// api 통신으로 다음과 같은 movies Json을 응답 받았다고 할 때,
const movies = [
  { title: "matrix", isAdult: false },
  { title: "kingsman", isAdult: true },
  { title: "zootopia", isAdult: false },
];


let babymovies = movies.filter((movie) => {
  return movie.isAdult === false;
});

let babymoviesFunction = movies.filter(function (movie) {

});

console.log(babymovies);
console.log(babymoviesFunction); // movie 객체들 잘 나옴
// console.log(babymoviesFunction.title); 


let baby = movies 
  .filter(movie => movie.isAdult === false)
  .map(movie => movie.title) 
  // .으로 체이닝한 것! 

let babyTitle = movies.filter(movie => movie.isAdult === false).map(movie => movie.title)
console.log(babyTitle);
// Reduce로 만들어 보기!! 


// 실습 5: Reduce 실습

// let baby2 = movies 
//   .filter(movie => movie.isAdult === false)
//   .map(movie => movie.title) 
// 이걸 Reduce로 리팩토링 해보기!
let reduceTitle = movies.reduce(function(acc, movieObj) {
  if (!movieObj.isAdult) { acc.push(movieObj.title); }
  return acc;
} , []);
console.log("reduceTitle 결과", reduceTitle);

// 다른 버전
let titleObj = movies.reduce(function(acc, movieObj) {
  if (!movieObj.isAdult) { acc["영화 제목"] = (movieObj.title); }
  return acc;
} , {});
console.log("titleObj 결과", titleObj);


// map으로 돌린 함수도 reduce로 리팩토링 해보기!
let arr = [1,2,3];
let reduceDouble = arr.reduce(function (acc, num){
  acc.push(num*2);
  return acc;
}, []);