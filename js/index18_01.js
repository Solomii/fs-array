function User(firstName, lastName, age, isMale, email, isSubscribe = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribe = isSubscribe;
}

function UserPrototype() {
    this.getFullName = function () {
        return `${firstName} ${lastName}`;
    };
}

User.prototype = new UserPrototype();
function createUsers(amount = 1) {
    const db = [];
    for (let i = 0; i < amount; i++) {
        const user = new User(
            `firstName:${i + 1}`,
            `lastName:${i + 1}`,
            getRandomArbitrary(18, 90),
            Math.random() > 0.5,
            `email:${i + 1}@gmail.com`
        );
        db.push(user);
    }
    return db;
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

const users = createUsers(20);
console.table(users);

// отримани масив повних імен користувачів
const fullName = users.map(function (user) {
    return `${user.firstName} ${user.firstName}`;
    // return user.getFullName()
});

// отримати масив юзерів, які будуть старші за СHECK_AGE
const checkAge = users.filter(function (user, CHECK_AGE) {
    return user.age > CHECK_AGE;
});

// зарандомити підписку у користувачів
users.forEach(function (user) {
    user.isSubscribe = Math.random() > 0.5;
});

// ств масив пошт користувачів жіночої статті молодше
// CHECK_AGE і  мають підписку
const CHECK_AGE = 35;
const usersEmail = users
    .filter(function (user) {
        return (
            user.isMale === false && user.isSubscribe && user.age < CHECK_AGE
        );
    })
    .map(function (user) {
        return user.email;
    });

// порахувати чоловіків і жіноf
console.log(
    users.filter(function (user) {
        return user.isMale;
    }).length
);
console.log(
    users.filter(function (user) {
        return !user.isMale;
    }).length
);

console.log(fullName);
console.log(checkAge);
console.log(usersEmail);
