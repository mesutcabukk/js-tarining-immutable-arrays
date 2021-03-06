/**
/**
 * NOTES:
 * Do not forget to insert RETURN statement, if needed!
 * Please use the following functions primarily and if needed all the other array functions
 *
 * - Array.prototpye.forEach(fn)
 * - Array.prototpye.find(fn)
 * - Array.prototpye.filter(fn)
 * - Array.prototpye.map(fn)
 * - Array.prototpye.reduce(fn)
 * - Array.prototpye.every(fn)
 * - Array.prototpye.some(fn)
 * - ...
 *
 *  Remember:
 *  () => {}  // this is an arrow function, basically a short form of function decleration.
 *  let       // this is another reserved for declaring variables like "var" which beawares of scopes!
 *  const     // this is an alternative way of declaring variables which does not allowed reference changes
 *
 * Note that:
 * - In the function paramter list the parameters are prefixed with "p" like "pPassengers"
 * - The decleration order of functions is not important!
 */



function findNumberOfPassengers(pPassengers){
    return pPassengers.length;
}

function findPersonByIndex(pPassengers, pIndex){
    return pPassengers.[pIndex-1];
}

function findNumberOfWomen(pPassengers){
    var theWomen = pPassengers.filter(function(pPerson){
        return pPerson.gender == "F";
    });

    return theWomen.length;
}

function findNumberOfMen(pPassengers){
    return pPassengers;
}

function findPersonByTicketId(pPassengers, pId){
    const person = pPassengers.find(function(pPerson){
        return pPerson.id == pId;
    });

    return person.lastname;
}

function findPassengersWithNoChildren(pPassengers){
    return pPassengers;
}

function findUnderagePassengers(pPassengers){
    return pPassengers;
}