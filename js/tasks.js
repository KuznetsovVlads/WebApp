/* function calculateVolumeAndArea(argument){
    let a = argument * argument * argument;
    let b = (argument * argument) *6;
    if(argument <0 || Number.isInteger(argument) ===false ){
        return "При вычислении произошла ошибка";
    } else {
        return `Объем куба: ${a}, площадь всей поверхности: ${b}`;
    }
}
console.log(calculateVolumeAndArea(10));
 */

/* 

function getCoupeNumber(x) {
    let ticket=x;
    if(ticket ===0 || ticket>=37 ){
        return "Таких мест в вагоне не существует";
    }else
    if(ticket <=1  || Number.isInteger(x) ===false){
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if(ticket>=1 && ticket <= 4) {
        return 1;
    }else 
    if(ticket>=5 && ticket <= 8) {
        return 2;
    }else 
    if(ticket>=9 && ticket <= 12) {
        return 3;
    }else 
    if(ticket>=13 && ticket <= 16) {
        return 4;
    }else 
    if(ticket>=17 && ticket <= 20) {
        return 5;
    }else 
    if(ticket>=21 && ticket <= 24) {
        return 6;
    }else 
    if(ticket>=25 && ticket <= 28) {
        return 7;
    }else 
    if(ticket>=29 && ticket <= 32) {
        return 8;
    }else 
    if(ticket>=33 && ticket <= 36) {
        return 9;}
}

console.log(getCoupeNumber('10')); */

/* 
function getTimeFromMinutes(time) {
    let x = Math.floor (time/60);    
    let y = time-60*x;
    if(time<0 || Number.isInteger(time) ===false){
        return "Ошибка, проверьте данные";
    }
    if(time>=0 && time <60 || time>=300){
        return `Это ${x} часов и ${y} минут`;
    }
    if(time >=60 && time<=119){
        return `Это ${x} час и ${y} минут`;
    }
    return `Это ${x} часа и ${y} минут`;
}

console.log(getTimeFromMinutes(50.5)); */



/* function findMaxNumber(x, y, z, w){
    let a = [x, y, z, w];
    for (let i=0;i<a.length; i++){
        if(typeof(a[i])!='number') {
            return 0;
        }
    }
    let aar = Math.max(... a);
    return aar;
}
console.log(findMaxNumber(1, 0, 6, 2)); */

/* function fib(x) {
    let arr=[0,1];
    for(let i=2; i<x; i++){
        arr[i]=arr[i-1]+arr[i-2];
        
    }
    if(x===0 || Number.isInteger(x) ===false){
        return '';
    }else
    if(x===1){
        return '0';
    }
    arr = arr.join(' ');
    arr = String(arr);
    return arr;
    
}

console.log(fib(4)); */
/* 
const options = {
    name:'test',
    width:1024,
    height:1024,
    colors:{
        border:'black',
        bg:'red'
    }
};

const {border,bg} =options.colors;
console.log(options); */

/* const obj = {
    a:1,
    red:3,
    main:true,
    gender:true,
    b:2
};

function copy(mainObj){
    let objCopy = {};
    let a;
    for(a in mainObj){
        objCopy[a] = mainObj[a];

    }
    return objCopy;
}
const newObj = copy(obj);
newObj.a = 10;
console.log(newObj);
console.log(obj);  */
  

/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            pyton: '50%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan){
        const {age} = plan;
        let languages ='';
        
        plan.skills.languages.forEach(item => {
            languages += ` ${item.toUpperCase()}`;            
        });

        return `Мне ${age} и я владею языками: ${languages}`;
        
    }
};

function showExperience(plan) {
    let clone = Object.assign({}, plan.skills);
    let experience = ''; 
    experience = `${clone.exp}`;
    return experience;
}
console.log(showExperience(personalPlanPeter));
function showProgrammingLangs(plan) {
    let newObj = Object.assign({}, plan.skills.programmingLangs);
    let str ='';
    for(let value in newObj){
        str += `Язык ${value} изучен на ${newObj[value]}\n`;
    }
    return str;
}



console.log(personalPlanPeter); */

/* const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    const str = `Семья состоит из: `;
    let str2 = arr.join(' ');
    if (str2.length === 0){
        return `Семья пуста`;
    } else {
    return str + str2;
    }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let i=0; i<arr.length; i++){
        console.log((arr[i].toLowerCase()));
    }
    
}


standardizeStrings(favoriteCities); */
/* 
const someString = 'This is some strange string';

function reverse(str) {
    if( typeof(str) != 'string'){
        return "Ошибка!";
    }
    let arr = str.split('');
    let newArr = arr.reverse();
    let newStr = newArr.join('');
    return newStr;    

}
console.log(reverse(someString)); */

/* const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];






function availableCurr(arr, missingCurr) {
    if(arr.length == 0 ){
        return 'Нет доступных валют';
    }
    function filterArr(item){
        if(item === missingCurr){
            return false;
        }
        return true;
    }
    let newArr = arr.filter(filterArr);
    let str = newArr.join('\n');
    return`Доступные валюты: \n`+ str+`\n`;
    

}
console.log(availableCurr(['USD', 'EUR', 'UAH', 'RUB', 'CNY'], 'CNY'));
 */

























