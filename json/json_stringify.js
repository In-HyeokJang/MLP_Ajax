// JSON(Javascript Object Notation)
//1.objet를 json 형식으로 바꾸기 // object -> json
// stringify(obj): 직렬화

let json = JSON.stringify(true);
console.log(`json:${json}, type: ${typeof json}`); // type : string
console.log(`json:${true}, type: ${typeof true}`);

json = JSON.stringify(['apple','banan']);
console.log(`json:${json}, type:${typeof json}`); //모양은 배열인데 json으로 바껴서 string타입으로 나옴
console.log(`json:${['apple','banan']}, type:${['apple','banan']}`);

// 객체 -> 문자열,메서드는 JSON으로 변환되지 않는다.
 
const rabbit = {  //객체 -> 문자열, 메서드는 JSON으로 변환되지 않는다.
    name : 'tori',
    color : 'white',
    size : null,
    birthdate : new Date(),
    jump:() => {console.log(`${name} can jump!`);},
};
json = JSON.stringify(rabbit);
console.log(`json:${json}, type:${typeof json}`);
console.log(`object${rabbit}, type:${typeof rabbit}`);

json = JSON.stringify(rabbit,['name','color']);
console.log(json);


json =JSON.stringify(rabbit, (key,value)=>{
    console.log(`key:${key}, value:${value}`);
    return key === 'name'?'reb':value
});
console.log(json);