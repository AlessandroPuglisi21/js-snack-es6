//! Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const biciclette = [
  { nome: "Bmx 800D", peso: 36 },
  { nome: "Ktm 550A", peso: 55  },
  { nome: "Amt 445F", peso: 73 },
  { nome: "Ttk 222", peso: 33 },
  { nome: "Sfc 800", peso: 73 },
];

let biciLeggera = biciclette[0]; // Partiamo dal primo elemento come bici più leggera

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}

console.log(
  `La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`
);
