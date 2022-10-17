// Créer une fonction appelée getComputerChoice qui renverra au hasard soit 'Pierre', 'Papier' ou 'Ciseaux'.
// Nous utiliserons cette fonction dans le jeu pour retourner le choix de l'ordinateur
console.log("hello");

const choices = ["pierre", "papier", "ciseaux"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// console.log(getComputerChoice());

// Écrire une fonction qui joue un seul tour de Pierre Papier Ciseaux. La fonction doit prendre deux paramètres - playerSelection et computerSelection - puis renvoyer une chaîne qui déclare le vainqueur du tour comme suit : "Vous avez perdu! Le papier bat la pierre"
// Rendre le paramètre playerSelection de la fonction insensible à la casse (afin que les utilisateurs puissent saisir pierre, pIERRE, pierrE ou toute autre variante).

// Remarque importante : On souhaite retourner les résultats de cet appel de fonction.

// function playRound(playerSelection, computerSelection) {
//   // Le code
// }

// const playerSelection = 'pierre';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// let playerSelection = prompt("choisissez pierre, papier, ciseaux");
// let computerSelection = getComputerChoice();
const playerSelection = prompt("choisissez pierre, papier, ciseaux");
const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
  let scoreComputer = 0;
  let scorePlayer = 0;
  if (playerSelection === computerSelection) {
    console.log("ex aequo");
    return 0;
  } else if (
    (playerSelection === "pierre" && computerSelection === "papier") ||
    (playerSelection === "papier" && computerSelection === "ciseaux") ||
    (playerSelection === "ciseaux" && computerSelection === "pierre")
  ) {
    scoreComputer++;
    console.log("Computer gagne ", scoreComputer, scorePlayer);
    return -1;
  } else {
    scorePlayer++;
    console.log("player gagne ", scorePlayer, scoreComputer);
    return 1;
  }
}

// console.log(scores);

// Écrire une NOUVELLE fonction appelée game(). Appeler la fonction playRound à l'intérieur de celle-ci pour jouer à un jeu de 5 tours qui enregistre le score et signale un gagnant ou un perdant à la fin.
// À ce stade, on utilisera console.log() pour afficher les résultats de chaque tour et le gagnant à la fin.

// Utiliser prompt() pour obtenir l'entrée de l'utilisateur

function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("choisissez pierre, papier, ciseaux");
    const computerSelection = getComputerChoice();
    score += playRound(playerSelection, computerSelection);
  }
  if (score === 0) {
    return "match nul";
  } else if (score > 0) {
    return "vous remportez la partie";
  } else {
    return "vous perdez";
  }
  // if (
  //   playRound.scoreComputer === 3 ||
  //   (i === 5 && scoreComputer > scorePlayer)
  // ) {
  //   console.log(
  //     "partie terminée computer gagne ",
  //     scoreComputer,
  //     " : ",
  //     scorePlayer
  //   );
  // } else if (
  //   playRound.scorePlayer === 3 ||
  //   (i === 5 && scorePlayer > scoreComputer)
  // ) {
  //   console.log(
  //     "partie terminée player gagne ",
  //     scorePlayer,
  //     " : ",
  //     scoreComputer
  //   );
  // } else if (i === 5) {
  //   console.log("ex aequo");
  // }
}

console.log(game());
