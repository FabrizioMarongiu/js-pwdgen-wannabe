//FIRST MESSAGE
alert('Ciao!In questo sito potrai creare delle password sicurissime da poter utilizzare nel web...non ci credi?...Vai avanti!!');
document.getElementById('first-message').innerHTML='Ciao!In questo sito potrai creare delle password sicurissime da poter utilizzare nel web...non ci credi?...Vai avanti!!';

//NAME MESSAGE
var firstname = prompt('Inserisci il tuo nome');
console.log('name ' + firstname);

document.getElementById('realname').innerHTML='Il tuo nome è ' + firstname;

//SURNAME MESSAGE
var surname = prompt('Inserisci il tuo cognome');
console.log('surname ' + surname);

document.getElementById('realsurname').innerHTML = 'Il tuo cognome è ' + surname;

//COLOR MESSAGE
var color = prompt('Inserisci il tuo colore preferito');
console.log('color ' + color);

document.getElementById('realcolor').innerHTML='Il tuo colore preferito è ' + color;

//ADD 21
var secretNumber = 21;
//RETURN PASSWORD
console.log('secure password is ' + firstname + surname + color + secretNumber);

document.getElementById('password').innerHTML = 'La tua password sicurissima è ' + firstname + surname + color + secretNumber;

//LAST MESSAGE
alert('Ti svelo un segreto...Vuoi sapere qualè?');

document.getElementById('last-message').innerHTML='Questa è la password meno sicura che portesse capitarti...Non utilizzarla mai!!';
