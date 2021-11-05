// record of games

const record = [
    { year: "1970", result: "N/A"},
    { year: "1969", result: "W"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "L"},
  ];


// Declare a function outside that will find the first superbowl win.
// If it finds a match, it will return the object. If not, it will
// return undefined.
function findWinner(win){
    return win.result === 'W';
}

// superbowlWin function that returns the found win, if any
// uses the callback function defined above.
function superbowlWin(array) {

    // // if you use this, you will return the year of the winner,
    // // but if there is no winner, you will throw an error.
        // // This is because you are trying to call the object method
        // // ".year" on something that is undefined
    // return array.find(findWinner).year;

    // // Alternatively, you could assign the .find method to a variable
    // // and then run a conditional statement to check for undefined.
    // // (remove the return above to proceed).

    // let foundYear = array.find(findWinner)
 
    // if (foundYear == undefined) {
    //     return undefined;
    // } else {
    //     return foundYear.year;
    // }

    // // A ternary expression would be much cleaner. You could use
    // // the expression below, which first checks if "foundYear" is 
    // // truthy before proceeding to call the object method ".year" on it

    // return foundYear ? foundYear.year : foundYear


    
    // Test arrow function
        let foundYear = array.find(win => win.result === 'W');
        return foundYear ? foundYear.year : foundYear

               // Submitted code
    // let foundYear = array.find(findWinner);

    
    // return foundYear.year

    
    
}

superbowlWin(record);
// array.find()


// const title = books.map(function(item){
//     console.log(item)
//     return item.title
// })

// console.log(record[0].result);
  
// // first try
// function superbowlWin(array) {
//     if (record.result === "W") {
//         return game.year;
//     } 
// }

// second try
// function superbowlWin(game) {
    
// }

// console.log(superbowlWin(record));

// let foundYear = record.find(superbowlWin(record));

// console.log(foundYear);

// record.find(superbowlWin);



// // map
// const game = record.map(item => item.year);
// console.log(game);



// function pricesFoo(item) {
//     console.log('inside of pricesFoo', item);
//     return item.result;
// }

// const prices = record.map(pricesFoo);

// const inventory = record.map(item => item.year)

// console.log(inventory);


// const halfOff = record.map(item => {
//     let itemCopy = Object.assign({}, item);
//     itemCopy.year = itemCopy.year / 2;
//     console.log(itemCopy);
// })
