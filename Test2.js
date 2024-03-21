const members = [
    { name: "a", money: 500},
    { name: "b", money: 400},
    { name: "c", money: 5200},
    { name: "d", money: 1200},
];

const result = members.filter((member)  => member.money > 450);
const result2 = result.map((member) => {return member.name});
console.log(result2);