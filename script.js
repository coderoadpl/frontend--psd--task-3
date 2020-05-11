const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNumbers = numbers

// this is true because in newNumbers is reference to array stored in numbers
console.log(numbers === newNumbers)

const copyOfNumbers = numbers.slice()

// this is false cause copyOfNumbers is new array produced by .slice()
console.log(numbers === copyOfNumbers)

const person1 = { name: 'Ola', age: 21 }
const person2 = { name: 'Ala', age: 21 }

const people = [person1, person2]

const newPeople = people

console.log(newPeople === people) // true

const copyOfPeople = people.slice()

console.log(copyOfPeople === people) // false

// this is a SHALLOW COPY, references inside array stays the same!
console.log(copyOfPeople[0] === people[0]) // true

const copyOfPeopleSimulated = [person1, person2]

const firstThreeNumbers = numbers.slice(0, 3)
const lastThreeNumbers = numbers.slice(-3)

const removeElement = function (array, indexToRemove) {

    const head = array.slice(0, indexToRemove)
    const tail = array.slice(indexToRemove + 1)

    const newArray = head.concat(tail)

    return newArray

}

const numbersWithout4 = removeElement(numbers, 4)
console.log(numbersWithout4)

const numbersWithout6 = removeElement(numbers, 6)
console.log(numbersWithout6)

const numbersWithout0 = removeElement(numbers, 0)
console.log(numbersWithout0)

const numbersWithout9 = removeElement(numbers, 9)
console.log(numbersWithout9)
