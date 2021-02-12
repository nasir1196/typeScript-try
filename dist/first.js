"use strict";
let myMoney = 50;
myMoney = 150;
myMoney = 0;
const isFamous = true;
console.log(isFamous);
let famous = false;
console.log(famous);
let club = "Real Madrid";
console.log(club);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(12, 15));
console.log(add(4, "Name"));
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName("Ben", "Adam");
let multiply;
multiply = (x, y) => x * y;
console.log(multiply(10, 12));
let number = [2, 3, 4, 5, 6, 7, 8];
number.push(9, 10);
console.log(number);
let friend = ["Nasir", "Tusher", "jubaer", "mazharul"];
let megaFriend = "";
for (let i = 0; i < friend.length; i++) {
    const friendList = friend[i];
    if (friendList.length > megaFriend.length) {
        megaFriend = friendList;
    }
}
console.log(megaFriend);
// object
let player = {
    club: "Real Madrid",
    salary: 454000,
};
console.log(player);
const messy = {
    name: "messy",
    age: 40,
    salary: 450000000,
    club: "Barcelona",
    wife: "some one",
    isPlaying: true,
};
const rolando = {
    name: "messy",
    age: 30,
    salary: 510000000,
    club: "real madrid",
    isPlaying: true,
};
function getBonus(player) {
    return player.salary * 0.1;
}
getBonus(messy);
