/*
створіть фунцію конструктор Продукт з властивостями: назва(рядок), ціна(число), кількість (число - залишок на складі)

створіть функцію конструкто прототипу Продукт
showInffo(), - рядок з усіма даними
setSalleToPrice(value=0); - вст знижку і повертає нову ціну
buyAmountProduct(amount) - повертає загальну вартість, якщо достатня кількість, якщо не має повертаємо = null

!!!!не забути поєднати Продукт і  його продукт!!!
 */

// function Product(name, price, currency, productQuantity) {
//     this.name = name;
//     this.price = price;
//     this.currency = currency;
//     this.productQuantity = productQuantity;
// }

// function ProductPrototype() {
//     this.showInfo = function () {
//         return (
//             "Product name: " +
//             this.name +
//             ", price: " +
//             this.price + " " +
//             this.currency +
//             ", quantity (remains) in stock  - " +
//             this.productQuantity
//         );
// };
// // debugger;
// this.setSaleToPrice = function (discount = 0) {
//   let discountPercent = discount/100;
//     if (Number.isNaN(Number(this.price))) {
//         return "error";
//     } else {
//           let newPrice = Number(this.price - (this.price * discountPercent).toFixed(2));
//           this.price = newPrice;
//             return (
//                 "discounted price: " + this.price +  this.currency)

//             ;
//         }
//     };
//     this.buyAmountProudct = function (amountValue) {
//         if (this.productQuantity <= amountValue) {
//             return null;
//         } else {
//             this.productQuantity -= amountValue;
//             return this.price * amountValue;
//         }
//     };
// }

// Product.prototype = new ProductPrototype();

// const product1 = new Product("bread", 23, "uah", 20);
// const product2 = new Product("egg", 6, "uah", 30);
// const product3 = new Product("onion", 20, "uah", 0);

// console.log(product1.showInfo());
// console.log(product2.showInfo());
// console.log(product3.showInfo());
// console.log(product1.setSaleToPrice(0));
// console.log(product2.setSaleToPrice(5));
// console.log(product3.setSaleToPrice(10));
// console.log(product1.buyAmountProudct(2));
// console.log(product1.buyAmountProudct(20));
// console.log(product2.buyAmountProudct(3));
// console.log(product3.buyAmountProudct(23));

