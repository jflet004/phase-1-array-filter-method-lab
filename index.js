// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(array, string) {
    const match = array.filter(name => name.toLowerCase() === string.toLowerCase());
    return match;
}

function fuzzyMatch(array, string) {
    const firstLetters = array.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
    return firstLetters;
}

function matchName (array, string) {
    const driverInfo = array.filter(info => info.name === string);
    return driverInfo;
}
  

console.log(matchName(drivers, 'Sally'));