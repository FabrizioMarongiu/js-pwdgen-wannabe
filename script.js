//FIRST MESSAGE
alert('Ciao!In questo sito potrai creare delle password sicurissime da poter utilizzare nel web...non ci credi?...Vai avanti!!');
document.getElementById('first-message').innerHTML='Ciao!In questo sito potrai creare delle password sicurissime da poter utilizzare nel web...non ci credi?...Vai avanti!!';

//NAME MESSAGE
var name = prompt('Inserisci il tuo nome');
console.log(name);

document.getElementById('realname').innerHTML='Il tuo nome è ' + name;

//SURNAME MESSAGE
var surname = prompt('Inserisci il tuo cognome');
console.log(surname);

document.getElementById('realsurname').innerHTML='Il tuo cognome è ' + surname;

//SURNAME MESSAGE
var color = prompt('Inserisci il tuo colore preferito');
console.log(color);

//document.getElementById('realcolor').innerHTML='Il tuo colore preferito è ' + color;