const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

let age = 15


btn.addEventListener('click', () => {
    new Promise((resolve, reject) =>{
    if((age == input.value)){
        resolve('Ура вы угадали')
    }else{
        reject('Не угадали попробуйте еще раз')
    }
}).then((resolve)=> console.log((resolve)))
.catch((reject) => console.log(reject))
})


// const input = document.querySelector('.input')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     new Promise((resolve, reject) =>{
//         if(input.value == 10){
//             resolve(alert('Вы угадали'))
//         }else{
//             reject(alert('Не правильно'))
//         }
//     }).then((response) => console.log(response))
//     .catch((er) => console.log(er))
// })