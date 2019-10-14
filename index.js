// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts); 


const namesArray = [ 'Lisa', 'Kaitlin', 'Jan' ];
// const event = "birthday";

// function writeCards(people, birthday) {
//   let cards = []
//   for (let i = 0; i < people.length; i++) {
//     cards.push(`Thank you, ${people[i]}, for the wonderful ${birthday} gift!`);
//   }
 
//   return writeCards;
  
// }


function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}




