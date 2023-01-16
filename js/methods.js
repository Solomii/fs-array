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

const arr1 = ["fdffd", "gf", 3, 4, 5, 6, 7, 8];

/**
 *
 * @param {any} arr
 * @param {string} str
 * @returns {string}
 */
function hasElement(arr, str) {
    return arr.includes(str);
}

console.log(hasElement(["qfew"], "qfew"));

// написати функцію яка приймає масив з числами
// існує масив з числами, труба знайти середнє значення усіх елементів масивів
//[2,4] =>
// врахувати, що масив маже бути порожнім - повертати null
//

/**
 *
 * @param {number} arr
 * @returns {number | null}
 */

function getArrayNumberSum(arr2) {
    if (arr2.length === 0) {
        return null;
    }
    // let summa = 0;
    // for (let index = 0; index < arr.length; index++) {
    //     summa += array[index];
    // }

    const summa = arr2.reduce(function (resAccum, elem) {
        return resAccum + elem;
    });
    return summa / arr2.length;
}

console.log(getArrayNumberSum([1, 2, 3]));

//написати функцію яка приймає масив чисел і  повертає true, якщо в цьому масиві є два однакових числа поспіль, якщо немає повертає false, якщо порожній повертає теж false
// [1,2,3] ->false
// [1,2,2,3,2]-> true

