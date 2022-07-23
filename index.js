// function findMatching(drivers, matchedDriver) {

//     return drivers.filter(function(driver) {

//         return driver.toLowerCase() === matchedDriver.toLowerCase()})
// }

// function fuzzyMatch(drivers, argument) {

//     return drivers.filter(function(driver) {

//         return driver.toLowerCase().substring(0, argument.length) === argument.toLowerCase()
//     })

// }

// function matchName(drivers, argument) {
//     return drivers.filter(function(driver) {

//         return driver.name === argument;
//     })
// }

function findMatching(arr, str) {
  return arr.filter((driver) => driver.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arr, str) {
  return arr.filter((driver) => driver.slice(0, 2) === str);
}

function matchName(arr, str) {
  return arr.filter((driver) => driver.name === str);
}

// let drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah"];
// console.log(findMatching(drivers, "bobby"));
