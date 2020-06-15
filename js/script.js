// RICHIESTA 1: km da percorrere
var km = prompt("Quanti km devi percorrere?")


// RICHIESTA 2: età attuale
var anni = prompt("Quanti anni hai?")


// calcola il prezzo totale del viaggio senza applicare sconti
var prezzoBase = 0.21 * km
var prezzoBaseArrotondato = prezzoBase.toFixed(2)


// calcola il prezzo scontato del 20% per gli under 18
var calcoloPercentuale = ((prezzoBase / 100) * 20)
var prezzoArrotondato = calcoloPercentuale.toFixed(2)

var prezzoFinaleScontatoUnder = prezzoBase - prezzoArrotondato


// calcola il prezzo scontato del 40% per gli over 65
var calcoloPercentuale = ((prezzoBase / 100) * 40)
var prezzoArrotondato = calcoloPercentuale.toFixed(2)

var prezzoFinaleScontatoOver = prezzoBase - prezzoArrotondato



// stabilisci il prezzo scontato in base all'età e dai l'output all'utente
if (anni < 18){
  document.getElementById('prezzo-biglietto').innerHTML = "Il tuo biglietto costerà € " + prezzoFinaleScontatoUnder + " Ti è stato applicato uno sconto del 20%";
} else if (anni > 65) {
  document.getElementById('prezzo-biglietto').innerHTML = "Il tuo biglietto costerà € " + prezzoFinaleScontatoOver + " Ti è stato applicato uno sconto del 40%";
} else {
  document.getElementById('prezzo-biglietto').innerHTML = "Il tuo biglietto costerà € " + prezzoBaseArrotondato;
}
