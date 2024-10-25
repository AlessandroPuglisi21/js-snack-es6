console.log('prova')

//! Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//? Creare un array di oggetti di squadre di calcio.

const squadre = [
    {nome: 'Juventus', punti: 0, golFatti:0, golSubiti:0},
    {nome: 'Roma', punti: 0, golFatti:0, golSubiti:0},
    {nome: 'Napoli', punti: 0, golFatti:0, golSubiti:0},
    {nome: 'Lecce', punti: 0, golFatti:0, golSubiti:0},
    {nome: 'Inter', punti: 0, golFatti:0, golSubiti:0},
    {nome: 'Milan', punti: 0, golFatti:0, golSubiti:0},
    {nome: 'Verona', punti: 0, golFatti:0, golSubiti:0},
    {nome: 'Torino', punti: 0, golFatti:0, golSubiti:0},
]

//FUNZIONE NUMERI RANDOM

function randomNumber(min, max) {
    return Math.floor(Math.random() *(max -min + 1)) + min;
}

//PUNTI FATTI
squadre.forEach(squadra =>{
    squadra.punti = randomNumber(30, 80);
});

//GOL FATTI
squadre.forEach(squadra =>{
    squadra.golFatti = randomNumber(40, 70);
});

//GOL SUBITI 
squadre.forEach(squadra =>{
    squadra.golSubiti= randomNumber(15, 40);
});

console.log(squadre)



