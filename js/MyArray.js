//constructor for prototype
function MyArrayPrototype() {
    this.push = function () {
        for (let index = 0; index < arguments.length; index++) {
            this[this.length++] = arguments[index];
            // this.length++;
        }
        return this.length;
    };

    this.pop = function () {
        if (this.length === 0) {
            return;
        }
        const lastItem = this[this.length - 1];
        delete this[--this.length];
        // this.length--;
        return lastItem;
    };
    this.reverse = function () {
        const arrNew = new MyArray();

        for (let index = this.length - 1; index >= 0; index--) {
            arrNew.push(array[index]);
        }

        for (let index = 0; index < this.length; index++) {
            this[index] = arrNew[index];
        }

        return arrNew;
    };
    this.forEach = function (func) {
        for (let index = 0; index < this.length; index++) {
            func(this[index], index, this);
        }
    };
    this.some = function (func) {
        for (let index = 0; index < this.length; index++) {
            if(func(this[index],index,this)) {
                return true;
            }
        }
        return false;
    };
    this.every = function (func) {
        for (let index = 0; index < this.length; index++) {
            if (func(this[index], index, this) === false) {
                return false;
            }
        }
        return true;
    };
}
//constructor with data
function MyArray() {
    this.length = 0;
    for (let index = 0; index < arguments.length; index++) {
        this.push(arguments[index]);
    }
}

MyArray.prototype = new MyArrayPrototype();
// MyArray.prototype.newMethod = superMethod;

const myArrayNumbers = new MyArray(1,18,12,13, 10, 36, 56);
// myArrayNumbers.push(444, 1, 1, 1, 1);
// console.log(myArrayNumbers);
// myArrayNumbers.pop();
// myArrayNumbers.pop();
// console.log(myArrayNumbers);
console.log(
    myArrayNumbers.every(function (elem) {
        return elem > 5;
    })
);
myArrayNumbers.forEach(function (elem) {
    console.log(elem);
});

const arrayNumbers = new Array(3, 5, 7);
arrayNumbers.push(45);
console.log(arrayNumbers);
Array.prototype.newMethod = superMethod;

function superMethod() {
    console.log("new method!");
}

// const newMyArrayReverse = new MyArray(1, 2, 3, 4, 5);
// newMyArrayReverse.reverse();
// console.log(newMyArrayReverse);
