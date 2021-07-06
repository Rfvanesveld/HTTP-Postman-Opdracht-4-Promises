//Oefening 1:

// Schrijf een functie testNum waaraan een getal als argument moet doorgegeven 
// worden en een Belofte teruggeeft 
// die test of de waarde kleiner of groter is dan de waarde 10. 
// Log het resultaat in de console.

const log = console.log;

const testNum = num => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + " is greater than 10..");
        } else (num < 10); {
            reject(num + " is smaller than 10..")
        }
    });
};

// log(testNum(9))
// log(testNum(11))

testNum(9)
    .then(result => log(result))
    .catch(error => log(error))

testNum(11)
    .then(result => log(result))
    .catch(error => log(error))

// Oefening 2:

// Schrijf twee functies die gebruik maken van beloften die je kunt ketenen! 
// De eerste functie, makeAllCaps(), zal een reeks woorden opnemen en deze met een hoofdletter schrijven, 

// De tweede functie, sortWords(), zal de woorden in alfabetische volgorde sorteren. 
// Als de array alles behalve strings bevat, zou er een fout moeten optreden.
// Roep deze functies dan aan door de beloften *aaneen te haken*


const makeAllCaps = words => {
    return new Promise((resolve, reject) => {
        if (
            words.every(word => {
                return typeof word === 'string';
            })
        ) {
            resolve(
                sortWords(words.map(word => {
                    return word.toUpperCase();
                })
                )
            );
        } else {
            reject('Not a string!');
        }
    });
};
const sortWords = words => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort());
        } else {
            reject('strings only');
        }
    });
};;

const arrayOfWords = ['komkommer', 'tomaten', 'avocado'];


makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => log(result))
    .catch(error => log(error))

const gecompliceerdArray = ['komkommer', 44, true];

makeAllCaps(gecompliceerdArray)
    .then(sortWords(gecompliceerdArray))
    .then(result => log(result))
    .catch(error => log(error))


// Call beide functies, koppel ze aan elkaar en log het resultaat in de console
