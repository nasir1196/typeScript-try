let myMoney = 50;
myMoney = 150;
myMoney = 0;

const isFamous: boolean = true;
console.log(isFamous);
let famous: boolean = false;
console.log(famous);
let club: string = "Real Madrid";
console.log(club);

function add(num1: any, num2: number | string): void {
  return num1 + num2;
}
console.log(add(12, 15));
console.log(add(4, "Name"));

function fullName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}
const user: string = fullName("Ben", "Adam");

let multiply: (x: number, y: number) => number;
multiply = (x, y) => x * y;
console.log(multiply(10, 12));

let number: number[] = [2, 3, 4, 5, 6, 7, 8];
number.push(9, 10);
console.log(number);

let friend: string[] = ["Nasir", "Tusher", "jubaer", "mazharul"];
let megaFriend: string = "";
for (let i = 0; i < friend.length; i++) {
  const friendList: string = friend[i];
  if (friendList.length > megaFriend.length) {
    megaFriend = friendList;
  }
}
console.log(megaFriend);

// object

let player: {
  club: string;
  salary: number;
} = {
  club: "Real Madrid",
  salary: 454000,
};
console.log(player);

// interface
interface Player {
  name: string;
  age: number;
  salary: number;
  club: string;
  wife?: string;
  isPlaying: boolean;
}

const messy: Player = {
  name: "messy",
  age: 40,
  salary: 450000000,
  club: "Barcelona",
  wife: "some one",
  isPlaying: true,
};

const rolando: Player = {
  name: "messy",
  age: 30,
  salary: 510000000,
  club: "real madrid",
  isPlaying: true,
};

function getBonus(player: Player) {
  return player.salary * 0.1;
}

getBonus(messy);
