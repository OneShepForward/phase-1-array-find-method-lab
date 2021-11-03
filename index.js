
// const superbowlWin = function(array) {
//     if (array.result === "W") {
//         return array.year;
//     } 
// }


  
// console.log(record[1].year);

// function loopAndUpdate(array) {
//     const updatedArray = [];
//     for (let item of array){
//         // console.log(array);
//         // console.log(updatedArray);
//         updatedArray.push(item.title);
//     }
//     console.log(updatedArray);
// }

// loopAndUpdate(record);


// function years(item) {
//     return item.year;
// }

// function results(item) {
//     return item.price;
// }



// Loop through inventory and find the first object whose condition returns true

// function loopThroughAndFind(outcome, finder) {
//     let found = null;
//     for(let item of outcome){
//         if(finder(item) === true){
//             found = item.year;
//             break;
//         }
//     }
//     return found;
// }




// console.log(findWinner(record));

// record of games

const record = [
    { year: "1970", result: "N/A"},
    // { year: "1969", result: "W"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "L"},
  ];

// Try the .find method

// Will find the first superbowl win

function findWinner(win){
    return win.result === 'W';
}


function superbowlWin(array) {
    
    let foundYear = array.find(findWinner);
    // console.log(foundYear == undefined);
    
    
    if (foundYear == undefined) {
        return undefined;
    } else {
        return foundYear.year;
    }
    
    // return foundYear.year;
    // array.find(findWinner);


    // if (typeof foundYear.year === "string"){
    //     return foundYear.year;
    // }
    // else {
    //     return undefined;
    // }
}



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
