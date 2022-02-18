var gotJob = false;
var moneySaved = 150000;
var hasFlat = true;

// TWO CONDITION HAVE TO BE FULLFILLED

// if (gotJob && moneySaved > 200000 ) {
//     console.log('cholo biya kore feli')
// }

// else {
//     console.log('tor kopale biya nai')
// }

// MORE THEN TWO CONDITION AND HAVE TO FULLFILL ALL

// if (gotJob && moneySaved > 200000 && hasFlat == true) {
//     console.log('cholo biya kore feli')
// }


// else {
//     console.log('tor kopale biya nai')
// }


// HERE MINIMUN ONE CONDITION HAS TO BE FULLFILLED FROM TWO CONDITION

if ((gotJob == true && moneySaved > 200000) || hasFlat == true) {
    console.log('cholo biya kore feli')
}

else {
    console.log('tor kopale biya nai')
}