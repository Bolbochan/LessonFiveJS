const auditorium = ["Economist", "Mechanic", "Computer", "Tribunal", "Pie"]
const capacity = {
    economist: 15,
    mechanic: 10,
    computer: 20,
    tribunal: 14,
    pie: 12,
};
const faculty = {
    economist: `Economical`,
    mechanic: `MTF`,
    computer: `IT`,
    tribunal: `FoL`,
    pie: `HTI`,
}

const auditoriumData = auditorium.map((name) => {
    return {
        name: name,
        capacit: capacity[name.toLowerCase()],
        facult: faculty[name.toLowerCase()],
    }
});
console.log(auditoriumData)
//one task finish
const het = prompt(`Please,enter an auditorium name(Economist, Mechanic, Computer, Tribunal, Pie)`)
function findCherries(name) {
    return name.name === het;
}

console.log(auditoriumData.find(findCherries));
//Це був вивід аудиторій по аудиторіям
const group = prompt(`Please,enter a facult(Economical, MTF, IT, FoL, HTI)`)
const number = prompt(`Please,enter a copacity(economist: 15, mechanic: 10, computer: 20, tribunal: 14, pie: 12,)`)
const numNumber = parseInt(number)
const groupData = auditoriumData.filter(big => big.facult === group);
const numberData = auditoriumData.filter(big => big.capacit === numNumber);

console.log(groupData);
console.log(numberData);
//Це був вивід аудиторій по факультетам і місцям
const CopAuditoriumData = auditoriumData.slice()
CopAuditoriumData.sort((prev, next) => {
    if (prev.capacit < next.capacit) return -1;
    if (prev.capacit < next.capacit) return 1;
});
console.log(CopAuditoriumData)

const CopTwoAuditoriumData = auditoriumData.slice()

CopTwoAuditoriumData.sort((prev, next) => {
    if (prev.name < next.name) return -1;
    if (prev.name < next.name) return 1;
});
console.log(CopTwoAuditoriumData)