//JSON (Javascript Object Notation)
//2. JSON -> Object
//parse(json) 역직렬화

console.clear(); //객체 형태로 나옴
console.log(rabbit);
json = JSON.stringify(rabbit); // rabbit이 json으로 변환됨
console.log(json); //string로 나옴
const obj = JSON.parse(json); // json을 다시 객체로 변환
console.log(obj); //다시 역질렬화 해서 객체로 나옴
rabbit.jump();
// obj.jump(); // obj안에 jump가 없어졌기 때문에 오류남
console.log(rabbit.birthdate.getDate());
//console.log(obj.birthdate.getDate()); // getDate라는게 문자열로 변했기 때문에 오류남

const obj2 = JSON.parse(json, (key,value) =>{ // 좀더 세분화 하여 역질렬화 하고 다시 getDate를 객체로 만들기
    console.log(`key:${key}, value:${value}`);
    return key === 'birthdate' ? new Date(value) : value;
});
console.log(obj2.birthdate.getDate());