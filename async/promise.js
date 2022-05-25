// 1. Producer : 제공자
const promise = new Promise((resolve, reject)=> {
    console.log('doing someting.....');
    setTimeout(()=>{
        resolve('study');
        //reject(new Error('no network'));
    }, 2000)
}

);


// 2. Consumers : 사용자, then, catch, finally
promise
    .then((value) =>{
        console.log(value);
    }) // value는 promise가 잘 처리되어 resolve호출하고 거기에 전달된 'study' 를 받는다.
    .catch(error => {
        console.log(error);
    }) //error는 promise가 처리되다 오류가 발생하여 전될되는 Error객체를 받는다. 
    .finally(() =>{
        console.log('finally');
    }) //무조건 실행되는 곳
