/* 
TRACCIA:
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente 
il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, per indicare centesimi sul prezzo).
BONUS:
replicare anche lo stile estetico fornito dallo screenshot tramite CSS
ATTENZIONE:
- Controlliamo che tipo di valore viene restituito dai value degli input?
- Evitiamo per il momento di utilizzare il tag <form> di HTML , 
poichè potrebbe giocarci qualche scherzetto inaspettato!
*/


// #1 Recupero dati dalla pagina biglietto

const nameField =document.getElementById('name');
const kmField =document.getElementById('km');
const ageField =document.getElementById('age');
const generateButton =document.getElementById('generate');
const deleteButton =document.getElementById('delete');


// #2 Recupero elementi in cui andrò a stampare gli output

const namePlaceholder =document.getElementById('passenger-name');
const offerPlaceholder =document.getElementById('offer');
const carrozzaPlaceholder =document.getElementById('carrozza');
const cpPlaceholder =document.getElementById('cp');
const pricePlaceholder =document.getElementById('price');


// Al click del bottone scateno l'evento
generateButton.addEventListener('click', function(){
    // Recupero i valori dal input
    const nameValue = nameField.value;
    const kmValue = kmField.value;
    const ageValue = ageField.value;



    // Calcoliamo prezzo base
    let price = kmValue * 0.21;
    let discontOffer;

    // Calcoliamo lo sconto
    switch (ageValue) {
        case 'min':
            price *= 0.8;
            discontOffer = 'Sconto Minorenni'
            break;
        case 'over':
            price *= 0.6;
            discontOffer = 'Sconto Senior'
            break;
        default:
            discontOffer = 'Tariffa Ordinaria'
    }

    // Generiamo numeri random per CP e carozza
    const carozzaRandom = Math.floor(Math.random() * 10) +1 ;
    const cpRandom = Math.floor(Math.random() * 99999)  ;


    // VIsualizzo i risultati in pagina
    pricePlaceholder.innerText = price.toFixed(2);
    offerPlaceholder.innerText = discontOffer;
    namePlaceholder.innerText = nameValue;
    cpPlaceholder.innerText = cpRandom;
    carrozzaPlaceholder.innerText= carozzaRandom;
})

// Rimuoove imput utente al click
deleteButton.addEventListener('click', function(){
    nameField.value = '';
    kmField.value = '';
    ageField.value = '';

    pricePlaceholder.innerText = '';
    offerPlaceholder.innerText = '';
    namePlaceholder.innerText = '';
    cpPlaceholder.innerText = '';
    carrozzaPlaceholder.innerText= '';
})