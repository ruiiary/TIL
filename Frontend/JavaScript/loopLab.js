// 반복문 실습
let data = [
  {
    name: "김철수",
    age: 30,
    city: "서울",
  },
  {
    name: "박영희",
    age: 25,
    city: "부산",
  },
  {
    name: "이민수",
    age: 35,
    city: "대구",
  },
  {
    name: "최은영",
    age: 28,
    city: "인천",
  },
];

console.log(data.length);

for (i=0; i<data.length; i++) {
  console.log(data[i].city);
}


let name = [];
for (i=0; i<data.length; i++) {
  name.push(data[i].name);
}

console.log(name);


// 해설
// 새 배열 안에 사람 이름만 깔끔하게 모아보자!
let names2 = [];
for (let i of data) {
  names2.push(i.name);
}
console.log(names2);