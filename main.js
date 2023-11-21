'use strict';

const listaContent = [
    {
        "url immagine": 'img/01.jpg',
        titolo: 'Paesaggio 1',
        descrizione: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam veniam rem iste.'
    },
    {
        'url immagine': 'img/02.jpg',
        titolo: 'Paesaggio 2',
        descrizione: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, omnis.'
    },
    {
        'url immagine': 'img/03.jpg',
        titolo: 'Paesaggio 3',
        descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nemo distinctio commodi.'
    },
    {
        'url immagine': 'img/04.jpg',
        titolo: 'Paesaggio 4',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non!'
    },
    {
        'url immagine': 'img/05.jpg',
        titolo: 'Paesaggio 5',
        descrizione: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi.'
    }
];


// Per ogni elemento immagine voglio inserirlo nel codice html.
const items = document.querySelector('.items');
// variabile immagine che vedo in questo momento
let immagineCorrente = 0;

// Per ogni elemento immagine voglio inserirlo nel codice html.
for (let i = 0; i < listaContent.length; i++) {
  // creo il mio item div con classe item
  const item = document.createElement('div');
  item.classList.add('item');

  // 3) Aggiungo la classe "attiva" al `<div>` sull'immagine corrente.
  if (i === immagineCorrente) {
    item.classList.add('active');
    }
    // creo la mia immagine
    const img = document.createElement('img');
    img.src = listaContent[i]["url immagine"];

    // Creo l'elemento h2
    const title = document.createElement('h2');
    title.innerHTML = listaContent[i].titolo;

    // creo l'elemento p
    const testo = document.createElement('p');
    testo.innerHTML = listaContent[i].descrizione;

    // Aggiungo gli elementi al div "item"
    item.append(img);
    item.append(title);
    item.append(testo);

    // Aggiungo il div "item" all'elemento con classe "items"
    items.append(item);
}

const container = document.querySelector('.container');

// bottoni prev e next
const prev = document.createElement('div');
prev.classList.add('prev');
items.append(prev);

const next = document.createElement('div');
next.classList.add('next');
items.append(next);

// 1) genero la costante listanodi dei div presenti nel dom con la classe che mi interessa
const domItem = document.querySelectorAll('.item');
console.log(domItem);

//////////////////
prev.addEventListener('click', function () {
    console.log(`ho cliccato sopra`);
    // domItem[immagineCorrente].classList.remove('active');
    // domThuItem[immagineCorrente].classList.remove('attuale');
    // immagineCorrente = (immagineCorrente - 1 + domItem.length) % domItem.length;
    // domItem[immagineCorrente].classList.add('active');
    // domThuItem[immagineCorrente].classList.add('attuale');
    // autoPlay;
    if (immagineCorrente > 0) {
        domItem[immagineCorrente].classList.remove(`active`);
        immagineCorrente--;
        domItem[immagineCorrente].classList.add(`active`);
    }
  });
  
  next.addEventListener('click', function () {
    console.log(`ho cliccato sotto`);
    // domItem[immagineCorrente].classList.remove('active');
    // domThuItem[immagineCorrente].classList.remove('attuale');
    // immagineCorrente = (immagineCorrente + 1) % domItem.length;
    // domItem[immagineCorrente].classList.add('active');
    // domThuItem[immagineCorrente].classList.add('attuale');
    // autoPlay;
    if (immagineCorrente < domItem.length - 1) {
        domItem[immagineCorrente].classList.remove(`active`);
        immagineCorrente++;
        domItem[immagineCorrente].classList.add(`active`);
    }
  });