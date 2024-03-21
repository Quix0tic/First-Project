const members = [
    { name: "a", money: 500},
    { name: "b", money: 400},
    { name: "c", money: 5200},
    { name: "d", money: 1200},
];
const isMoney100 = members.find((member)  => member.money > 1000);
const isNameMember = members.map((member) => {return member.name});

/*console.log(isMoney100.name);
console.log(isNameMember);*/

const DisplayMember = () => {
    return console.log(isMoney100.name) + console.log(isNameMember);
}
DisplayMember();