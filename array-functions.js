const users = [
    {
        name: "Mehmet",
        age: 18
    }, 
    {
        name: "Ahmet",
        age: 29
    },
    {
        name: "Murat",
        age: 40
    }
];

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// push = Array'in sonuna eleman ekler
// users.push('Ayşe');
// users.push('Fatma');
// console.log(users);

// map = Array'in her elemanının kullanıldığı bir for döngüsü yaratır
// users.map((item) => {
//     console.log(item);
// });

// find = Array'in içersinde istenen özelliklere sahip elemanı bulur. İlk bulduğu eleman ile işlem durur. Eğer şartı sağlayan iki tane eleman varsa ikinciyi görmez.
// const result = users.find((item) => item.name === "Mehmet");
// console.log(result);

// filter = Array'in içersinde istenen özelliklere sahip bütün elemanları bulur.
// const filtered = users.filter((item) => item.name === "Mehmet" && item.age < 20);
// console.log(filtered);
// Kısaltılmış kullanım
// const filtered = users.filter(({name, age}) => name === "Mehmet" && age < 20);
// console.log(filtered);

// some = Array'in içerisinde istenen özelliğe sahip en az bir eleman varsa true döner. Eğer hiç bir eleman özelliği sağlamıyorsa false döner.
// const some = users.some(item => item.age === 18);
// console.log(some);

// every = some'ın tersine bütün elemanların istenen şartı sağlamasını bekler. Eğer sağlanıyorsa true döner, sağlanmıyorsa false.
// const every = users.every(item => item.age > 5);
// console.log(every);

// includes = Bir Array içersinde girilen ifade var mı yok mu diye kontrol eder.
const meyveler = ['Elma', 'Armut', 'Muz'];

const isIncluded = meyveler.includes('Muz');
console.log(isIncluded);













// const newUsersArray = ["Ayşe", ...users];

// console.log("users", users);
// console.log("newUsersArray", newUsersArray);

// const country = {
//     name: "Türkiye",
// };

// const newCountryObj = {
//     ...country,
//     code: "TR",
// };

// console.log(country);
// console.log(newCountryObj);