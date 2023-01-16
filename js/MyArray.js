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

const myArrayNumbers = new MyArray(1, 2, 3);
myArrayNumbers.push(444, 1, 1, 1, 1);
console.log(myArrayNumbers);
myArrayNumbers.pop();
myArrayNumbers.pop();
console.log(myArrayNumbers);

const arrayNumbers = new Array(3, 5, 7);
arrayNumbers.push(45);
console.log(arrayNumbers);
Array.prototype.newMethod = superMethod;

function superMethod () {
    console.log("new method!");
};
