//constructor for prototype
function MyArrayPrototype() {
    this.push = function (value) {
        this[this.length] = value;
        return ++this.length;
    };

    this.pop = function () {
        if (this.length === 0) {
            return;
        }
        const lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    };
}
//constructor with data
function MyArray() {
    this.length = 0;
}

MyArray.prototype = new MyArrayPrototype();

const myArrayNumbers = new MyArray(4,5,6,9);
myArrayNumbers.push(444);
console.log(myArrayNumbers);
myArrayNumbers.pop();
myArrayNumbers.pop();
console.log(myArrayNumbers);

const arrayNumbers = new Array(1,2,3,5,);
arrayNumbers.push(777);
console.log(arrayNumbers);
