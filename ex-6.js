let favoriteBooks = [];

function addFavoriteBook(bookName) {
  // Start coding here !
  let isFavoriteBook = bookName.includes("Beauty")  
  switch(isFavoriteBook){
    case true:
    favoriteBooks.push(bookName);
    break;
    case false:
    console.log("Not my fevorite");
    break;
    default:
      console.log("Not my fevorite");
  }
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);
