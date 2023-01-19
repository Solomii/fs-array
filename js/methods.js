// function sum() {
//     // console.log("arguments-",arguments);
//     let summa = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         summa += arguments[i];
//     }
//     return summa;
// }

// console.log(sum(1, 2, 3, 6));
// console.log();

// const arr1 = [1, 2, 3, 4,5,6,7,8];
const arr2 = [5, 6, 3, 3];
const summa = arr2.reduce(function (accumulator, carrentValue) {
    return accumulator + carrentValue;
});
const testReduce = arr2.reduce(function (accumulator, carrentValue, index) {
    return accumulator + (index % 2 ? carrentValue : 2);
}, 1000);
console.log(testReduce);

// const key = 3;
// const arr3 = arr1.concat(arr2)

// const arr3 = arr1.slice(2,5);
// console.log(arr1)
// const arr3 = arr1.splice(2,0,77,78);

// console.log(arr1);
// console.log(arr3);
// console.log(arr1.indexOf(key,3));
// console.log(arr1.lastIndexOf(key));
// console.log(includes(key))

/*
написати функцію, яка буде повертати масив if рядок і повертати true, якщо рядок є в масиви, false якщо немає. врахувати що масив може бути порожнім.
 */

// const arr1 = ["fdffd", "gf", 3, 4, 5, 6, 7, 8];

// /**
//  *
//  * @param {any} arr
//  * @param {string} str
//  * @returns {string}
//  */
// function hasElement(arr, str) {
//     return arr.includes(str);
// }

// console.log(hasElement(["qfew"], "qfew"));

// написати функцію яка приймає масив з числами
// існує масив з числами, труба знайти середнє значення усіх елементів масивів
//[2,4] =>
// врахувати, що масив маже бути порожнім - повертати null
//

// /**
//  *
//  * @param {number} arr
//  * @returns {number | null}
//  */

// function getArrayNumberSum(arr2) {
//     if (arr2.length === 0) {
//         return null;
//     }
//     // let summa = 0;
//     // for (let index = 0; index < arr.length; index++) {
//     //     summa += array[index];
//     // }

//     const summa = arr2.reduce(function (resAccum, elem) {
//         return resAccum + elem;
//     });
//     return summa / arr2.length;
// }

// console.log(getArrayNumberSum([1, 2, 3]));

//написати функцію яка приймає масив чисел і  повертає true, якщо в цьому масиві є два однакових числа поспіль, якщо немає повертає false, якщо порожній повертає теж false
// [1,2,3] ->false
// [1,2,2,3,2]-> true

/*
написати функцію яка приймає два параметр: мінімум і максимум діапазону. повертає масив значення якого будуть усі числа з діапазону, включає мінімум і максимум. Третій необовязково аргумент функції приймає для визначення елементів за замовчуванням шаг =1 */

// /**
//  *
//  * @param {number} min
//  * @param {number} max
//  * @param {number } step default value=1
//  * @returns  {[number]} [number]
//  */

// function getArrayByRange(min, max, step = 1) {
//     // if(min>max) {
//     //     const buffer = min;
//     //     min = max;
//     //     max =buffer;
//     // }
//     const arr = [];

//     for (let index = min; index <= max; index += step) {
//      arr.push(index);
//     }

//     return arr;
// }

// console.log(getArrayByRange(3, 18, 3));

const array = new Array(5).fill(0).concat(1, 2, 3).reverse().fill(5);
arr2.splice(5, 0, 44, 45);
array.fill("!");

console.log(array);

/*
масив user, повернути юзера у якого вік менше 30
 */

const users = [
    { name: "Brad", age: 44 },
    { name: "Tom", age: 54 },
    { name: "Alex", age: 24 },
    { name: "Bob", age: 27 },
    { name: "Rob", age: 34 },
];

function isAge(user) {
    if (user.age < 30) {
        return true;
    }
}

// const userName = users.find(isAge).name

const userName = users.find(function (user) {
    return user.age < 30;
});

const validateUsers = [];
for (let index = 0; index < users.length; index++) {
    if (isAge(users[index])) {
        validateUsers.push(users[index].name);
    }
}

const filterUsers = users.filter(function (user) {
    return user.age < 30;
});

console.log(validateUsers);

console.log(filterUsers);

console.log(userName);

const userNameMap = users.map(function (user) {
    return user.name;
});

const validateUserNameFilterMap = users.filter(isAge).map(getName);

function getName(currentElement) {
    return currentElement.name;
}

console.log(userNameMap);
console.log(validateUserNameFilterMap);

/*
масив чисел 
 */

const numberArr = [
    1,
    undefined,
    2,
    undefined,
    3,
    4,
    5,
    6,
    undefined,
    3,
    3,
    7,
    8,
    9,
];
const key = 3;

const summaEvenVlues = numberArr
    .filter(function (number) {
        return number % 2 === 0;
    })
    .reduce(function (sum, number) {
        return (sum += number);
    });

const countKey = numberArr.filter(function (elem) {
    return elem === key;
}).length;

const notEmptyVlueArray = numberArr.filter(function (elem) {
    return elem;
});

console.log(summaEvenVlues);
console.log(countKey);
console.log(notEmptyVlueArray);

const arr18 = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
    console.log(arr18[index]);
}

arr18.forEach(logElement);

function logElement(elem) {
    console.log(elem);
}

const users18 = [
    { name: "Brad", age: 44 },
    { name: "Tom", age: 54 },
    { name: "Alex", age: 24 },
    { name: "Bob", age: 27 },
    { name: "Rob", age: 34 },
];

users18.forEach(function (user) {
    return (user.isSubscribe = user.age > 35 ? true : false);
});

console.table(users);

const arr181 = [1, 2, 3, 4, 5];
const arr182 = arr181.slice(0);
const arr183 = [1, 2, 3, 4];

function checkArrIndentation(arr181, arr182) {
    if (arr181.length !== arr182.length) {
        return false;
    }
    // for (let i = 1; i < arr181.length; i++) {
    //     if (arr182[i] !== arr181[i]) {
    //         return false;
    //     }
    // }

    // let check =true;

    // arr181.forEach(function (elem, index) {
    //     if (elem !== arr182[index]) {
    //         check=false;
    //     }

    // });
    // return check;

    // const check = arr181
    //     .map(function (elem, index) {
    //         return elem === arr182[index];
    //     })
    //     .includes(false);
    // return !check;

    // const check = arr181
    //     .map(function (elem, index) {
    //         return elem !== arr182[index];
    //     })
    //     .includes(false);
    // return check;

    return !(arr181
        .map(function (elem, index) {
            return elem === arr182[index];
        })
        .includes(false));
}

console.log(checkArrIndentation(arr181, arr182));
console.log(checkArrIndentation(arr181, arr183));

const key18 = 3;
function getArrayAndKey(array18, key18) {
    const newArray18 = [];
    // for (let index = 0; index < array18.length; index++) {
    //   newArray18.push(key,array18);
    // }
    array18.forEach(function (key18) {
        newArray18.push(key18);
    });

    return newArray18;
}

console.log(getArrayAndKey([1, 2, 3, 4, 5, 6, 7]));

