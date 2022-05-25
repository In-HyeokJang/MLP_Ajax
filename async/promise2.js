// 3. Promise chaining
//  Promise 객체 생성
const fetchNumber = new Promise((resolve, reject) =>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1),1000)
        });
    })
    .then(num => console.log(num));

// 4. Error HandLing
// Promise 제공자
//{} 사용시 retrun 키워드 반드시 사용
const getHen = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => resolve('hen'),1000);
    });
}
const getEgg = hen=>
    new Promise((reslove, reject)=>{
        // setTimeout(()=>reslove(`${hen} => egg`),1000);
        setTimeout(()=>reject(new Error(`error! ${hen}=>egg`)),1000);
    });

const cook = egg =>
    new Promise((resolve, reject) =>{
        setTimeout(()=>resolve(`${egg} => brunch`),1000);
    });

// Promise 사용자
getHen()
    .then(getEgg)
    .catch(error =>{
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
    